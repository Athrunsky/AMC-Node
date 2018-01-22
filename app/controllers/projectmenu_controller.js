const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
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
let Project = sequelize.define('projects', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: {type:Sequelize.STRING(100)},
    createPerson: {type:Sequelize.STRING(10)},
    createDate: {type:Sequelize.BIGINT},
}, {
    timestamps: false
});
exports.testProject = async (ctx,next) =>{
    let array = await Project.findAll();
    ctx.body = {
        array: array
    }
};