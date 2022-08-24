const mongoose=require('mongoose')

const reviewSchema=mongoose.Schema({
  name:{type:String, required:true},
  rating:{type:Number, required:true}, //individual rating
  comment:{type:String, required:true},
},{
  timestamps:true
})

const productSchema=mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User' //foreign key
  },
  name:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true,
    unique:true
  },
  brand:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true,
    default:false
  },
  discription:{
    type:String,
    required:true,
    default:false
  },
  reviews:[reviewSchema], //import schema
  rating:{
    type:Number,
    required:true,
    default:0
  },
  numReviews:{
    type:Number,
    required:true,
    default:0
  },
  price:{
    type:Number,
    required:true,
    default:0
  },
  countInStock:{
    type:Number,
    required:true,
    default:0
  },
},{
  timestamps:true
})

const Products=mongoose('Products', productSchema)

module.exports=Products