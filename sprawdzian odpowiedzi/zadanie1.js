function processOrder(orderID){
    return new Promise((resolve,reject)=>{
        if(orderID<0){
            reject("Invalid Order ID")
        }else{
            setTimeout(()=>{
                console.log(`Proccesing order: ${orderID}`);
                setTimeout(()=>{
                    console.log(`Order ${orderID} processed`);
                    resolve(orderID);
                },2000)
            },1000)
        }
    })
}

processOrder(1).then((orderID)=>{
    console.log(`Order ${orderID} completed`);
}).catch((err)=>{
    console.log(err);
})