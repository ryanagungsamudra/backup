// var angka = prompt('Masukkan angka brow')

// if (angka % 2 === 0){
// 	alert(`Bilangan yang lu input genap brow, angkanya ${angka} kan?`)
// } else {
// 	alert(`Bilangan yang lu input ganjil brow, angkanya ${angka} kan? `)
// }

// var ulang = true
// while (ulang){
// 	console.log('Hellow hellow bandoeng')
// 	ulang = confirm('Lagi?')
// }

// Untuk looping while terdapat 3 aspek, yaitu nilaiAwal, kondisi terminasi, dan increment/decrement
var nilaiAwal = 1;
while (nilaiAwal <= 10){
	console.log(`Hellow world mulu wkwk. Looping ${nilaiAwal} x`)
	nilaiAwal++
}

for (let i = 1; i <= 10; i++){
	console.log(`Mahasiswa urutan ke.${i}`)
}

// Penggunaan Switch ini mirip dengan if else
// var angka = prompt('Masukkan angka'); //hasil dari promt itu adalah data berupa string

// switch (angka){
// 	case '1' :
// 		alert('anda memasukkan angka 1');
// 		break;
// 	case '2' :
// 		alert('anda memasukkan angka 2');
// 		break;
// 	case '3' :
// 		alert('anda memasukkan angka 3');
// 		break;
// 	default :
// 		alert('anda memasukkan angka yang salah');
// 		break;
// }

//atau
var items = prompt('Masukkan nama makanan/minuman : \n (cth: nasi, susu, ikan, apel, hamburger, soda')

switch (items){
	case 'nasi' :
	case 'susu' :
	case 'ikan' :
	case 'apel' :
		alert('merupakan makanan/minuman sehat boskuh');
		break;
	case 'hamburger' :
	case 'soda' :
		alert('merupakan makanan/minuman tidak sehat boskuh');
		break;
}