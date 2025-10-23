import mongoose from "mongoose";

 

 const useSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    type:{
        type: String,
        enum: ['admin', 'seller']
    },
    phone:{
        type: Number,
        require: false
    },
 })


export const UserModel = mongoose.model('User', useSchema)