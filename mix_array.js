// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// var i = 0
// while (i < array.length) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i],"even")
//     }
//     else {
//         console.log(array[i],"odd")
//     }
//     i=i+1
// }

// for (var i = 0; i < array.length; i++){
//     if (array[i] % 2 == 0) {
//         console.log(array[i],"even")
//     }
//     else {
//         console.log(array[i],"odd")
//     }
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var sum = 0
// var i = 0
// while (i < array.length) {
//     sum = sum + array[i]
//     i=i+1
// }
// console.log("total of sum",sum)

// var array = [1, -2, 3, -4, 5, -6, 7, -8, 9, 10, -11, 12, -98, 45, 63, -28];
// var i = 0
// while (i < array.length) {
//     if (array[i] > 0) {
//         console.log(array[i],"posstive")
//     }
//     else {
//         console.log(array[i],"neagtive")
//     }
//     i=i+1
// }

// for (var i = 0; i < array.length; i++){
//     if (array[i] > 0) {
//         console.log(array[i],"posstive")
//     }
//     else {
//         console.log(array[i],"neagtive")
//     }
// }

// for (var i in array) {
//     if (array[i] > 0) {
//         console.log(array[i],"posstive")
//     }
//     else {
//         console.log(array[i],"neagtive")
//     }
// }

// for (var i of array) {
//     if (i > 0) {
//         console.log(i,"posstive")
//     }
//     else {
//         console.log(i,"neagtive")
//     }
// }

// var array = [19, 28, 30, 45, 67, 89, 43, 21, 34, 56, 74];
// for (var i in array) {
//     console.log(i)
// }

// var array = [12, 32, 45, 67, 89, 90, 64, 37, 19, 21, 38];
// console.log(array.length)

// var array = [21, 90, 75, 34, 40, 69, 27, 30, 50];
// console.log(array.reverse())

// var a = "manvi";
// var parts = a.split("");
// console.log(parts)

// var array = [12, 34, 56, 78, 90, 31, 45, 67, 83];
// array.push(75, 32)
// console.log(array)

// var array = [
//     [10, 20, 30, 40, 50],
//     [20, 40, 60, 80, 100],
//     [30,60,90,120,150]
// ]
// var sum = 0
// for (var i in array) {
//     for (var j in array[i]) {
//         sum=sum+array[i][j]
//     }
// }
// console.log(sum)

// for (var i of array) {
//     for (var j of i) {
//         sum=sum+j
//     }
// }
// console.log(sum)

// var arr1 = [12, 57, 89, 40, 90, 32, 45, 11, 14, 67, 38, 95, 27];
// var arr2 = [27, 95, 89, 11, 45, 87, 54, 100, 32, 64, 20, 80, 51];
// var emptyarray = []
// for (var i of arr1) {
//     if (arr2.includes(i)) {
//         emptyarray.push(i)
//     }
// }
// console.log(emptyarray)



// var arr1 = [12, 57, 89, 40, 90, 32, 45, 11, 14, 67, 38, 95, 27];
// var arr2 = [27, 95, 89, 11, 45, 87, 54, 100, 32, 64, 20, 80, 51];
// var emptyarray = []
// for (var i of arr1) {
//     if (!arr2.includes(i)) {
//         emptyarray.push(i)
//     }
// }
// console.log(emptyarray)

// var array = [1, 9, 11, 23, 45, 67, 89, 2, 1, 11, 17, 23, 45, 88, 99, 54, 100, 55, 89];
// var uniquNumber = []
// for (var i = 0; i < array.length; i++){
//     if (uniquNumber.indexOf(array[i]) == -1) {
//         uniquNumber.push(array[i])
//     }
// }
// console.log(uniquNumber)


