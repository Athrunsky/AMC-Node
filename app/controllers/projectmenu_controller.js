const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const Project = require('../model/projects');

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