var ulang = true
while(ulang){

    // Menentukan pilihan player
    alert('Selamat datang di game SUPANG (Suit Jepang) HAHAHA!')
    var p = prompt('Pilih satu yaa : batu, gunting, kertas \nNote : \n1. Ketik dengan huruf kecil semua yak!. \n2. Disini akan menguji kehokian lu lawan komputer menang siapa \nENJOYYY!')

    // Menentukan pilihan komputer dengan cara membangkitkan bilangan random menggunakan library math
    var comp = Math.random(); // Menggunakan library untuk membangkitkan bilangan random

    if (comp < 0.34){
        comp = 'batu'
    } else if (comp > 0.33 && comp < 0.67){
        comp = 'gunting'
    } else {
        comp = 'kertas'
    }

    console.log(comp)

    // Menentukan rules
    var hasil = ''

    if (p == comp){
        hasil = 'SERI GA ASIK!'
    } else if (p == 'batu'){
        // if (comp == 'gunting'){
        //     hasil = 'MENANG! GOKS!'
        // } else {
        //     hasil = 'HAHA GBLK KALAH!'
        // }
        hasil = (comp == 'gunting') ? 'MENANG! GOKS!' : 'HAHA GBLK KALAH!'
    } else if (p == 'gunting'){
        hasil = (comp == 'batu') ? 'HAHA GBLK KALAH!' : 'MENANG! GOKS!'
    } else if (p == 'kertas'){
        hasil = (comp == 'batu') ? 'MENANG! GOKS!' : 'HAHA GBLK KALAH!'
    } else {
        hasil = 'Salah ketik, perhatikan note yaa!'
    }

    // Menampilkan hasil
    alert(`${hasil}\nkamu memilih : ${p}\nkomputer memilih : ${comp}`)
    ulang = confirm('Masi penasaran?')

}