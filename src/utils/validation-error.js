const AppErrors = require('./error-handler');
const {StatusCodes} = require('http-status-codes');

class ValidationError extends AppErrors{
    constructor(error){
        let errorName=error.name;               //If you pass wrong thing in postman like not proper email then you will get a validation error from that syntax we are writing these.
        let explanation=[];

        error.errors.forEach((err)=>{       //under errors there is array of object that why we are traversing on each key and pushing the value of message
            explanation.push(err.message);
        })
        super(
            errorName,
            "Not able to validate the error in the request",
            explanation,
            StatusCodes.BAD_REQUEST             //We get validation error because of bad request .

        );
    }
}

module.exports=ValidationError;