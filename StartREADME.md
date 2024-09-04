1) We have started our basic setup like npm init, body-parser, nodemon etc.
2) we have installed sequelize ,mysql2 and npm sequelize init to setup folders like migrations, seeders,models
3) In migration and model file we have used validator which checks whether the format is correct or not
4) We have made the same mvc architecture.
5) But the problem is when we create the user the password is also sent without encryption.
6) So we have used bcypt. We also made changes in model to initiate the process.
7) We have generated salt from serverconfig .
8) bcrypt internally compares the original password and hashed password you can see code in main index.js 
    // const incomingPassword='123456';
        // const user=await User.findByPk(1);
        // const response=bcrypt.compareSync(incomingPassword,user.password);
        // console.log(response);

9) We have made getuser by id in repo. Now we are ready for registration. When the user resister the jwt token will be generated. To generate that we have use jwt package.
10) In service layer we write bussiness logic that's why we are writing create and verifying token there.
11) We can see token is running good or not by console in index .js file 
    // const userService=new UserService();
        // const newToken=userService.createToken({email:"prathamd549@gmail.com",id:1});
        // console.log(newToken);
        // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXRoYW1kNTQ5QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTY4OTUxMzEsImV4cCI6MTcxNjg5ODczMX0.1O6KXrlZrlZGOSgLu546T25nxj8CKhUHZlj_mIsIym4";
        // const response=userService.verifyToken(token);
        // console.log(response);
12) Now we have to authorise. First we need to verify the password.
13) When you sigin you enter email. so we need a function to get userby email. We make this in repository .
14) Now we are going to write some middlewares for validation.
15) Now we want to check whether user is authenticated or not.
16) We will write bussiness logic in service layer.
17) Now we want to assign roles . For eg a seller can buy product also and sell also in amazon but a customer can only buy. So we have to assign roles
18) That's why we are makin role model.
19) To establish a many to many relationships we need to establish a new table to connect both.
20) To sync user roles you have sync once
21) We have added function to check for admin and a middleware too
22) You can data in user_roles like this 
        const u1=await User.findByPk(4);
        const r1=await Role.findByPk(3);

        u1.addRole(r1);

23) To handle the error gracefully we have made APPerror using package http server-errors. The syntax is not to be find. Understand this logic and you can make yourself very easily.
24) Writing the error in repository layer.
25) We have made two types of error specific errors like validation error and generic error like in get email.

26) 