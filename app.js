const express = require("express");
const app = express();
const PORT = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/products", (req, res) => {
    const products = [
       {
           id:1,
        name: "test",
        },
        {
            id: 2,
            name: "test2"

        }, 
    ];

    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})