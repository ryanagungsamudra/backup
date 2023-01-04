function jumlahVolDuaKubus (sisiKubusPertama, sisiKubusKedua){
    // let volKubusPertama = sisiKubusPertama ** 3;
    // let volKubusKedua = sisiKubusKedua ** 3;
    // let hasil = volKubusPertama + volKubusKedua

    // return hasil
    return sisiKubusPertama ** 3 + sisiKubusKedua ** 3 // Refactoring
}

alert(jumlahVolDuaKubus(8, 3));
alert(jumlahVolDuaKubus(10, 15));

var a = prompt('Masukkan nilai 1')
var b = prompt('Masukkan nilai 2')
console.log(jumlahVolDuaKubus(a, b))

// Jika fucntion tidak memiliki parameter
// function tambah (){
//     return arguments
// }

// let coba = tambah(28, "juli", 1999, "yuhuuuu", false)
// alert(coba)

// input argument semaunya
function tambah (){
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++){ // arguments.length adalah jumlah argumen yang tersedia
        hasil += arguments[i]
    }
    return hasil
}
console.log(tambah(2,3,5)) // disini total argumen yang tersedia adalah 5 buah argumen