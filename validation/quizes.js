const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';

    if (!Validator.isLength(data.name, {min: 5, max: 20})) {
        errors.text = 'Quiz name must be between 5 and 20 characters'
    }

    if (Validator.isEmpty(data.name)) {
        errors.text = 'Name field is required;'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

