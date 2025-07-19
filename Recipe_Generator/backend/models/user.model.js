const mongoose = require('mongoose');
const validator=require('validator');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        validate:{
            validator:validator.isEmail,
        }
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator(password){
                if(password.includes(" ")){
                    return res.status(400).send({message:"Password should not contain any whitespace"});
                }
                if(password.includes("password")){
                    return res.status(400).send({message:"Password should not be password"});
                }
            }
        }
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);

module.exports=User;