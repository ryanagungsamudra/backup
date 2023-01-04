// Array adalah sekumpulan nilai yang memiliki index(0, 1, 2, ..), sementara Object adalah sekumppulan nilai yang memilki nama(namaLengkap, alamat, domisili, ..)
// dalam objek, nama yang berisi data (string, int, boolen, truthy, false) disebut properti dan nama yang berisikan function disebut dengan methods

// Object literal
var mhs = {
    nama : "Ryan Agung Samudra",
    nim : 117180035,
    jurusan : "Teknik Geomatika",
    universitas : "UPN Yogyakarta",
    IPS : [3.7, 3.3, 3.4, 3.2, 3.5, 3.4, 3.6, 3.8],
    IPK : function(){
            var hasil = 0
            var ips = this.IPS
            for (var i = 0; i < ips.length; i++){
                hasil += ips[i]
            } 
            return hasil/ips.length
        }
}

// Function declaration
function buatObjectMahasiswa (nama, nim, jurusan, universitas){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    mhs.universitas = universitas;
    return mhs
}

var mhs1 = buatObjectMahasiswa ('Ryan Agung Samudra', 117180035, 'Teknik Geomatika', 'UPN')
var mhs2 = buatObjectMahasiswa ('Mahardika Yurico Billian', 117180025, 'Teknik Geomatika', 'UPN')
var mhs3 = buatObjectMahasiswa ('Risang Haryo Dewantoro', 117180015, 'Teknik Geomatika', 'UPN')

// Function Constructor
    // Dalam menggunakan function constructor langsung menggunakan this. Dan untuk memanggil functionnya WAJIB menambahkan kata 'new' sebelum nama functionnya, jika tidak menggunakan kata new maka akan dianggap sbg function declaration biasa.
function Mahasiswa (nama, kelulusan, jurusan){
    // var this = {};
    this.nama = nama;
    this.kelulusan = kelulusan;
    this.jurusan = jurusan;
    // return this
}

    
let mhs4 = new Mahasiswa ('Ryan', 2022, 'Bootcamp Fazztrack Batch 12')

// ---------------------------------------------- //

// MEMBUAT OBJEK
// cara 1 - function deklaration
function halo(){
    console.log(this);
    console.log('Heyy bro');
}
halo()
// this mengembalikkan objek global

// cara 2 - function literal
let obj = {}
obj.halo = function(){
    console.log(this);
    console.log('Heyy bro');
}
// this mengembalikkan objek yang bersangkutan

obj.halo()
// cara 3 - function constructor
function Halo (){
    console.log(this);
    console.log('Heyy bro');
}
new Halo()
// this mengembalikkan objek yang baru dibuat



