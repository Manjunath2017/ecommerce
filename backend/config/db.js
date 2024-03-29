const mongoose=require('mongoose')
// const dotenv=require('dotenv').config({path:__dirname+'/./../../.env'})
// require('../../.env')
const config = require('config')
const db = config.get('MONGO_URII')

const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(`${db}`)
    
    // ,{

/*     // const conn=await mongoose.connect(`${process.env.MONGO_URI}`,{
      useUnifiedTopology:true,
      useNewUrlParser:true,
      useCreateIndex:true,
     }) */
    console.log(`DB Connected host: ${conn.connection.host}`)
  }catch(error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports=connectDB