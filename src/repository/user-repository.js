const {User}=require('../models/index');
const {Role}=require('../models/index');
const ClientError = require('../utils/client-error');
const ValidationError=require('../utils/validation-error');
const {StatusCodes} = require('http-status-codes');

class UserRepository{

    async create(data){
        try {
            // console.log("repo",data);
            const user=await User.create(data);
            return user;
        } catch (error) {
            if(error.name=='SequelizeValidationError'){
                // console.log("error in repo",error.name);
                throw new ValidationError(error);           //pass the error to service layer
            }
            console.log("Something wrong at repository level");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id:userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something wrong at repository level");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user=await User.findByPk(userId,{
                attributes:['email','id']
            })
            return user;
        } catch (error) {
            console.log("Something wrong at repository level");
            throw error;
        }
    }

    async getByEmail(userEmail){
        try {
            const user=await User.findOne({
                where:{
                    email:userEmail
                }
            })
            if(!user){              //agar user nhi milta hai to null return karta hai
                throw new ClientError(
                    'Attribute_not_found',
                    'Invalid email provided',
                    'Email not found in the database',
                    StatusCodes.NOT_FOUND
                )
            }
            return user;
        } catch (error) {
            console.log("Something went wrong in getting user by email",error);
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            const user=await User.findByPk(userId);
            const adminRole=await Role.findOne({
                where:{
                    name:'ADMIN'
                }
            })
            // console.log(adminRole,user);
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something wrong at admin verification");
            throw error;
        }
    }

}

module.exports=UserRepository;