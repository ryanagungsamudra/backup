var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log(`Angkot No.${noAngkot} beroperasi dengan baik`)
    } else if (noAngkot == 8){
        console.log(`Angkot No.${noAngkot} sedang lembur`)
    } else {
        console.log(`Angkot No.${noAngkot} sedang tidak beroperasi`)
    }
}

//contoh lain penggunaan if
// var angka = prompt('Masukkan angka bro')

// if (angka % 2 == 0){
//     alert(`Bilangan ${angka} adalah genap brooo`)
// } else if (angka % 2 == 1){
//     alert(`Bilangan ${angka} adalah ganjil brooo`)
// } else {
//     alert('Yang dimasukkan bukan angka bangke')
// }