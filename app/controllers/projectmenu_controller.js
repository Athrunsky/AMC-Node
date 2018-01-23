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
exports.serachProject = async (ctx,next) =>{
    let array = await Project.findAll();
    ctx.body = {
        array: array
    }
};
exports.postProject = async(ctx,next)=>{
    let name = ctx.query.name;
    if(!name){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
    let createPerson = 'Ren';
    let now = Date.now();
    await Project.create({
        name:name,
        createPerson:createPerson,
        createDate:now
    })
};