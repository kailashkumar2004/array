
// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// var i = 0;
// while (i < array.length) {
//     let j = 0;
//     while (j < array[i].length) {
//         if (array[i][j] % 2 == 0) {
//             console.log(array[i][j],"even")
//         }
//         else {
//             console.log(array[i][j],"odd")
//         }
//         j=j+1
//     }
//     i=i+1
// };

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// var i = 0;
// do {
//     var j = 0;
//     do {
//         if (array[i][j] % 2 == 0) {
//             console.log(array[i][j], "even")
//         }
//         else {
//             console.log(array[i][j], "odd")
//         }
//         j = j + 1
//     }
//     while (j < array[i].length);
//     i = i + 1
// }
// while (i < array.length);

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// for (var i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//         if (array[i][j] % 2 == 0) {
//             console.log(array[i][j],"even")
//         }
//         else {
//             console.log(array[i][j],"odd")
//         };
//     };
// };

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// for (var i in array) {
//     for (var j in array[i]) {
//         if (array[i][j] % 2 == 0) {
//             console.log(array[i][j],"even")
//         }
//         else {
//             console.log(array[i][j],"odd")
//         };
//     };
// };

// var array = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ];
// for (var i of array) {
//     for (var j of i) {
//         if (j % 2 == 0) {
//             console.log(j,"even")
//         }
//         else {
//             console.log(j,"odd")
//         };
//     };
// };