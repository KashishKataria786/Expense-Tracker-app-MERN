import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    expenseCategory:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    paymentMode:{
        type:String,
        required:true,
    },
    dateOfExpense:{
        type:Date,
        required:Date.now,
    }

},{timestamps:true})

export const ExpenseModal = mongoose.model("ExpenseModal", ExpenseSchema)