// if else

// if ( kondisi){
//     aksi ( kita akan melakukan aksi apabila kondisi di atas adalah true atau hasilnya true)
// }
// >>>>>>>>> keluar dari if/kurung kurawal apa bila kondisi adalah false 

// contoh

// var angka = 3;
// // if (angka === 3){
// //     alert (' iya, betulllll')
// // }
// // alert di atas akan muncul apa bila kondisi nya betul atau true
// // kalau false dia tidak akan melakukan apa pun di web atau kosong

// if(angka % 2 === 0){
//     alert (angka + ' adalah bil genap')
// }
// // ketika angka nya adalah 2
// // alert di atas akan muncul apa bila kondisi nya betul atau true

// // ketika angkanya adalah 3
// // kalau false dia tidak akan melakukan apa pun di web atau kosong
// // karena kita sedang mencari angka ganjil maka kita akan kluar dari blok
// // jadi yang akan kita lakukan selanjutnya ialah menggunakan keyword else untuk
// //  menambah aksi
// else {
//     alert (angka + ' adalah bil ganjil')
// }

// contoh soal 
var angkot = 1;
var angkotBerope = 6
var jmlAngkot = 10; 
for ( var angkot = 1; angkot <= jmlAngkot; angkot++ ){
    if ( angkot <= angkotBerope){
        console.log('Angkot No.' + angkot+ ' beroperasi dengan baik.')
    }else{
        console.log('Angkot No.' + angkot+ ' sedang tidak beroperasi dengan baik.')

    }
}

