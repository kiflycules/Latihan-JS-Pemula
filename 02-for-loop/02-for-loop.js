
// contoh while loop.

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot1 = 1;


// while (angkot1 <= jmlAngkot){
//     console.log ('Angkot No. ' + angkot1 + ' beroperasi dengan baik.');
//     angkot1++;
// };
// console.log('-----------------------------------------')

// // for loop sama hal nya dengan while loop
// // for loop lebah jelas dan lebih singkat

// // contoh for loop


// for (var angkot1 = 1; angkot1 <= 10; angkot1++){
//     console.log('Hii Ayang ' +angkot1+ ' kuhh');
// };

// console.log('----------------------------------------')

// soal - 02
// kamu adalah juragan angkot
//   kamu ingin mengetahui angkot mana yang beroperasi tapi sekarang angkot yang 
// beroperasi adalah 6 dan yang tidak beroperasi adalah 4

while (angkot1 <= angkotBeroperasi){
    console.log('Angkot No. ' + angkot1 + ' beroperasi dengan baik.');
    angkot1++;
}

for ( var angkot1= 7; angkot1 <=10; angkot1++ ){
    console.log('Angkot No. ' + angkot1 + ' sedang tidak beroperasi dengan baik.')
}