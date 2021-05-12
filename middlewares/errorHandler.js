const AppError = require('../utils/appError');

const errorHandler = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;

	console.log(err.stack);

	// Mongoose bad objectID
	if (err.name === 'CastError') {
		const message = `Resource not found with i of ${err.value}`;
		error = new AppError(message, 404);
	}

	// Mongoose duplicate key
	if (err.code === 11000) {
		const message = `Duplicate field value entered`;
		const error = new AppError(message, 400);
	}

	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map((val) => val.message);
		error = new AppError(message, 400);
	}

	return res
		.status(error.statusCode || 500)
		.json({ success: false, error: error.message || 'Internal Server Error' });
};

module.exports = errorHandler;
