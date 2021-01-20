const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(3000, ()=>{
    console.log('Executando na porta 3000')
})

app.get('/', (request, response)=>{
    response.send('hello word...')
})
