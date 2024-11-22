const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
    SESSION_ID:|| "um5w1JrS#ccrZ7XklL9YsxclccZG_w4hKgPe9DZTt3nOObpQoa0I",
};
