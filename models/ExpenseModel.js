import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
        min:[0,"Amount must be Positive"]
    },
    title:{
        type:String,
        required:true,
    },
    date:{
        type:Number,
        required:true,
        min:1,
        max:31,
    },
    month:{
        type:String,
        required:true,
        enum:["January","February", "March", "April", "May","June","July","August","September","October", "November","Decemeber"]
    },
    year:{
        type:String,
        required:true,
    },
    expenseCategory:{
        type:String,
        required:true,
        enum:["Food","Shopping","Travel","Personel","Others","Bills"]
    },
    description:{
        type:String
    },
    paymentMode:{
        type:String,
        required:true,
         enum: ['Cash', 'Card', 'UPI', 'NetBanking', 'Others'],
    },
    // dateOfExpense:{
    //     type:Date,
    //     required:Date.now,
    // }
},{timestamps:true})

export const ExpenseModal = mongoose.model("ExpenseModal", ExpenseSchema)