// var array = [18, 90, 36, 78, 40, 50, 70, 100];
// var max = array[0];
// var i = 0
// while (i < array.length) {
//     if (array[i] > max) {
//         max=array[i]
//     }
//     i=i+1
// }
// console.log(max)
// for (var i in array) {
//     if (array[i] > max) {
//         max=array[i]
//     }
// }
// console.log(max)

// for (var i of array) {
//     if (i > max) {
//         max=i
//     }
// }
// console.log(max)

// var array = [12, 34, 67, 90, 87, 65, 43, 21, 1, 11, 19, 20, 56];
// var min = array[0]
// var i = 0
// while (i < array.length) {
//     if (array[i] < min) {
//         min=array[i]
//     }
//     i=i+1
// }
// console.log(min)

// for (var i in array) {
//     if (array[i] < min) {
//         min=array[i]
//     }
// }
// console.log(min)

// for (var i of array) {
//     if (i < min) {
//         min=i
//     }
// }
// console.log(min)

// var array = 19;
// var output = {}
// for (var i = 1; i <= array; i++){
//     output[i]=i*i
// }
// console.log(output)

// var array = [19, 32, 80, 76, 54, 32, 11, 7, 9, 8, 3, 5, 4, 1, 100, 62, 89, 59];
// array.sort((a, b) => a - b)
// console.log(array)

// var name = ["kailash", "manvi", "sonam", "bina", "anjali", "payal", "golu"];
// name.sort();
// console.log(name)

// var array = [20, 21, 22, 24];
// var output = []
// var i = 0
// while (i < array.length) {
//     var j = 1
//     while (j < array.length) {
//         output.push(array.slice(i, j + 1))
//         j=j+1
//     }
//     i=i+1
// }
// console.log(output)

// var array = [10, 20, 30, 40, 50, 75, 32, 14, 57, 89, 76, 54, 39, 85, 21, 19];
// var num = 50;
// var emptyarray = [];
// for (var i of array) {
//     for (var j of array) {
//         if (i + j == num) {
//             emptyarray.push([i,j])
//         }
//     }
// }
// console.log(emptyarray)

// var array = [12, 45, 67, 89, 90, 32, 45, 64, 21, 18, 20, 45, 63];
// console.log(array[6] = "kailash")
// console.log(array)

// var array = [1, 8, 9, 6, 4, 3, 2, 11, 34, 56, 32, 90, 87, 65];
// array.fill("kiwi")
// console.log(array)

// array.fill("kiwi", 3, 8)
// console.log(array)

// var array = ["kailash", "sourv", "manvi", "anjali", "bina", "aarav"]
// array.shift()
// console.log(array)

// var array = [9, 8, 7, 6, 5, 4, 3, 2, 11, 12, 34, 56, 78, 90]
// array.shift()
// console.log(array)

// var array = ["kailash", "sourv", "manvi", "anjali", "bina", "aarav"]
// array.unshift("komal")
// console.log(array)

// var array = [9, 8, 7, 6, 5, 4, 3, 2, 11, 12, 34, 56, 78, 90]
// array.unshift(100)
// console.log(array)

// var array = [89, 76, 4, 12, 67, 89, 32, 99, 32, 70];
// array.push(150)
// console.log(array)

// var array = ["kailash", "sourv", "manvi", "anjali", "bina", "aarav"]
// array.push("pojaa")
// console.log(array)

// var array = [89, 76, 4, 12, 67, 89, 32, 99, 32, 70]
// array.pop(11)
// console.log(array)

// var array = [89, 76, 4, 12, 67, 89, 32, 99, 32, 70]
// console.log(array[2])


// var array = [12, 16, 18, 20, 38, 49, 59, 70, 98, 71, 60]
// var position = array.indexOf(70)
// console.log(position)

// sum==================================
// var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// var sum = 0
// var i = 0
// while (i < array.length) {
//     sum = sum + array[i]
//     i=i+1
// }
// console.log("total of sum",sum)

// do {
//     sum = sum + array[i]
//     i=i+1
// }
// while (i < array.length)
// console.log(sum)

