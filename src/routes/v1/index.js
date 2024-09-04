const express=require('express');

const UserController=require('../../controllers/user-controller');
const {AuthRequestValidator}=require('../../middlewares/index');

const router=express.Router();

router.post('/signup',UserController.create);
router.post('/signin',AuthRequestValidator.validateAuthRequest,UserController.signIn);

router.get('/isAuthenticated',UserController.isAuthenticated);
router.get('/isAdmin',AuthRequestValidator.validateisAdminRequest,UserController.isAdmin);

module.exports=router;