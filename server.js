
const express = require("express");
const app = express();

// Before the other routes
app.use(express.static("build"))

// the other resource routes

app.use(express.json())

const quotes = [
    {
        quote: 'The best preparation for tomorrow is doing your best today.',
        // author: 'H. Jackson Brown, Jr.',
        id: 1
    },
    {
        quote: 'The supreme art of war is to subdue the enemy without fighting.',
        // author: 'Sun Tzu',
        id: 2,
    },
    {
        quote: 'The journey of a thousand miles begins with one step.',
        // author: 'Lao Tzu',
        id: 3,
    },
    {
        quote: 'The World is my country, all mankind are my brethren, and to do good is my religion.',
        //  author: 'Thomas Paine',
         id: 4,
    },

]
// const pokemons = [
//   {
//     id: 1,
//     name: "Pikachu",
//     type: "electric ⚡️",
//     level: 99,
//     image: "/pikachu.webp"
//   }
// ]

app.get("/api/quotes", (req, res) => {
  console.log("GET /api/quotes")
  res.send({quotes: quotes})
});

app.post("/api/quotes", (req, res) => {
  const data = req.body
  console.log("POST /api/quotes", data)
  data.id = quotes.length+1
  quotes.push(data)
  res.send(data)
})

// After all other routes
app.get('*', (req, res) => {
    res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))