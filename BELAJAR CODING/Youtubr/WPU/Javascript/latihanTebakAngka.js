// Membungkus semuanya dengan looping while untuk konfirmasi di akhir permaianan apakah ingin bermain lagi atau tidak
var ulang = true
while (ulang){

    alert('Selamat datang di game Tebak Angka!. Kamu memiliki 3 kali kesempatan untuk menebak okay!')

    // Menggunakan perulangan for sebanyak 3 kali, ditujukan untuk kesempatan yang diberikan yakni sebanyak 3 kesempatan
    for (var kesempatan = 3; kesempatan >= 1; kesempatan--){

        // CORE : Menentukan pilihan player
        var p = prompt('Masukkan satu angka dari range 1-10 dan lihat apakah sama dengan pilihan komputer')

        // CORE : Menentukan pilhan komputer, dengan membangkitkan bil bulat random 1-10
        var comp = Math.floor(Math.random() * 11);
            // Menambahkan hint pada game tebakAngka
        var hint = ''
        if (p < comp && p != comp){
            hint = 'kekecilan'
        } else if (p > comp && p != comp){
            hint = 'kegedean'
        }

        // CORE : Rules/aturan main
        var hasil = ''

        if (p == comp){
            hasil = 'SELAMAT KAMU BENAR!'
            alert(`${hasil}`)
            break; // Menyudahi aksi serta menyudahi permainan dan dilanjutkan dengan ending massage
        } else {
            hasil = 'COBA LAGI!'
        }

        // CORE : Hasil
        alert(`${hasil}\n-Kamu memilih ${p}, ${hint}\n-Komputer memilih ${comp}\n-Sisa kesempatan : ${kesempatan - 1}`)
    }

    // Menambahkan ending massage
    if (p == comp){
        alert('Terimakasih telah bermain!')
    } else {
        alert(`Kesempatan anda habis, anda GAGAL!\nangka yang dicari adalah ${comp}`)
    }

    ulang = confirm('Main lagi gak?')
}
