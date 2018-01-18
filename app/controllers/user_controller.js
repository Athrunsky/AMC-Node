//获取用户
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
let Users = sequelize.define('users',{
    name:{type:Sequelize.STRING(100)},
    gender: {type:Sequelize.BOOLEAN},
    createdAt: {type:Sequelize.BIGINT}
},{
    timestamps: false
})

exports.getUser = async (ctx, next) => {
    if(ctx.query.id = null){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
    ctx.body = {
        username: '阿，希爸',
        age: 30
    }
};
exports.testUser = async () =>{
        let now = Date.now();
        let dog = await Pet.create({
            /*id: 'd-' + now,*/
            name: 'Odie',
            gender: false,
            birth: '2008-08-08',
            createdAt: now,
            updatedAt: now,
            version: 0
        });
        console.log('created: ' + JSON.stringify(dog));
};
exports.postUser = async(ctx,next)=>{
    let name = ctx.query.name;
    let now = Date.now();
    await Users.create({
        name:name,
        gender:1,
        createdAt:now
    })
};
//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
};