require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch(err => {
		console.log('Błąd łączenia z MongoDB', err)
	})

const User = mongoose.model('User', new mongoose.Schema({ name: String }))

app.get('/users', async (req, res) => {
	const users = await User.find()
	res.json(users)
})

app.post('/users', async (req, res) => {
	const user = new User({ name: req.body.name })
	await user.save()
	res.json(user)
})

app.delete('/users/:id', async (req, res) => {
	await User.findByIdAndDelete(req.params.id)
	res.json({ message: 'User deleted' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Serwer działa na http://localhost:${PORT}`)
})
