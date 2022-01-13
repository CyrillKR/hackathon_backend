require('dotenv').config();

const connectDB = require('./db/connect');
const User = require('./models/userSchema');

const jsonUsers = require('./users.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await User.deleteMany();
        await User.create(jsonUsers);
        console.log('success');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();