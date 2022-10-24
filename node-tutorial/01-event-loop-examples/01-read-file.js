

const { readFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./node-tutorial/content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')

/**
 * Notice how the console logs when we run this file.
 * Even though we have a sequence of console log in the code.
 * Still we get result as:
 *      started a first task
 *      starting next task
 *      Hello this is first text file
 *      completed first task
 * 
 * "starting next task" gets on log before the logs inside the readFile() callback
 * This is because the readfile() is a asyn function means 
 * it offloads the read operations to the system kernel.
 * And once the current file code exits this 
 * the offloaded operation gets executed.
 */