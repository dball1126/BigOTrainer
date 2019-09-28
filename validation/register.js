const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.username = validText(data.username) ? data.username : "";

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email must be at least 6 characters and valid format";
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password must be at least 6 characters";
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username must be at least 6 characters";
    }

   

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}