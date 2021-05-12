const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const connectDB = require('./db');
const app = express();
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

const labsRouter = require('./routes/labsRouter');

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/labs', labsRouter);

app.use('/', (req, res) => {
	return res.json({ success: true, message: 'welcome to hashlabs api' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
	console.log(`Server listening in ${process.env.NODE_ENV} on PORT ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
	console.log(`Error:${err.message}`);
	server.close(() => process.exit(1));
});
