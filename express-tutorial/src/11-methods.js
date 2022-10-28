const express = require('express');
const app = express();
let { people } = require('./public/data');

// static assets
app.use(express.static('./src/methods-public'));

// parse form data
/**
 * This is a built-in middleware function in Express. 
 * It parses incoming requests with urlencoded payloads 
 * and is based on body-parser.
 * 
 * Property "extended" allows to choose between parsing the URL-encoded data 
 * with the querystring library (when false) or the qs library (when true). 
 * The “extended” syntax allows for rich objects and arrays to be encoded 
 * into the URL-encoded format, 
 * allowing for a JSON-like experience with URL-encoded.
 * 
 * For more info, visit https://expressjs.com/en/api.html#express.urlencoded
 */
app.use(express.urlencoded({ extended: false }));

// parse json
/**
 * This is a built-in middleware function in Express. 
 * It parses incoming requests with JSON payloads and is based on body-parser.
 * 
 * Note As req.body’s shape is based on user-controlled input, 
 * all properties and values in this object are untrusted and 
 * should be validated before trusting. 
 * For example, req.body.foo.toString() may fail in multiple ways, 
 * for example the foo property may not be there or may not be a string, 
 * and toString may not be a function and instead a string or other user input.
 * 
 * Learn about the anatomy of an HTTP transaction in Node.js.
 * https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
 * 
 * This does not handle multipart bodies, due to their complex and typically large nature.
 */
app.use(express.json());

/**
 * @api {get} /api/people/ Request list of all people name
 * @apiGroup People
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost:5000/api/people/
 */
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});


/**
 * @api {post} /api/people/         Request list of all people name.
 * @apiBody {String} name           Mandatory name of the Person.
 * @apiGroup People 
 *  
 * @apiSuccess {String} success     true.
 * @apiSuccess {String} person      Name of the Person.
 * 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 400 Not Found
 *      {
 *          "success": false,
 *          "msg": "please provide name value"
 *      }
 */
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json(
            {
                success: false,
                msg: 'please provide name value'
            }
        );
    }
    res.status(201).json({ success: true, person: name });
});

/**
 * @api {post} /api/curl/people/        Request list of all people name.
 * @apiBody {String} name               Mandatory name of the Person.
 * @apiGroup People
 * 
 * @apiSuccess {String} success         true.
 * @apiSuccess {Object} [data]          nested data object.
 * @apiSuccess {Number} [data[id]]      id of the person.
 * @apiSuccess {Object} [data[name]]    name of the person.
 * 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 400 Not Found
 *      {
 *          "success": false,
 *          "msg": "please provide name value"
 *      }
 * 
 * @apiExample {curl} Example usage:
 *      curl -X POST http://localhost:5000/api/curl/people/ 
 *          -H 'Content-Type: application/json' 
 *          -d '{"name":"Abhishek"}'
 */
app.post('/api/curl/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send('Please Provide Credentials');
});

/**
 * @api {put} /api/people/:id           Update the name of a person
 * @apiParam {Number} id                Persons unique ID.
 * @apiBody {String} name               Mandatory name of the Person.
 * @apiGroup People
 * 
 * @apiSuccess {String} success         true.
 * @apiSuccess {Object} [data]          nested data object.
 * @apiSuccess {Number} [data[id]]      id of the person.
 * @apiSuccess {Object} [data[name]]    name of the person.
 * 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "success": false,
 *          "msg": "no person with id 64"
 *      }
 * 
 * @apiExample {curl} Example usage:
 *      curl -X PUT http://localhost:5000/api/people/1 
 *          -H 'Content-Type: application/json' 
 *          -d '{"name":"Amitabh Bachchan"}'
 */
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` });
    }
    const updatedDetail = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: updatedDetail });
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
});