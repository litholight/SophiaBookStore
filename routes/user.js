const express = require('express');
const router = express.Router();

const {signup, signin} = require('../controllers/user.js');
const {userSignupValidator} = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);

module.exports = router;

