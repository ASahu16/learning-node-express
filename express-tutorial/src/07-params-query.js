const express = require('express')
const app = express()
const { products } = require('./public/data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products">Go to products</a>')
});

/**
 * Return list of all the products
 */
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

/**
 * Find and return product details.
 * Use request.pramas (route parameter) to find the product details
 */
app.get('/api/products/:productID', (req, res) => {
    // we can extract resquest both by destructuring it.
    // or by directly using the dot operator.
    const { productID } = req.params;
    // const productID = req.params.productID;
    const result = products.find((product) => product.id === Number(productID));
    
    // If no result found return 404, not found
    if(!result){
        return res.status(404).send('Product does not exist');
    }
    res.json(result);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})