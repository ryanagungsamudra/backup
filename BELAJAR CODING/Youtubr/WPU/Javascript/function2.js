// Recursive atau memanggil fungsi itu sendiri
// disini sebenarnya bisa menggunakan for atau while, namun untuk menggunakan function agar tidak terjadi infinite loop harus diberi sebuah kondisi yang mengembalikan nilai dari argumen
function showNumber (n){
    if (n === 0) return;
    console.log(n);
    showNumber(n-1);
}

showNumber(15)

// Fungsi faktorial menggunakan rekursif
function faktorial (n){
    if (n === 0) return 1;
    return n * faktorial (n-1);
}

console.log(faktorial(5))

// Semua looping bisa dibuat rekursif tapi tidak sebaliknya

// Function declaration vs function expression
// Function declaration
show ('Ryan') // Sebelum atau sesudah deklarasi function tetep bisa
function show (nama){
    console.log(nama)
}

// Function declaration
let showName = function (nama){
            console.log(nama)
        }
showName ('Ryan Agung') // Harus setelah function expression
