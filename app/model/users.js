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
let Users = sequelize.define('users',{
    name:{type:Sequelize.STRING(100)},
    gender: {type:Sequelize.BOOLEAN},
    createdAt: {type:Sequelize.BIGINT}
},{
    timestamps: false
});

    module.exports = Users;