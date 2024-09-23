// var array = [
//     [11, 12, 45, 67, 89, 76, 54, 34],
//     [90, 89, 76, 32, 10, 47, 59, 99],
//     [70, 25, 78, 98, 76, 43, 10, 20]
// ];
// var evensum = 0;
// var oddsum = 0;
// for (var i in array) {
//     for (var j in array[i]) {
//         if (array[i][j] % 2 == 0) {
//             evensum=evensum+array[i][j]
//         }
//         else {
//             oddsum=oddsum+array[i][j]
//         };
//     };
// };
// console.log("total of evensum------------------>>", evensum);
// console.log("total of oddsum------------------->>", oddsum);


// var array = [
//     [11, 12, 45, 67, 89, 76, 54, 34],
//     [90, 89, 76, 32, 10, 47, 59, 99],
//     [70, 25, 78, 98, 76, 43, 10, 20]
// ];
// var evensum = 0;
// var oddsum = 0;
// for (var i of array) {
//     for (var j of i) {
//         if (j % 2 == 0) {
//             evensum=evensum+j
//         }
//         else {
//             oddsum=oddsum+j
//         };
//     };
// };
// console.log("total of evensum------------------>>", evensum);
// console.log("total of oddsum------------------->>", oddsum);