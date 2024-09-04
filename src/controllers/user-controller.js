const UserService=require('../services/user-service');
const {StatusCodes}=require('http-status-codes');

const userService=new UserService();

const create=async (req,res)=>{
    try {
        console.log(req.body.email)
        const user=await userService.create({
            email:req.body.email,
            password:req.body.password 
        });
        return res.status(201).json({
            message:"User created successfully",
            data:user,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message:error.message,
            data:{},
            success:false,
            err:error.explanation
        })
    }
}

const signIn=async (req,res)=>{
    try {
        const token=await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            message:"User signed in successfully",
            data:{token},   
            success:true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message:error.message,
            data:{},
            success:false,
            err:error.explanation
        })
    }
}

const isAuthenticated=async (req,res)=>{
    try {
        const token=req.headers['x-access-token'];      //hum headers mein token pass karenge
        const response=await userService.isAuthenticated(token);
        return res.status(200).json({
            message:"User is authenticated",
            data:response,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went wrong in authentication",
            data:{},
            success:false,
            err:error
        })
    }
}

const isAdmin=async (req,res)=>{
    try {
        const response=await userService.isAdmin(req.body.id);
        return res.status(200).json({
            message:"Successfully fetched whether user is admin or not",
            data:response,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went wrong in admin verification in controller",
            data:{},
            success:false,
            err:error
        })
    }
}

module.exports={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}