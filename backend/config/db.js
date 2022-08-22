const mongoose=require('mongoose')
const dotenv=require('dotenv').config({path:__dirname+'/./../../.env'})
require('../../.env')


console.log('process.env.MONGO_URL',process.env.MONGO_URI)
const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(`${process.env.MONGO_URI}`,{
      useUnifiedTopology:true,
      useNewUrlParser:true,
      useCreateIndex:true,
    })
    console.log(` Connected: ${conn.connection.host}`)
  }catch(error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports=connectDB