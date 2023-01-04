// Array memiliki index dan dimulai dari nol. Array meruapakan data bertipe objek.
let binatang = ['kucing', 'anjing', 'kuda', 'ayam', 'beruang', 'harimau', 'paus', 'ikan']

console.log(binatang.length)
console.log(binatang[3])


// didalam elemen array bebas mau input data apa, termasuk function dan juga memasukkan data array lagi didalam array
var nama = function (input){
    console.log(input)
}

let random = ['manusia', 4, true, nama, ['kucing', 'anjing', 'kuda']]
console.log(random.length)
console.log(random[4])
//cara mengakses data array didalam array, misalnya mau mengambil data 'anjing'
console.log(random[4][1])


// ------------------------------------------------------------ //


// MEMANIPULASI ARRAY
// Menambah elemen pada array dan juga mengganti array
var arr = ['Ryan', 28, 'Juli', 1999]

arr[4] = 'Jakarta'
arr[4] = 'Magelang'
console.log(arr[4])

// Menghapus elemen pada array
var arr = ['Ryan', 28, 'Juli', 1999, 'Jakarta']
arr[4] = undefined
console.log(arr[4])

// ------------------------------------------------------------ //
// ARRAY METHODS (length, join, push, pop, unshift, shift, splice, slice, forEach, map, sort, filter, find)

    // 1. Menampilkan seluruh isi array (method length)
    var mhs = ['Ryan', 'Yurico', 'Risang', 'Dayat', 'Afrizal']

    for (let i = 0; i < mhs.length; i++){
        console.log(`Mahasiswa ke-${i+1} adalah ${mhs[i]}`)
    }

    // 2. Menggunakan method join
    var mhs = ['Ryan', 'Yurico', 'Risang', 'Dayat', 'Afrizal']
    console.log(mhs.join())
    console.log(mhs.join('\n'))

    // Push = untuk menambahkan elemen pada sebuah array(dimulai dari akhir). Pop = untuk menghapus elemen terakhir sebuah array
    // 3. PUSH
    var mhs = ['Ryan', 'Yurico', 'Risang', 'Dayat', 'Afrizal']
    mhs.push('Indras', 'Erlin')

    console.log(mhs.join('\n'))

    // 4. POP
    mhs.pop()
    mhs.pop()
    mhs.pop()
    console.log(mhs.join('\n'))

    // 5. unshift -> menambah elemen diawal array
    mhs.unshift('Amin', 'Mahendra')
    console.log(mhs.join('\n'))
    
    // 6. shift -> menghapus elemen diawal array
    mhs.shift()
    console.log(mhs.join('\n'))

    // 7. splice -> Menambahkan elemen di tengah array
    // splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)

    var penghuniDinsos = ['Ryan', 'Yurico', 'Risang', 'Dayat', 'Afrizal'];
    penghuniDinsos.splice(3, 0, 'Amin', 'Yafi', 'Haffizh');
        // Ini artinya menambahkan elemen dimulai dari index ke-3(Dayat) dan menghapus 2 index ke-kanan termasuk index ketiga sendiri (Dayat, Afrizal)

    console.log(penghuniDinsos.join('\n'))

    // 8. slice -> Mengambil sejumlah elemen pada array untuk dijadikan array baru

    var penghuniDinsos = ['Ryan', 'Yurico', 'Risang', 'Dayat', 'Afrizal', 'Amin', 'Yafi', 'Haffizh'];

    var penghuniAsliDinsos = penghuniDinsos.slice(0, 5)
        // Ini artinya mengambil sejumlah elemen pada array penghuniDinsos untuk disimpan di variabel baru yakni penghuniAsliDinsos. Dengan syarat mengambil semua elemen dari index 0 ke-kanan kecuali 5 (index yang terambil adalah 0,1,2,3,4)
    console.log(penghuniAsliDinsos.join())

    // 9. forEach
    // // mirip penggunaan for
    var penghuniDinsos = ['Ryan', 'Yurico', 'Risang', 'Dayat', 'Afrizal', 'Amin', 'Yafi', 'Haffizh'];
    // for (var i = 0; i < penghuniDinsos.length; i++){
    //     console.log(penghuniDinsos[i])
    // }

    // Mengguanakan forEach ini dikombinasikan dengan function expression
    penghuniDinsos.forEach(function(element, index,){
        console.log(`Mahasiswa ke-${index} adalah ${element}`)
    })

    // atau
    var cetak = function (e, i){
        console.log(i+1, e)
    }

    penghuniDinsos.forEach(cetak)

    // 10. map -> mirip dengan forEach namun map bisa mengembalikkan array
    var angka = [1,2,4,1,4,5,1,2]
    var angka2 = angka.map(function(e){
        return e ** 2;
    })
    console.log(angka2)

    // 11. sort -> secara deafult akan mengurutkan sesuai angka pertama saja
    var angka = [1,2,34,2,4,7,5000,8,9,100,203]
    angka.sort()
    console.log(angka.join()) // Hanya mengurutkan berdasarkan angka depan saja

    angka.sort(function(a,b){
        return a-b
    })
    console.log(angka.join()) // Mengurutkan berdasarkan keseluruhan angka

    // 12. filter -> Mencari banyak nilai (angka)
    var angka = [1,3,5,2,6,9,5,10,20]
    var filterAngka = angka.filter(function(x){
        return x > 5
    })
    console.log(filterAngka)
    // 13. find -> Mencari satu nilai (angka)
    var angka = [1,3,5,2,6,9,5,10,20]
    var findAngka = angka.find(function(x){
        return x > 5
    })
    console.log(findAngka)
