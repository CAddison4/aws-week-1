
const express = require("express");
const app = express();

// Before the other routes
app.use(express.static("build"))

// the other resource routes

app.use(express.json())

const quotes = [
    {
        quote: 'The best preparation for tomorrow is doing your best today.',
        author: 'H. Jackson Brown, Jr.'
    },
    {
        quote: 'The supreme art of war is to subdue the enemy without fighting.',
        author: 'Sun Tzu'
    },
    {
        quote: 'The journey of a thousand miles begins with one step.',
        author: 'Lao Tzu'
    },
    {
         quote: 'The World is my country, all mankind are my brethren, and to do good is my religion.',
         author: 'Thomas Paine'
    },
    {
        quote: 'Don\'t make a hasty movement. Be like a mountain. Move silently and cautiously',
        author: 'Yi Sun-sin'
    },
    {
        quote: 'The people are the roots of a nation, and the roots should be strong so as to create a peaceful nation',
        author: 'Sejong the Great'
    },
    {
        quote: 'I hear and I forget. I see and I remember. I do and I understand.',
        author: 'Confucius'
    },
    {
        quote: 'Logic will get you from A to B. Imagination will take you everywhere.',
        author: 'Albert Einstein'
    },
    {
        quote: 'Wise men speak because they have something to say; Fools because they have to say something',
        author: 'Plato'
    },
    {
        quote: 'Knowing what must be done does away with fear.',
        author: 'Rosa Parks'
    },
    {
        quote: 'In order to be irreplaceable one must always be different.',
        author: 'Coco Chanel'
    },
    {
        quote: 'It always seems impossible until it\'s done.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'You must be the change you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
         quote: 'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
         author: 'Dr. Seuss'
    },
    {
        quote: 'You miss 100 percent of the shots you never take',
        author: 'Wayne Getzky'
    },
    {
        quote: 'Try to be a rainbow in someone\'s cloud.',
        author: 'Maya Angelou'
    },
    {
        quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
        author: 'Thomas Edison'
    },
    {
        quote: 'No act of kindness, no matter how small, is ever wasted.',
        author: 'Aesop'
    }
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