var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

    var Character = sequelize.define('character', {
        id: sequelize.INT,
        routeName: sequelize.STRING,
        name: sequelize.STRING,
        role: sequelize.STRING,
        age: sequelize.INT,
        forcePoints: sequelize.INT

    }, {
        freezTableName: true
    });

    Character.sync();

    module.exports = Character