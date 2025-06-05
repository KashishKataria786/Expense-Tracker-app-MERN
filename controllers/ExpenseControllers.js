import { ExpenseModal } from "../models/ExpenseModel.js";

// POST controller for Adding Expenses
export const POSTAddExpenseController = async (req, res) => {
    try{
      const { amount , title, expenseCategory, dateOfExpense,description, paymentMode } = req.body;
      if ( !amount || !title || !expenseCategory || !paymentMode) {
        res.status(400).json("Data Required");
      }
    const newExpense = new ExpenseModal({
    amount,
    title,
    expenseCategory,
    description,
    dateOfExpense: new Date(),
    paymentMode,
  });

  if(await newExpense.save()){
    console.log(`${title} - Expense Saved`);
  }else{
    console.log("Error in saving Expense");

    res.status(400).json({
        message:"Cannot Add Expense Due to Technical Difficulty",
        error
    })
  }


  return res.status(201).json({
    message:`${title} - Expense Created Successfully`,
    data:newExpense
  })

  }catch (error) {
    console.log(error);
    res.status(500).json({
        message:"Internal Server Error",
        error
    })
  }
};

// GET Controller for Getting All Expenses
export const GetAllExpenseController = async (req, res) => {
  try {
    const allExpenseData = await ExpenseModal.find().sort({ createdAt: -1 });
    console.log("Expense Data", allExpenseData);
    return res.status(200).json({
      message: "All Expense data Loaded",
      data: allExpenseData,
    });
  } catch (error) {
    console.log("Error fetching Expense Data", error);
    return res.status(500).json({
      message: "Failed to fetch Expense Data",
      error: error.message,
    });
  }
};
