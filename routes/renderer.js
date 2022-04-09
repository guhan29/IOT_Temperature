var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	return res.send("<h1>Hello World from Openode!</h1>");
});

router.get('/:value', function (req, res) {
	return res.send("<h1>Your request GET /"+req.params.value+"</h1>");
});

module.exports = router;
