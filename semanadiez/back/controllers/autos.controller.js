const modelAutos = require("../models/autos.models");

const getList = async () => {
    const result = await modelAutos.findAll();
    return result;
}

const postCreate = async (data)=>{
    const result = await modelAutos.create(data);
    return result
}

const postUpdate = async (data)=>{
    const result = await modelAutos.update(data, { where: { id: data.id } });
    return result;
}

const postDelete = async (data)=>{
    const result = await modelAutos.destroy({ where: { id: data.id } });
    return result;
}

const postDeleteByName = async (data)=>{
    const result = await modelAutos.destroy({ where: { brand: data.brand } });
    return result;
}

module.exports = {
    getList,
    postCreate,
    postUpdate,
    postDelete,
    postDeleteByName,
};