require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const productRouter = require('./routes/routes')
const usersRouter = require('./routes/user')
const  server = express();

// gzhYF16YhS7Jfc7i



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  //  console.log('database connected') 
}


//bodyParser

server.use(cors());
server.use(express.json());
server.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
}));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.routes);
server.use('/users',usersRouter.routes);
server.use('*',(req,res)=>{

})


server.listen(process.env.PORT,()=>{
    console.log('Started')

})
