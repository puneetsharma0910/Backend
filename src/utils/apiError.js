//refer node js documentation
// ek standardised approach to send errors 

class apiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack,
        success = false
    ){
        super()
        this.statusCode = statusCode
        this.message = message
        this.errors = errors
        this.success = success
        if(stack){
            Error.stackTraceLimit = stack
        }
    }
};

export default apiError