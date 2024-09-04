
const validateAuthRequest = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            message:"Email and password are required",
            success:false
        })
    }   
    next();
}

const validateisAdminRequest=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            data:{},
            message:"User id is required",
            success:false,
            err:"Something went wrong in admin verification in middleware"
        })
    }
    next();
}

module.exports={
    validateAuthRequest,
    validateisAdminRequest
}