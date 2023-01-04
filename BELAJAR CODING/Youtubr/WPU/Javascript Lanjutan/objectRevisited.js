// Cara untuk membuat object pada javascript
// 1. Object literal, kelemahan object literal adalah harus membuat ulang variabel object jika lebih dari satu, contoh :
let mhs1 = {
    nama : "Ryan Agung Samudra",
    energi : 10,
    makan : function (porsi) {
        this.energi += porsi
        console.log(`Selamat makan ${this.nama}, dan selamat menikmati, energimu sekarang adalah ${this.energi} `)
    }
}
let mhs2 = {
    nama : "Ryan Agung Samudra",
    energi : 10,
    makan : function (porsi) {
        this.energi += porsi
        console.log(`Selamat makan ${this.nama}, dan selamat menikmati, energimu sekarang adalah ${this.energi} `)
    }
}

// 2. Function declaration
// function Mahasiswa (nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     console.log(`Haloo ${nama}, energimu ${energi}`)

//     mahasiswa.makan = function (porsi){
//         this.energi += porsi*10 // satu porsi menambah 10 energi
//         console.log(`Selamat makan, horee energimu bertambah jadi ${this.energi}`) 
//     }
//     mahasiswa.olahraga = function (jam){
//         this.energi -= jam*5 // satu jam olahraga menguras 5
//         console.log(`Capek ya olahraganya, nergimu berkurang jadi ${this.energi}`)
//     }
//     return mahasiswa
// }
// let ryan = Mahasiswa ("Ryan Agung Samudra", 100);
// let yurico = Mahasiswa ("Mahardika Yurico", 100);

// 3. Constructor function
function Mahasiswa (nama, energi){
    this.nama = nama;
    this.energi = energi;
    console.log(`Haloo ${nama}, energimu ${energi}`)

    this.makan = function (porsi){
        this.energi += porsi*10 // satu porsi menambah 10 energi
        console.log(`Selamat makan, horee energimu bertambah jadi ${this.energi}`) 
    }
    this.olahraga = function (jam){
        this.energi -= jam*5 // satu jam olahraga menguras 5
        console.log(`Capek ya olahraganya, nergimu berkurang jadi ${this.energi}`)
    }
}
let ryan = new Mahasiswa ("Ryan Agung Samudra", 100);
let yurico = new Mahasiswa ("Mahardika Yurico", 100);

// 4. Object.create