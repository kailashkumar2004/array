// var array = [
//     [1, 28, 31, 4, 5],
//     [69, 72, 87, 96, 10],
//     [11, 12, 23, 14, 15],
//     [16, 17, 18, 99, 20]
// ];
// let evencount = 0;
// var i = 0;
// while (i < array.length) {
//     var j = 0;
//     while (j < array[i].length) {
//         if (array[i][j] % 2 == 0) {
//             evencount=evencount+1
//         }
//         j=j+1
//     }
//     i=i+1
// };
// console.log("total of evencount----<<<", evencount);

// var array = [
//     [1, 28, 31, 4, 5],
//     [69, 72, 87, 96, 10],
//     [11, 12, 23, 14, 15],
//     [16, 17, 18, 99, 20]
// ];
// let evencount = 0;
// var i = 0;
// do {
//     var j = 0;
//     do {
//         if (array[i][j] % 2 == 0) {
//             evencount = evencount + 1
//         }
//         j = j + 1
//     }
//     while (j < array[i].length);
//     i = i + 1
// }
// while (i < array.length);
// console.log("total of evencount-----><", evencount);

// var array = [
//     [1, 28, 31, 4, 5],
//     [69, 72, 87, 96, 10],
//     [11, 12, 23, 14, 15],
//     [16, 17, 18, 99, 20]
// ];
// let evencount = 0;
// for (var i = 0; i < array.length; i++){
//     for (var j = 0; j < array[i].length; j++){
//         if (array[i][j] % 2 == 0) {
//             evencount=evencount+1
//         };
//     };
// };
// console.log("total of evencount-------->>", evencount);

// var array = [
//     [1, 28, 31, 4, 5],
//     [69, 72, 87, 96, 10],
//     [11, 12, 23, 14, 15],
//     [16, 17, 18, 99, 20]
// ];
// let evencount = 0;
// for (var i in array) {
//     for (var j in array[i]) {
//         if (array[i][j] % 2 == 0) {
//             evencount=evencount+1
//         };
//     };
// };
// console.log("total of evencount--------<<", evencount);

// var array = [
//     [1, 28, 31, 4, 5],
//     [69, 72, 87, 96, 10],
//     [11, 12, 23, 14, 15],
//     [16, 17, 18, 99, 20]
// ];
// let evencount = 0;
// for (var i of array) {
//     for (var j of i) {
//         if (j % 2 == 0) {
//             evencount=evencount+1
//         };
//     };
// };
// console.log("total of evencount------->><", evencount);