const { DataTypes } = require("sequelize");
const sequelize = require("../database/connect");

const Credentials = sequelize.define(
    "credentials",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_teacher: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "credentials"
    }
);

module.exports = Credentials;