const Product = require('../models/product');
const _ = require('lodash');
const fs = require('fs');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, field, files) => {
        if(err) {
            return res.status(400).json({
                error: 'IMage could not be uploaded'
            })
        }
        let product = new Product(fields)

        if(files.photo) {
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err, save) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }
            res.json(result);
        })
    });
};