const { readFileSync, writeFileSync } = require('fs');

const second = readFileSync(`${__dirname}/content/second.txt`, 'utf8');
const first = readFileSync(`${__dirname}/content/first.txt`, 'utf8');

// console.log(first, second);

/**
 * Writes to a file,
 * if file does not exists then creates file at the given path
 * It overwites the content of the file.
 * 
 */
writeFileSync(
    `${__dirname}/content/result-sync.txt`,
    `Here is the result : ${first}, ${second}`
)

/**
 * Writes to a file,
 * if file does not exists then creates file at the given path
 * It appends the content at the end of the file,
 * For that we pass the third parameter to the function
 * we pass the `flag : 'a'` which opens the file in append mode.
 */
writeFileSync(
    `${__dirname}/content/result-sync.txt`,
    `Here is appended result : ${first}, ${second}`,
    { flag: 'a' }
)
