const Object = require('../../models/core/object');

function randomFunction(params) {
    return (new Promise((resolve, reject) => {
        if(params.test) {
            resolve({status: "OK"});
        }
        reject({status: "KO"});
    }));
}

module.exports = {
    randomFunction
};