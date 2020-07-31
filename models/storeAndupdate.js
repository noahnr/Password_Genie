var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {

var User = sequelize.define('storeAndupdate', {
    annotation_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        field: 'user_name'
    },
    passWord: {
        type: DataTypes.STRING,
        field: 'password'
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,

}, {
    freezeTableName: true
});

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
    return storeAndupdate;
}
