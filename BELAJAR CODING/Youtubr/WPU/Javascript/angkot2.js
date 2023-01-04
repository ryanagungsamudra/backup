var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

//looping no Angkot yang beroperasi
while (noAngkot <= angkotBeroperasi){
    console.log(`Angkot No.${noAngkot} beroperasi dengan baik`)
    noAngkot++
}
// looping no Angkot yang tidak beroperasi
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log(`Angkot No.${noAngkot} tidak beroperasi dengan baik`)
}

