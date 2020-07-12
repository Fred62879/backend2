const { uuid } = require('uuidv4');
const mongoose = require('mongoose');
const Mess = require('./messSchema.js');

const uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wu78a.mongodb.net/message?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("mongo connected");
});

const data = {
    id: "3",
    mess: "bonjur",
    username: "shaw"
}

const newmess = new Mess(data);
newmess.save(err => {
    if (err) console.log(err);
    else console.log("saved");
})

/*
async function createMess(mess, username) {
    const id = uuid();
    return new Mess({
	id,
	mess,
	username,
  }).save()
}

async function findMess(id) {
  return await Mess.findOne({ id })
}

;(async () => {
    const connector = mongoose.connect(connectionString)
    // const username = process.argv[2].split('=')[1]
    
    let mess = await connector.then(async () => {
      return findMess("1");
    })
    console.log(mess);
    process.exit(0)
})()
*/
