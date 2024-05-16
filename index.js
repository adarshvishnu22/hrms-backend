const express=require('express')
const bodyParser=require('body-parser')
const db=require('./Db/index.js')
const app=express()
const cors=require('cors')

const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())
const route=require('./routes')
app.use('/hrms_api',route)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  //console.log('Server started successfully!');