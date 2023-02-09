const fs = require('fs');

// blocking synchronously way 

// var txtin = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(txtin);

// var txtout = `this is what we know about an avocado: ${txtin}`
// fs.writeFileSync('./starter/txt/output.txt', txtout)
// console.log('file written')

// non-blocking asynchronously way

fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
     })
     fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
        console.log(data3)
     })
})
console.log('will read this...')