exports.getAllLabs = (req, res, next) => {
	return res.status(200).json({ success: true, message: 'Show all labs' });
};

exports.getLab = (req, res, next) => {
	return res.status(200).json({ success: true, message: 'Show single lab' });
};

exports.createLab = (req, res) => {
	return res.status(200).json({ success: true, message: 'Create new lab' });
};

exports.updateLab = (req, res) => {
	return res
		.status(200)
		.json({ success: true, message: 'Update existing lab' });
};

exports.deleteLab = (req, res) => {
	return res
		.status(200)
		.json({ success: true, message: 'Delete existing lab' });
};
