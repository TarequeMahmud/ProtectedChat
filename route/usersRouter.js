//external imports
const express = require('express');
const {getUser} = require('../controller/userController');
const decorateHTMLResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router()

router.get("/",decorateHTMLResponse('User'), getUser);

module.exports = router;