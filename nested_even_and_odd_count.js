// var array = [
//     [11, 12, 45, 67, 89, 76, 54, 34],
//     [90, 89, 76, 32, 10, 47, 59, 99],
//     [70, 25, 78, 98, 76, 43, 10, 20]
// ];
// var evencount = 0;
// var oddcount = 0;
// for (var i in array) {
//     for (var j in array[i]) {
//         if (array[i][j] % 2 == 0) {
//             evencount=evencount+1
//         }
//         else {
//             oddcount=oddcount+1
//         };
//     };
// };
// console.log("total evencount---------------------->>", evencount);
// console.log("total of oddcount------------------>>", oddcount);


// var array = [
//     [11, 12, 45, 67, 89, 76, 54, 34],
//     [90, 89, 76, 32, 10, 47, 59, 99],
//     [70, 25, 78, 98, 76, 43, 10, 20]
// ];
// var evencount = 0;
// var oddcount = 0;
// for (var i of array) {
//     for (var j of i) {
//         if (j % 2 == 0) {
//             evencount=evencount+1
//         }
//         else {
//             oddcount=oddcount+1
//         };
//     };
// };
// console.log("total evencount---------------------->>", evencount);
// console.log("total of oddcount------------------>>", oddcount);