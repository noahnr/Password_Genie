var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var Site = sequelize.define("Site", {
        site: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        sPassword: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        }

    });
}