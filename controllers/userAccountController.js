const Account = require("../models/Users_Account");

exports.createAccount = async (req, res) => {
  try {
    const accountData = req.body;
    const account = new Account(accountData);
    const savedAccount = await account.save();
    res.status(201).json(savedAccount);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the account." });
  }
};

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching accounts." });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const accountId = req.params.id;
    const account = await Account.findById(accountId);
    if (!account) {
      return res.status(404).json({ error: "Account not found." });
    }
    res.json(account);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the account." });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    const updatedAccountData = req.body;

    const updatedAccount = await Account.findByIdAndUpdate(
      accountId,
      updatedAccountData,
      { new: true }
    );

    if (!updatedAccount) {
      return res.status(404).json({ error: "Account not found." });
    }

    res.json(updatedAccount);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the account." });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const accountId = req.params.id;

    const deletedAccount = await Account.findByIdAndDelete(accountId);

    if (!deletedAccount) {
      return res.status(404).json({ error: "Account not found." });
    }

    res.json({ message: "Account deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the account." });
  }
};
