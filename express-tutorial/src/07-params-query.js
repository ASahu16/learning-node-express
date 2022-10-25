const express = require('express')
const app = express()
const { products } = require('./public/data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products">Go to products</a>')
});

app.get('/api/products/', (req, res) => {
    /**
     * Only send the relevenat data instead of duming all the data response. 
     * In order to achieve that we use the map.
     */
    const filteredData = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    });
    res.json(filteredData);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})