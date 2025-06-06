import express from 'express'
import { DELETEaParticularExpense, GetAllExpenseController, POSTAddExpenseController } from '../controllers/ExpenseControllers.js';

const ExpenseRoutes= express.Router();

ExpenseRoutes.post('/add-expense',POSTAddExpenseController);
ExpenseRoutes.get('/get-all-expenses', GetAllExpenseController);
ExpenseRoutes.delete('/delete-expense/:id',DELETEaParticularExpense)

export default ExpenseRoutes;