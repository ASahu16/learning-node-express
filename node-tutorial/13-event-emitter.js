const EventEmitter = require('events');

const customEmitter = new EventEmitter();

/**
 * on()     - listen for an event
 * emit()   - emit an event
 */
customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id:${id}`);
});


customEmitter.emit('response');

/**
 * We can have multiple `on()` or listen method
 * for a same event
 */
customEmitter.on('response', () => {
    console.log(`some other data received`);
});



customEmitter.emit('response', 'john', 16);

/**
 * ORDER OR EVENTS MATTER
 * 
 * that is, 
 * 1. First we have to listen to the event
 * 2. Then we emit the event.
 * 
 * Since emit the event first on line:14 and line:26
 * We get the output for line:9 on() method twice
 * but only once for line:20 on() method
 * because the latter emit() is at the end of the code,
 * thus out former on() gets called twice
 * but the former on() only once.
 * 
 * When you run the following output is: 
 *      data received undefined with id:undefined
 *      data received john with id:16
 *      some other data received
 */


/**
 * PASSING ARGUMENTS WITH EventEmitter
 * You can pass arguments to the event handler 
 * by passing them as additional arguments to emit()
 * 
 * On latter emit() we passed two arjuments `john` and `26`
 * Thus output gives undefiend for the former emit() call
 * and the passed value for the latter emit() call
 * 
 *  Ooutput : 
 *      data received undefined with id:undefined
 *      data received john with id:16
 *      some other data received
 */
