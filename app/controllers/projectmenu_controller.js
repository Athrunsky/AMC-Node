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
    let name = ctx.request.body.name;
    let createPerson = 'Ren';
    let now = new Date();
    let result = await Project.findCreateFind({
        where:{
            name:name
        },
        defaults:{
            name:name,
            createPerson:createPerson,
            createDate:now
        }
    });
    if(!result[1]){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
};