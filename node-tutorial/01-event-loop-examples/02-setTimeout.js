
// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

/**
 * When we run the above code,
 * We get O/P:
 *      first
 *      third
 *      second
 * 
 * Now why this happened? Even though the setTimeout() should run after 0 seconds, that is, immediately.
 * The answer is because the setTimeout() is a async function,
 * it offloads the operation passed to it.
 * And this operation only gets the chance to executed itself,
 * once the current file(single threaded code stack) code gets executed, and exits the operating system process.
 * 
 */