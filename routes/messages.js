const express = require('express');
const { uuid } = require('uuidv4');
const router = express.Router();
// const db = require("../db");
const mongoose = require('mongoose')
const Mess = require('../model/messSchema.js');


// ** Mongo db manipulation
const uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wu78a.mongodb.net/message?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("mongo connected");
});



// ** RESRful routes
router.get('/', function (req, res, next) {
    Mess.find((err, allmess) => {
	if (err) { console.log(err); return; }
	res.status(200).send({
	    data: allmess
	});
    })
});

router.put('/update/:messageId', (req, res, next) => {
    Mess.findOneAndUpdate({ id: req.params.messageId }, {mess: req.body.mess}, (err, res) => {
	if (err) console.log(err);
	else return res;
    });
});

router.get('/detail/:messageId', function (req, res, next) {
    Mess.find({ id: req.params.messageId }, (err, foundMess) => {
	if (err) { console.log(err); return; }
	res.setHeader('Content-Type', 'application/json');
	console.log(foundMess[0]);
	res.status(200).send({
	    data: foundMess[0]
	});
    });
});

router.post('/', function(req, res, next) {
    const postMess = req.body;
    postMess.id = uuid();
    const newMess = new Mess(postMess);
    newMess.save(err => {
	if (err) { console.log("ERROR" + err); return; }
	res.status(200).send({
	    data: newMess
	});
    });
});

module.exports = router;
