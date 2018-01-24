const Sequelize = require('sequelize');
const config = require('../../config/mysql_config');

//初始化数据库
let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
let Pet = sequelize.define('pets', {
    /*id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },*/
    name: {type:Sequelize.STRING(100)},
    gender: {type:Sequelize.BOOLEAN},
    birth: {type:Sequelize.STRING(10)},
    createdAt: {type:Sequelize.BIGINT},
    updatedAt: {type:Sequelize.BIGINT},
    version: {type:Sequelize.BIGINT}
}, {
    timestamps: false
});

    module.exports = Pet;