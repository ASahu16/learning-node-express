const { readFile, writeFile } = require('fs');

/**
 * readFile() and writeFile() are different from readFileSync() and writeFileSync()
 * 
 * Firstly the visible difference is that the former function take a callback() method 
 * which gets executed after the actions by the respective functions is over.
 * 
 * Secondly, it does not holds the flow of the code.
 * the code after the function calls gets extecuted immediately without 
 * waiting for the function to complete
 * 
 * This sometime can lead to CALLBACK_HELL, which you can see in the below code.
 */
readFile(`${__dirname}/content/first.txt`, 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstText = result;

    readFile(`${__dirname}/content/second.txt`, 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const secondText = result;

        writeFile(
            `${__dirname}/content/result-sync.txt`,
            `Here is the result: ${firstText}, ${secondText}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    });
})