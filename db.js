const mongoose = require('mongoose');

const connectDB = async () => {
	const connection = await mongoose.connect(process.env.DATABASE_LOCAL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});

	console.log(`MongoDB Connected ... : ${connection.connection.host}`);
};

module.exports = connectDB;
