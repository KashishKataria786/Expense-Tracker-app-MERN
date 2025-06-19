import express from 'express'
import { DELETEaParticularExpense, GetAllExpenseController, GETAParticulatExpenseController, POSTAddExpenseController, UPDATEaParticularExpense } from '../controllers/ExpenseControllers.js';

const ExpenseRoutes= express.Router();

ExpenseRoutes.post('/add-expense',POSTAddExpenseController);
ExpenseRoutes.get('/get-all-expenses', GetAllExpenseController);
ExpenseRoutes.delete('/delete-expense/:id',DELETEaParticularExpense);
ExpenseRoutes.get('/get-expense/:id',GETAParticulatExpenseController);
ExpenseRoutes.patch('/update-expense/:id', UPDATEaParticularExpense);

export default ExpenseRoutes;