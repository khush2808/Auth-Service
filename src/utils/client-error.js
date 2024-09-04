const AppErrors = require('./error-handler');
const {StatusCodes} = require('http-status-codes');

class ClientError extends AppErrors{
    constructor(name,message,explanation,statusCode){
        
        super(
            name,
            message,
            explanation,
            statusCode            

        );
    }
}

module.exports=ClientError;