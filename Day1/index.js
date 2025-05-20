require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('<center><h1>Congratulation! You have successfully set up your first server using Express.js</h1></center>');
})

app.get('/about', (req,res)=>{
    const about = {
        name : 'Kamal Chandra',
        Age: 22,
        email: 'kamal@example.com',
        phone: '1234567890',
        address: {
            city: 'Muzaffarabad',
            country: 'India Occupied Pakistan'
        }
    }

    res.send(about);
})

app.get('/login', (req, res)=>{
    const about = {
        name : 'Kamal Chandra',
        Age: 22,
        email: 'kamal@example.com',
        phone: '1234567890',
        address: {
            city: 'Muzaffarabad',
            country: 'India Occupied Pakistan'
        }
    }
    const html = `
    <div>
        <h1>Login Page</h1>
        <p>Name: ${about.name}</p>
        <p>Age: ${about.Age}</p>
        <p>Email: ${about.email}</p>
        <p>Phone: ${about.phone}</p>
        <p>City: ${about.address.city}</p>
        <p>Country: ${about.address.country}</p>
    </div>`
    res.send(html);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});