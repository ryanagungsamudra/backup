// MEMBUAT SEBUAH PROGRAM PENGELOLAAN ANGKOT

// 2 parameter : nama penumpang, array penumpang
// RULES
    // 1. Jika angkot kosong, penumpang naik duduk di kursi pertama
    // 2. Penumpang berikutnya duduk di kursi selanjutnya secara berurutan
    // 3. Jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
    // 4. Asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
    // 5. Nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun.

//TAMBAH PENUMPANG
// PSEUDO CODE
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if (penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang)
        // kembalikan isi array & keluar dari function
        return penumpang
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if (penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang
                // kembalikan isi array dan keluar dari function 
                return penumpang
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahannya 
                console.log(`${namaPenumpang} sudah diangkot`)
                // kembalikan isi array dan keluar dari function
                return penumpang
            // jika seluruh kursi sudah terisi
            }
            else if (i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang)
                // kembalikan isi array & keluar dari function
                return penumpang
            }   
        }
    }
}

// HAPUS PENUMPANG
var hapusPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        console.log(`angkot kosong`)
        return penumpang
    } else {
        for (var i = 0; i <= penumpang.length; i++){
            if (penumpang[i] == namaPenumpang){
                // delete penumpang[i]
                penumpang[i] = undefined
                return penumpang
            } else if (i == penumpang.length - 1){
                console.log(`penumpang tidak ada di angkot`)
                return penumpang
            }
        }
    }
}
