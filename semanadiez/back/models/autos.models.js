const { DataTypes } = require("sequelize");
const sequelize = require("../database/connect");

const Autos = sequelize.define(
    "Autos",
    {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        npassengers: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nengine: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "autos"
    }
);

module.exports = Autos;