//external imports
const express = require('express');
const {getInbox} = require('../controller/inboxController');
const decorateHTMLResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router()

router.get("/", decorateHTMLResponse('Inbox'), getInbox);

module.exports = router;