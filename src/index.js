const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const {PORT}=require('./config/server-config');
const apiRoutes=require('./routes/index');
const db=require('./models/index');


// const {User}=require('./models/index');
// const bcrypt=require('bcrypt');
// const UserService=require('./services/user-service');
const {User,Role}=require('./models/index');

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server is running on port ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        

    })
}

prepareAndStartServer();