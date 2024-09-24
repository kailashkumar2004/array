// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// let oddsum = 0;
// var i = 0;
// while (i < array.length) {
//     var j = 0;
//     while (j < array[i].length) {
//         if (array[i][j] % 2 != 0) {
//             oddsum=oddsum+array[i][j]
//         }
//         j=j+1
//     }
//     i=i+1
// };
// console.log("total of oddsum--------><", oddsum);

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// let oddsum = 0;
// var i = 0;
// do {
//     var j = 0;
//     do {
//         if (array[i][j] % 2 != 0) {
//             oddsum = oddsum + array[i][j]
//         }
//         j = j + 1
        
//     }
//     while (j < array[i].length);
//     i = i + 1
// }
// while (i < array.length);
// console.log("total of oddsum====>><<", oddsum);

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// let oddsum = 0;
// for (var i = 0; i < array.length; i++){
//     for (var j = 0; j < array[i].length; j++){
//         if (array[i][j] % 2 != 0) {
//             oddsum=oddsum+array[i][j]
//         };
//     };
// };
// console.log("total of oddsum-----><", oddsum);

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// let oddsum = 0;
// for (var i in array) {
//     for (var j in array[i]) {
//         if (array[i][j] % 2 != 0) {
//             oddsum=oddsum+array[i][j]
//         };
//     };
// };
// console.log("total of oddsum----><", oddsum);

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// let oddsum = 0;
// for (var i of array) {
//     for (var j of i) {
//         if (j % 2 != 0) {
//             oddsum=oddsum+j
//         };
//     };
// };
// console.log("total of oddsum------><", oddsum);