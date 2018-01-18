//获取用户
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
exports.getUser = async (ctx, next) => {
    ctx.body = {
        username: '阿，希爸',
        age: 30
    }
};
//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
};