const ApiErrorNames = require('./ApiErrorNames');
/**
 * 自定义Api异常
 */
class ApiError extends Error{
    //构造方法
    constructor(error_name){
    super();//调用父类this
    let error_info = ApiErrorNames.getErrorInfo(error_name);
    this.name = error_name;
    this.code = error_info.code;
    this.message = error_info.message;
    }
}
module.exports = ApiError;