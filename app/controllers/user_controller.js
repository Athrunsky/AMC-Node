//获取用户
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const Pet = require('../model/pets');
const Users = require('../model/users');

exports.getUser = async (ctx, next) => {
    let array = await Users.findAll();
    ctx.body = {
        array: array
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