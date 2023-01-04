const { readFile, writeFile } = require('fs')
// Selalu masukkan formatnya yaitu utf-8, masukkan setelah pathnya
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `This is the result = ${first} & ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result);
            })
    })
})