const app=require('express')()
const products=require('./data/products')
app.get('/', (req, res)=>{
  res.send('API is,, running...')
})

app.get('/api/products/', (req, res)=>{
  res.json(products )
})

app.get('/api/products/:id_no', (req,res)=>{
const {id_no}=req.params
console.log(id_no)
const product=products.find((obj) =>obj._id===id_no) 
res.json( product)
})

app.listen(5000, console.log('server running on port 5000'))

