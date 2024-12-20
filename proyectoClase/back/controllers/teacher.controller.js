const modelTeacher = require("../models/teacher.models");

const getList = async () => {
    const result = await modelTeacher.findAll();
    return result;
}

module.exports = {
    getList,
};