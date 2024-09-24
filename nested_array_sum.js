// var array = [
//     [98, 19, 23, 46, 75, 68, 90],
//     [11, 18, 29, 30, 45, 68, 17],
//     [90, 87, 33, 41, 20, 30, 97],
//     [17, 20, 37, 45, 67, 88, 90]
    
// ];
// var i = 0;
// let sum = 0;
// while (i < array.length) {
//     var j = 0;
//     while (j < array[i].length) {
//         sum = sum + array[i][j]
//         j=j+1
//     }
//     i=i+1
// };
// console.log("total of sum-->>", sum);

// var array = [
//     [98, 19, 23, 46, 75, 68, 90],
//     [11, 18, 29, 30, 45, 68, 17],
//     [90, 87, 33, 41, 20, 30, 97],
//     [17, 20, 37, 45, 67, 88, 90]
    
// ];
// var i = 0;
// let sum = 0;
// do {
//     var j = 0;
//     do {
//         sum = sum + array[i][j]
//         j = j + 1
//     }
//     while (j < array[i].length);
//     i = i + 1
// }
// while (i < array.length);
// console.log("total of sum-------><", sum);

// var array = [
    
//     [98, 19, 23, 46, 75, 68, 90],
//     [11, 18, 29, 30, 45, 68, 17],
//     [90, 87, 33, 41, 20, 30, 97],
//     [17, 20, 37, 45, 67, 88, 90]
// ];
// var sum = 0;
// for (var i = 0; i < array.length; i++){
//     for (var j = 0; j < array[i].length; j++){
//         sum=sum+array[i][j]
//     };
// };
// console.log("total of sum-----><", sum);
    
// var array = [
    
//     [98, 19, 23, 46, 75, 68, 90],
//     [11, 18, 29, 30, 45, 68, 17],
//     [90, 87, 33, 41, 20, 30, 97],
//     [17, 20, 37, 45, 67, 88, 90]
// ];
// let sum = 0;
// for (var i in array) {
//     for (var j in array[i]) {
//         sum=sum+array[i][j]
//     };
// };
// console.log("total of sum------->><<", sum);

// var array = [
    
//     [98, 19, 23, 46, 75, 68, 90],
//     [11, 18, 29, 30, 45, 68, 17],
//     [90, 87, 33, 41, 20, 30, 97],
//     [17, 20, 37, 45, 67, 88, 90]
// ];
// let sum = 0;
// for (var i of array) {
//     for (var j of i) {
//         sum=sum+j
//     };
// };
// console.log("total of sum----------><", sum);