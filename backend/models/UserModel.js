import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },
    gender:{
        type:String,
        default:''
    },
    dob:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        default:''
    }
}, {timestamps:true});

export default mongoose.model('User', userSchema);