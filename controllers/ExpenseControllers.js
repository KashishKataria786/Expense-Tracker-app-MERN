import { ExpenseModal } from "../models/ExpenseModel.js";

// POST controller for Adding Expenses
export const POSTAddExpenseController = async (req, res) => {
  try {
    const {
      amount,
      title,
      date,
      month,
      year,
      expenseCategory,
      description,
      paymentMode,
    } = req.body;

    // Check for required fields
    if (!amount || !title || !date || !month || !year || !expenseCategory || !paymentMode) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    // Construct full date string and parse it
    const fullDateString = `${date} ${month} ${year}`;
    const parsedDate = new Date(`${date} ${month} ${year}`);

    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: "Invalid date format." });
    }

    const newExpense = new ExpenseModal({
      amount,
      title,
      date,
      month,
      year,
      expenseCategory,
      description,
      paymentMode,
      dateOfExpense: parsedDate,
    });

    const savedExpense = await newExpense.save();

    if (savedExpense) {
      console.log(`${title} - Expense Saved`);
      return res.status(200).json({ message: "Expense saved successfully", expense: savedExpense });
    } else {
      return res.status(500).json({ message: "Failed to save expense." });
    }
  } catch (error) {
    console.error("Error saving expense:", error);
    return res.status(500).json({
      message: "An error occurred while saving the expense.",
      error: error.message,
    });
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
