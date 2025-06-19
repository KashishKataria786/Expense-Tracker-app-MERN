import { ExpenseModal } from '../models/ExpenseModel.js'

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
      paymentMode
    } = req.body

    // Check for required fields
    if (
      !amount ||
      !title ||
      !date ||
      !month ||
      !year ||
      !expenseCategory ||
      !paymentMode
    ) {
      return res
        .status(400)
        .json({ message: 'All required fields must be filled.' })
    }

    const newExpense = new ExpenseModal({
      amount,
      title,
      date,
      month,
      year,
      expenseCategory,
      description,
      paymentMode
    })

    const savedExpense = await newExpense.save()

    if (savedExpense) {
      console.log(`${title} - Expense Saved`)
      return res
        .status(200)
        .json({ message: 'Expense saved successfully', expense: savedExpense })
    } else {
      return res.status(500).json({ message: 'Failed to save expense.' })
    }
  } catch (error) {
    console.error('Error saving expense:', error)
    return res.status(500).json({
      message: 'An error occurred while saving the expense.',
      error: error.message
    })
  }
}

// GET Controller for Getting All Expenses
export const GetAllExpenseController = async (req, res) => {
  try {
    const allExpenseData = await ExpenseModal.find().sort({ createdAt: -1 })
    console.log(allExpenseData)
    return res.status(200).json({
      message: 'All Expense data Loaded',
      data: allExpenseData
    })
  } catch (error) {
    console.log('Error fetching Expense Data', error)
    return res.status(500).json({
      message: 'Failed to fetch Expense Data',
      error: error.message
    })
  }
}

// GET Controller for Getting a Particular Expense
export const GETAParticulatExpenseController = async (req, res) => {
  const { id } = req.params
  try {
    if (!id) {
      res.status(400).send({
        message: 'Client Side Error / 404 Bad Request'
      })
    }
    const response = await ExpenseModal.findById(id)
    if (!response) {
      return res.status(404).send({ message: 'Expense Not Found' })
    }

    res
      .status(200)
      .send({ message: 'Got a Particular Expense', data: response })
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Delete A Particular Expense
export const DELETEaParticularExpense = async (req, res) => {
  const { id } = req.params
  try {
    const deleteExpense = await ExpenseModal.findByIdAndDelete(id)
    if (!deleteExpense) {
      return res.status(404).json({ message: 'Expense not found' })
    }
    res
      .status(200)
      .json({ message: 'Expense deleted successfully', data: deleteExpense })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Patch A Particular Expense
export const UPDATEaParticularExpense = async (req, res) => {
  const { id } = req.params
  const updateData = req.body

  if (!id) {
    return res.status(400).json({ message: 'Bad Request: Missing ID' })
  }

  if (!updateData) {
    return res.status(400).json({ message: 'Bad Request: Missing Data' })
  }
  try {
    const updatedData = await ExpenseModal.findByIdAndUpdate(
      id,
      {
        $set: updateData
      },
      { new: true, runValidators: true }
    )

    if (!updatedData) {
      res.status(404).send({ message: 'Expense Not found to Update' })
    }

    res.status(200).send({
      message: 'Expense Updated Successfully',
      data: updatedData
    })
  } catch (error) {
    console.error('Error updating expense:', error)
    res.status(500).json({ message: 'Server Error', error })
  }
}
