import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import Car from './models/Car.js'
import connect from './db/connect.js'
import e from 'express'
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
dotenv.config()
app.use(cors())

app.get("/cars",async(req,res)=>{
    try{
        const cars = await Car.find()
        res.json(cars)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
app.get("/cars/:id",async(req,res)=>{
    const id = req.params.id
    if(!id){
        return res.status(400).json({message:"Nie podano id"})
    }
    try{
        const car = await Car.findById(id)
        if(!car){
            return res.status(404).json({message:"Nie znaleziono auta o podanym id"})
        }
        res.json(car)
    } catch(err){
        res.status(500).json({message:err.message})
    }
})
app.post("/cars", async (req,res)=>{
    const {carBand, model, carYear, mileage, fuel ,RegistrationNumber} = req.body
    if(!carBand || !model || !carYear || !mileage || !fuel || !RegistrationNumber){
        return res.status(400).json({message:"Wszystkie pola są wymnaabe"})
    }
    const newCar = new Car({
        carBand:carBand,
        model:model,
        carYear:carYear,
        mileage:mileage,
        fuel:fuel,
        RegistrationNumber:RegistrationNumber
    });
    try{
        await newCar.save()
        res.status(201).json(newCar)
    }catch(err){
        res.status(400).json({message:err.message})
    }
    console.log("cos0")
})
app.delete("/cars",async(req,res)=>{
    const id = req.body.id
    if(!id){
        return res.status(400).json({message:"Nie podano id"})
    }
    try{
        const car = await Car.findByIdAndDelete(id)
        if(!car){
            return res.status(404).json({message:"Nie znaleziono auta o podanym id"})
        }
        res.json({message:"Usunięto auto"})
    } catch(err){
        res.status(500).json({message:err.message})
    }
})
app.put("/cars",async(req,res)=>{
    const id = req.body.id
    const {carBand, model, carYear, mileage, fuel ,RegistrationNumber} = req.body
    if(!id){
        return res.status(400).json({message:"Nie podano id"})
    }
    try{
        const car = await Car.findById(id)
        if(!car){
            return res.status(404).json({message:"Nie znaleziono auta o podanym id"})
        }
        car.carBand = carBand || car.carBand
        car.model = model || car.model
        car.carYear = carYear || car.carYear
        car.mileage = mileage || car.mileage
        car.fuel = fuel || car.fuel
        car.RegistrationNumber = RegistrationNumber || car.RegistrationNumber
        await car.save()
        res.json(car)   
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})
app.listen(port,()=>{
    connect()
    console.log(`Serwer dziala na http://localhost:${port}`)
})