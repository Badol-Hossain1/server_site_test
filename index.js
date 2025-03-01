const express = require('express')
const app = express()

const port = process.env.PORT || 5000
var cors = require('cors')
app.use(cors())

const user = [
    {
        "id": 1,
        "name": "Alice Smith",
        "email": "alice.smith@example.com",
        "age": 28,
        "city": "New York"
    },
    {
        "id": 2,
        "name": "Bob Johnson",
        "email": "bob.johnson@example.com",
        "age": 34,
        "city": "Los Angeles"
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "age": 22,
        "city": "Chicago"
    },
    {
        "id": 4,
        "name": "David Wilson",
        "email": "david.wilson@example.com",
        "age": 45,
        "city": "Houston"
    },
    {
        "id": 5,
        "name": "Eve Davis",
        "email": "eve.davis@example.com",
        "age": 30,
        "city": "Phoenix"
    },
    {
        "id": 6,
        "name": "Frank Miller",
        "email": "frank.miller@example.com",
        "age": 27,
        "city": "Philadelphia"
    },
    {
        "id": 7,
        "name": "Grace Lee",
        "email": "grace.lee@example.com",
        "age": 31,
        "city": "San Antonio"
    },
    {
        "id": 8,
        "name": "Henry Martinez",
        "email": "henry.martinez@example.com",
        "age": 29,
        "city": "San Diego"
    },
    {
        "id": 9,
        "name": "Ivy Garcia",
        "email": "ivy.garcia@example.com",
        "age": 25,
        "city": "Dallas"
    },
    {
        "id": 10,
        "name": "Jack Rodriguez",
        "email": "jack.rodriguez@example.com",
        "age": 37,
        "city": "San Jose"
    }
]
app.get('/users',(req,res)=> {
    res.send(user)
})

app.get("/",(req ,res)=> {
res.send('user management tools')
})

app.listen(port,()=> {
    console.log(`server is running at ${port}`)
})