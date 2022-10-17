const { readFile, writeFile } = require('fs').promises
// Since we have option to get Promise readFile, writeFile we use them.
// otherwise we can use below approach too.
// Below 3 line are to convert any async function to promise, without wrapping inside Promise function
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

/**
 * Demonstrate Promise
 * 
 * getText() function is a asyn function 
 * which reads a file on the path passed to it.
 * 
 * @return Promise object
 */
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     })
// }

/**
 * Here we simple read two file as we did in '../11-fs-async.js' module
 * But with help of promise.
 * This code is must cleaner as compared to the formar module(11-fs-async.js)
 */
// read first file content
// getText('./content/first.txt')
//     .then((firstFileData) => {
//         console.log(firstFileData)
//         // reading the second file content.
//         getText('./content/second.txt')
//             .then((secondFileData) => console.log(secondFileData))
//             .catch((err2) => console.log(err2));
//     })
//     .catch((err) => console.log(err));



/**
 * Here we another approach to read the files using async-await
 * This is much cleaner and readable that than the previous one.
 * We simply have to async wrapper function
 * And in that function we await for one async operation to finish 
 * by using the `await` keyword.
 * After reading for the file we log the result;
 */
// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second);

//     } catch (error) {
//         console.log(error);
//     }
// }

start();
