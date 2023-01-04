// const readFileSync = require("fs")

// ini sama saja dengan yang diatas (destructuring) :
// readFileSync dan writeFileSync adalah method
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second)

// Untuk menggunakan method write tidak bisa disimpan di variabel, jadi langsung ditulis seperti ini dan jalankan di terminal untuk membuat file baru/menimpa file
writeFileSync('./content/result-sync.txt', `This is the result : ${first} and ${second}`)

// apabila file textnya sudah ada dan ingin menambahkan kalimat didalamnya (tidak overwrite)....tambahkan {flag: 'a'}
writeFileSync('./content/result-sync.txt', ` \n\nIni tambahannya bro`, { flag: 'a' })

