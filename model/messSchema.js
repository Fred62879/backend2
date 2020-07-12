const mongoose = require('mongoose')

const messSchema = new mongoose.Schema({
    id: {
	type: String,
	required: [true, 'id is required']
    },
    mess: {
	type: String,
	required: [true, 'Message is required']
    },
    username: {
	type: String,
	required: [true, 'Username date is required']
    }
})

module.exports = mongoose.model("message", messSchema);
