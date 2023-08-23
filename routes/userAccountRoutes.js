const express = require('express');
const router = express.Router();
const accountController = require('../controllers/userAccountController'); 


router.post('/accounts', accountController.createAccount);

router.get('/accounts', accountController.getAllAccounts);

router.get('/accounts/:id', accountController.getAccountById);

router.put('/accounts/:id', accountController.updateAccount);

router.delete('/accounts/:id', accountController.deleteAccount);

module.exports = router;
