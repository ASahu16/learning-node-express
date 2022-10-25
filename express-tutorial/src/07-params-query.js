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
    if (!result) {
        return res.status(404).send('Product does not exist');
    }
    res.json(result);
});

/**
 * Using multiple request parameter
 */
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Review coming soon')
});

/**
 * Returns product list based on the user query
 */
app.get('/api/v2/products', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    // filter response data based on the product name 
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    // there is a limit, reduced the response data set to that limit
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] })
    }

    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})