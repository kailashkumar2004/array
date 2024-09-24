// var array = [
    
//     [98, -19, 23, -46, 75, -68, 90],
//     [11, -18, 29, -30, 45, -68, 17],
//     [-90, 87, -33, 41, -20, 30, -97],
//     [17, -20, 37, -45, 67, -88, 90]
// ];
// var i = 0;
// while (i < array.length) {
//     var j = 0;
//     while (j < array[i].length) {
//         if (array[i][j] > 0) {
//             console.log(array[i][j],"posstive")
//         }
//         else {
//             console.log(array[i][j],"neagtive")
//         }
//         j=j+1
//     }
//     i=i+1
// };

// var array = [
    
//     [98, -19, 23, -46, 75, -68, 90],
//     [11, -18, 29, -30, 45, -68, 17],
//     [-90, 87, -33, 41, -20, 30, -97],
//     [17, -20, 37, -45, 67, -88, 90]
// ];
// var i = 0;
// do {
//     let j = 0;
//     do {
//         if (array[i][j] > 0) {
//             console.log(array[i][j], "posstive")
//         }
//         else {
//             console.log(array[i][j], "neagtive")
//         }
//         j = j + 1
//     }
//     while (j < array[i].length);
//     i = i + 1
// }
// while (i < array.length);

// var array = [
    
//     [98, -19, 23, -46, 75, -68, 90],
//     [11, -18, 29, -30, 45, -68, 17],
//     [-90, 87, -33, 41, -20, 30, -97],
//     [17, -20, 37, -45, 67, -88, 90]
// ];
// for (var i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//         if (array[i][j] > 0) {
//             console.log(array[i][j],"posstive")
//         }
//         else {
//             console.log(array[i][j],"neagtive")
//         };
//     };
// };

// var array = [
    
//     [98, -19, 23, -46, 75, -68, 90],
//     [11, -18, 29, -30, 45, -68, 17],
//     [-90, 87, -33, 41, -20, 30, -97],
//     [17, -20, 37, -45, 67, -88, 90]
// ];
// for (var i in array) {
//     for (var j in array[i]) {
//         if (array[i][j] > 0) {
//             console.log(array[i][j],"posstive")
//         }
//         else {
//             console.log(array[i][j],"neagtive")
//         };
//     };
// };

// var array = [
    
//     [98, -19, 23, -46, 75, -68, 90],
//     [11, -18, 29, -30, 45, -68, 17],
//     [-90, 87, -33, 41, -20, 30, -97],
//     [17, -20, 37, -45, 67, -88, 90]
// ];
// for (var i of array) {
//     for (var j of i) {
//         if (j > 0) {
//             console.log(j,"posstive")
//         }
//         else {
//             console.log(j,"neagtive")
//         };
//     };
// };