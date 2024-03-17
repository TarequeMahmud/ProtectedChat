//external imports
const express = require('express');
const {getLogin} = require('../controller/loginController');
const decorateHTMLResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router()

router.get("/",decorateHTMLResponse('Index'), getLogin);

module.exports = router;