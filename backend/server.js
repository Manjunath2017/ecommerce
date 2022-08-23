const app=require('express')()
const products=require('./data/products')
const dotenv=require('dotenv').config({path:__dirname+'/./../.env'})
// const connectDB=require('./config/db')


// connectDB()
app.get('/', (req, res)=>{
  res.send('API is,, running...')
})

app.get('/api/products/', (req, res)=>{
  res.json(products )
})

app.get('/api/products/:id_no', (req,res)=>{
  const {id_no}=req.params
  const product=products.find((obj) =>obj._id===id_no) 
  res.json( product)
})

const port=process.env.PORT || 3000
console.log('port', port)
app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`))

