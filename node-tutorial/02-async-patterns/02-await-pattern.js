const { readFile } = require('fs')

/**
 * Demonstrate Promise
 * 
 * getText() function is a asyn function 
 * which reads a file on the path passed to it.
 * 
 * @return Promise object
 */
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

// Here we simple read two file as we did in '../11-fs-async.js' module
// But with help of promise.
// This code is must cleaner as compared to the formar module(11-fs-async.js)
// read first file content
getText('./content/first.txt')
    .then((firstFileData) => {
        console.log(firstFileData)
        // reading the second file content.
        getText('./content/second.txt')
            .then((secondFileData) => console.log(secondFileData))
            .catch((err2) => console.log(err2));
    })
    .catch((err) => console.log(err));