// for (var i = 0; i < array.length; i++){
//     sum = sum + array[i]
    
// }
// console.log("total of sum",sum)


// for (var i in array) {
//     sum=sum+array[i]
// }
// console.log("total of sum",sum)

// for (var i of array) {
//     sum=sum+i
// }
// console.log("total of sum",sum)

// even_and_odd====================================
// var arr = [1, 8, 9, 7, 6, 5, 4, 3, 2, 11, 23, 78, 96, 43, 26, 49, 60, 80];
// var i = 0
// while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i],"even")
//     }
//     else {
//         console.log(arr[i],"odd")
//     }
//     i=i+1
// }

// do {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i],"even")
//     }
//     else {
//         console.log(arr[i],"odd")
//     }
//     i=i+1
// }
// while(i<arr.length)

// for (var i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i],"even")
//     }
//     else {
//         console.log(arr[i],"odd")
//     }
// }

// for (var i in arr) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i],"even")
//     }
//     else {
//         console.log(arr[i],"odd")
//     }
// }

// for (var i of arr) {
//     if (i % 2 == 0) {
//         console.log(i,"even")
//     }
//     else {
//         console.log(i,"odd")
//     }
// }

// simpal_count============================================
// var num = [27, 90, 65, 43, 21, 12, 34, 57, 80, 86, 90, 85, 42, 18, 29];
// var count = 0
// var i = 1
// // while (i < num.length) {
//     count = count + 1
//     i=i+1
// }
// console.log(count)

// do {
//     count = count + 1
//     i=i+1
// }
// while (i < num.length)
// console.log("totl of count",count)

// for (var i = 1; i < num.length; i++){
//     count = count + 1
// }
// console.log("total of count",count)

// for (var i in num) {
//     count=count+1
// }
// console.log("total of count",count)

// for (var i of num) {
//     count=count+1
// }
// console.log("total of count",count)

// index===============================================================
// var array = [9, 75, 89, 90, 54, 32, 12, 34, 56, 71, 10, 20, 40];
// for (var i in array) {
//     console.log(i,array[i])
// }
// length======================================================
// var array = [9, 75, 89, 90, 54, 32, 12, 34, 56, 71, 10, 20, 40];
// console.log(array.length)

// resver========================================================

// var names = ["kailash", "manvi", "somiya", "anjali", "aarav", "sabita", "mona", "gita"];
// console.log(names.reverse())

// push=================================================
// var array = [10, 80, 75, 32, 50, 70];
// array.push(11, 99)
// console.log(array)

// var names = ["kailash", "manvi", "somiya", "anjali", "aarav", "sabita", "mona", "gita"];
// names.push("komal", "sagar", "chintu")
// console.log(names)

// spilit=============================================
// var a = "kailash"
// var parts = a.split("");
// console.log(parts)

// nesed_array===========================================
var arrry = [
    [10, 20, 30, 40, 50],
    [50, 40, 30, 20, 10],
    [15, 30, 45, 60, 75],
    [20, 40, 60, 80, 100]
    
]
var sum = 0
// for (var i in arrry) {
//     for (var j in arrry[i]) {
//         sum=sum+arrry[i][j]
//     }
// }
// console.log("toal of sum",sum)

// for (var i of arrry) {
//     for (var j of i) {
//         sum=sum+j
//     }
// }
// console.log("total of sum",sum)


// inculdes======================================================
// var num1 = [9, 78, 65, 43, 21, 22, 90, 68, 45, 32, 30, 80, 50];
// var num2 = [90, 80, 70, 50, 43, 21, 22, 35, 87, 54, 79, 85, 42];
// var emptyarray = [];
// for (var i of num1) {
//     if (num2.includes(i)) {
//         emptyarray.push(i)
//     }
// }
// console.log(emptyarray)

