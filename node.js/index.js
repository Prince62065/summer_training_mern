const express=require('express');
const app=express();
const userRoutes=require('./routes/users.route');

app.use(express.json());
app.use('/user',userRoutes);

app.listen(3000,()=>{
    console.log("Server start");
})