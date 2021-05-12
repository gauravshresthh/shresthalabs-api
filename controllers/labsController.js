const Labs = require('../models/LabsModel');
const catchAsync = require('../middlewares/catchAsync');
const AppError = require('../utils/appError');

exports.getAllLabs = catchAsync(async (req, res, next) => {
	const labs = await Labs.find();

	return res
		.status(200)
		.json({ success: true, count: labs.length, data: labs });
});

exports.getLab = catchAsync(async (req, res, next) => {
	const lab = await Labs.findById(req.params.id);

	if (!lab) {
		return next(new AppError(`Lab not found with id of ${req.params.id}`, 404));
	}

	return res.status(200).json({ success: true, data: lab });
});

exports.createLab = catchAsync(async (req, res, next) => {
	const lab = await Labs.create(req.body);

	return res.status(200).json({ success: true, data: lab });
});

exports.updateLab = catchAsync(async (req, res, next) => {
	const lab = await Labs.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!lab) {
		return next(new AppError(`Lab not found with id of ${req.params.id}`, 404));
	}
	return res.status(200).json({ success: true, data: lab });
});

exports.deleteLab = catchAsync(async (req, res, next) => {
	const lab = await Labs.findByIdAndDelete(req.params.id);

	if (!lab) {
		return next(new AppError(`Lab not found with id of ${req.params.id}`, 404));
	}

	return res
		.status(200)
		.json({ success: true, message: `Lab with id: ${req.params.id} deleted` });
});