// not_inculdes==========================================================
// var num1 = [9, 78, 65, 43, 21, 22, 90, 68, 45, 32, 30, 80, 50];
// var num2 = [90, 80, 70, 50, 43, 21, 22, 35, 87, 54, 79, 85, 42];
// var emptyarray = [];
// for (var i of num1) {
//     if (!num2.includes(i)) {
//         emptyarray.push(i)
//     }
// }
// console.log(emptyarray)

// uniqueNumbers==============================================================
// var array = [98, 65, 43, 21, 12, 21, 46, 78, 90, 98, 65, 43, 12, 99, 100, 76, 43];
// var uniqueNumbers = [];
// for (var i = 0; i < array.length; i++){
//     if (uniqueNumbers.indexOf(array[i]) == -1) {
//         uniqueNumbers.push(array[i])
//     }
// }
// console.log(uniqueNumbers)

// max_number=====================================================================
// var array = [17, 90, 54, 32, 76, 89, 100, 23, 49, 76, 61];
// var max = array[0];
// var i = 0
// while (i < array.length) {
//     if (array[i] > max) {
//         max=array[i]
//     }
//     i=i+1
// }
// console.log(max)

// do {
//     if (array[i] > max) {
//         max=array[i]
//     }
//     i=i+1
// }
// while (i < array.length)
// console.log(max)

// for (var i = 0; i < array.length; i++){
//     if (array[i] > max) {
//         max=array[i]
//     }
// }
// console.log(max)

// for (var i in array) {
//     if (array[i] > max) {
//         max=array[i]
//     }
// }
// console.log(max)

// for (var i of array) {
//     if (i > max) {
//         max=i
//     }
// }
// console.log(max)

// min_number======================================================
// var array = [19, 80, 46, 23, 47, 59, 70, 32, 12, 1, 23, 21];
// var min = array[0]
// var i = 0
// while (i < array.length) {
//     if (array[i] < min) {
//         min=array[i]
//     }
//     i=i+1
// }
// console.log(min)

// do {
//     if (array[i] < min) {
//         min=array[i]
//     }
//     i=i+1
// }
// while (i < array.length)
// console.log(min)

// for (var i = 0; i < array.length; i++){
//     if (array[i] < min) {
//         min=array[i]
//     }
// }
// console.log(min)

// for (var i in array) {
//     if (array[i] < min) {
//         min=array[i]
//     }
// }
// console.log(min)

// for (var i of array) {
//     if (i < min) {
//         min=i
//     }
// }
// console.log(min)

// squar_number========================================================
// var num = 19
// var output = {};
// for (var i = 1; i <= num; i++){
//     output[i]=i*i
// }
// console.log(output)


// var number = 10
// var output = [];
// for (var i = 1; i <= number; i++){
//     output[i]=i*i
// }
// console.log(output)

// sort_number===============================================
// var arrry = [19, 765, 43, 29, 86, 11, 23, 45, 89, 90, 16, 2, 3, 4, 5, 7, 6, 8, 9, 1];
// arrry.sort((a, b) => a - b)
// console.log(arrry)

// sort_name============================================
// var names = ["kailash", "sourav", "manvi", "bina", "rira", "payal", "royal", "aaryan"];
// names.sort()
// console.log(names)

// ravindra===========================================================================
// var arrry = [78, 79, 80, 82];
// var output=[]
// var i = 0
// while (i < arrry.length) {
//     var j = 1
//     while (j < arrry.length) {
//         output.push(arrry.slice(i, j + 1))
//         j=j+1
//     }
//     i=i+1
// }
// console.log(output)

// num=====================================================================
// var array = [80, 76, 54, 20, 90, 10, 50, 76, 40, 10, 60, 50, 70, 30, 80, 90];
// var num = 100
// var emptyarray = [];
// for (var i of array) {
//     for (var j of array) {
//         if (i + j == num) {
//             emptyarray.push([i,j])
//         }
//     }
// }
// console.log(emptyarray)