import express from 'express'
import { GetAllExpenseController, POSTAddExpenseController } from '../controllers/ExpenseControllers.js';

const ExpenseRoutes= express.Router();

ExpenseRoutes.post('/add-expense',POSTAddExpenseController);
ExpenseRoutes.get('/get-all-expenses', GetAllExpenseController);

export default ExpenseRoutes;