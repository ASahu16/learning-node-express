const express = require('express');
const router = express.Router();
let { people } = require('../public/data');

/**
 * @api {get} /api/people/ Request list of all people name
 * @apiGroup People
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost:5000/api/people/
 */
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: 'please provide name value',
    });
  }
  res.status(201).json({ success: true, person: name });
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
router.put('/:id', (req, res) => {
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
  });
  res.status(200).json({ success: true, data: updatedDetail });
});

/**
 * @api {delete} /api/people/:id        Update the name of a person
 * @apiParam {Number} id                Persons unique ID.
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
 *      curl -X DELETE http://localhost:5000/api/people/1
 *
 */
router.delete('/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `no person with id ${req.params.id}`,
    });
  }
  people = people.filter((person) => person.id !== Number(req.params.id));

  return res.status(200).json({ success: true, data: people });
});

module.exports = router;
