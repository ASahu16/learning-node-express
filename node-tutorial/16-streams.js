/**
 * Stream
 * 
 * A stream is an abstract interface for working with streaming data in Node.js. 
 * The `node:stream` module provides an API for implementing the stream interface.
 * 
 * There are many stream objects provided by Node.js. 
 * For instance, a request to an HTTP server and process.stdout are both stream instances.
 * 
 * Streams can be readable, writable, or both. All streams are instances of EventEmitter.
 * 
 * Types of streams
 * There are four fundamental stream types within Node.js:
 * 
 * -> Writable: streams to which data can be written (for example, `fs.createWriteStream()`).
 * -> Readable: streams from which data can be read (for example, `fs.createReadStream()`).
 * -> Duplex: streams that are both Readable and Writable (for example, `net.Socket`).
 * -> Transform: Duplex streams that can modify or transform the data as it is written and read 
 *              (for example, `zlib.createDeflate()`).
 * 
 * Additionally, this module includes the utility functions stream.pipeline(), 
 * stream.finished(), stream.Readable.from() and stream.addAbortSignal().
 * 
 */
const { createReadStream } = require('fs');

// The stream will be read in chunks of size equal to the `highWaterMark` option. 
// In the code example below, data will be in a single chunk if the file has less then 64 KiB
// default 64 KiB 
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 9000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result)
});

stream.on('error', (err) => console.log(err));
