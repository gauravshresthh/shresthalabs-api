const mongoose = require('mongoose');

const LabsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name cannot be more than 50 characters'],
	},
	slug: String,
	description: {
		type: String,
		required: [true, 'Please add a description'],
		maxlength: [500, 'Description cannot be more than 500 characters'],
	},
	phone: {
		type: String,
		maxlength: [20, 'Phone number cannot be more than 20 characters'],
	},
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	location: {
		type: String,
		enum: ['Point'],
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
		index: '2dsphere',
	},
	formattedAddress: String,
	street: String,
	city: String,
	state: String,
	zipcode: String,
	country: String,
	careers: {
		type: [String],
		required: true,
		enum: [
			'Web Development',
			'Mobile Development',
			'UX/UI',
			'Data Science',
			'Business',
			'Other',
		],
	},
	averageRating: {
		type: Number,
		min: [1, 'Rating must be at least 1'],
		max: [10, 'Rating must not be more than 10'],
	},
	averageCost: Number,
	photo: {
		type: String,
		default: 'default.jpg',
	},
	housing: {
		type: Boolean,
		default: false,
	},
	jobAssistance: {
		type: Boolean,
		default: false,
	},
	jobGuarantee: {
		type: Boolean,
		default: false,
	},
	acceptGi: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Labs', LabsSchema);
