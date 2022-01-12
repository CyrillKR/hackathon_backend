const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadUserImage = async (req, res) => {
    if (!req.files) {
        throw new BadRequestError('No file Uploaded');
    }
    const userImage = req.files.image;
    if (!userImage.mimetype.startsWith('image')) {
        throw new BadRequestError('Please Upload Image');
    }
    const maxSize = 1024 * 1024;
    if (userImage.size > maxSize) {
        throw new BadRequestError('Image file too large');
    }

    const result = await cloudinary.uploader.upload(userImage.tempFilePath, {
        use_filename: true,
        folder: 'user-images',
    });
    fs.unlinkSync(userImage.tempFilePath);
    return res.status(StatusCodes.OK).json({ image: result.secure_url });
};

module.exports = {
    uploadUserImage
};