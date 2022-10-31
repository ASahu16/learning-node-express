const express = require('express');
const router = express.Router();
const PeopleController = require('../controller/people');

/**
 * @api {get} /api/people/ Request list of all people name
 * @apiGroup People
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost:5000/api/people/
 */
router.get('/', PeopleController.getPeople);

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
router.post('/', PeopleController.createPerson);

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
router.put('/:id', PeopleController.updatePerson);

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
router.delete('/:id', PeopleController.deletePerson);

/**
 * Alternate syntax, to setup route and controller
 * using mthod chaining
 *
 *    router
 *      .route('/')
 *      .get(PeopleController.getPeople)
 *      .post(PeopleController.createPerson);
 *
 *    router
 *      .route('/:id')
 *      .get(PeopleController.updatePerson)
 *      .post(PeopleController.deletePerson);
 */

module.exports = router;
