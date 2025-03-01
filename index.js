const express = require('express')
const app = express()

const port = process.env.PORT || 5000
var cors = require('cors')
app.use(cors())
app.use(express.json())

const user = [
    {
        "id": 1,
        "name": "Alice Smith",
        "email": "alice.smith@example.com",
        "age": 28,
        "city": "New York"
    }
]
app.get('/users',(req,res)=> {
    res.send(user)
})

app.get("/",(req ,res)=> {
res.send('user management tools')
})

app.post('/users',(req,res)=> {
   
    const newUser = req.body
    console.log("🚀 ~ app.post ~ newUser:", newUser)
     newUser.id = user.length + 1
     user.push(newUser) 
     res.send(newUser)
    
})

app.listen(port,()=> {
    console.log(`server is running at ${port}`)
})