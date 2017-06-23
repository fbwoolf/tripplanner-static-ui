const Sequelize = require('sequelize');
const db = require('./_db');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
		//defaultValue: value,
		//validate: {}
	},
    num_stars: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
	amenitites: {
        type: Sequelize.STRING
        //allowNull: false
    }
});

module.exports = Hotel;