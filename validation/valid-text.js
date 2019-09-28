const validText = str => {
    return typeof str === 'string' && str.trim().length > 6;
}



module.exports = validText;