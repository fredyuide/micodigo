const modelCredentials = require("../models/credentials.model");

const getLogin = async (username, password) => {
    const result = await modelCredentials.findOne({
        where: {username: username, password: password },
    });
    return result;
}

module.exports = {
    getLogin,
};