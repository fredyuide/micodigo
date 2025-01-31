const modelTeacher = require("../models/teacher.models");

const getList = async () => {
    const result = await modelTeacher.findAll();
    return result;
}

const postCreate = async (data)=>{
    const result = await modelTeacher.create(data);
    return result
}

const postUpdate = async (data)=>{
    const result = await modelTeacher.update(data, { where: { id: data.id } });
    return result;
}

const postDelete = async (data)=>{
    const result = await modelTeacher.destroy({ where: { id: data.id } });9
    return result;
}

module.exports = {
    getList,
    postCreate,
    postUpdate,
    postDelete,
};