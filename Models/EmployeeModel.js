import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: String,
        required: true
    },
    
    salary:{
        type: String,
        required: true,
        
 
    },
    designation:{
        type: String,
        required: true,     
    },
    role:{
        type: String,
        required: true,
        
 
    }
})

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;