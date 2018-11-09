const express = require('express');
const router = express.Router();

const helloWorldController = require('../controllers/hello-world.controller');

router.get('/hello/:world', helloWorldController);

module.exports = router;
