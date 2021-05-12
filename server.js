const express = require('express');
const dotenv = require('dotenv');

const morgan = require('morgan');

dotenv.config();

const app = express();

const labsRouter = require('./routes/labsRouter');

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/labs', labsRouter);

app.use('/', (req, res) => {
	return res.json({ success: true, message: 'welcome to hashlabs api' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listening in ${process.env.NODE_ENV} on PORT ${PORT}`);
});
