/*1. Create an array with the numbers 1 through 10. Write a function to remove all even
 numbers from this array and return the new array.
 Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 Output: [1, 3, 5, 7, 9]
 */
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var newar = []

// arr.forEach((e) => {
//     if (e % 2 == 1 ) newar.push(e); 
// }
// )
// console.log(newar);
 /*
 2. Write a function that takes a string as an argument and returns the number of
 vowels in the string. Ignore case sensitivity.
 Input: "Hello World"
 Output: 3
 */
// let str = "Hello World";
//  vowelscount = (str) => {
//     var count = 0;
//     var vowels = ['A' , 'a' , 'e' , 'E' , 'I' , 'i' , 'O' , 'o' , 'U' , 'u'];
//     for (let i = 0; i < str.length; i++) {
         
//         for(let j = 0; j < vowels.length ; j++ ) {
//             if (str[i] == vowels[j]){
//                 count++;
//             }
//         }
//     }
//     console.log(count);
//  }

//  vowelscount(str);
/*

 3. Write a for loop that prints the first 10 Fibonacci numbers.
 Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

 */

//  var num = [];
//    for (let i = 0; i < 50; i++) {
//     num.push(i+(i-1));
//    console.log(num);

//    }
/*
 4. Write a function that takes a month as an argument (e.g., "January") and returns
 the number of days in that month. Consider leap years for February. Use a switch
 statement.
 Input: "February"
 Output: 28 or 29 (depending on whether it's a leap year)
 */

// const month = 'Feb';

// switch(month) {
//        case 'jan' :
//         console.log(31)
//         break;
//         case 'Feb' :
//         console.log(29)
//         break;
//         case 'Mar' :
//         console.log(31)
//         break;
//         case 'Apr' :
//         console.log(30)
//         break;
        
//         case 'jun' :
//         console.log(31)
//         break;
//         case 'jul' :
//         console.log(30)
//         break;
//         case 'aug' :
//         console.log(31)
//         break;
//         case 'sep' :
//         console.log(30)
//         break;
//         case 'oct' :
//         console.log(31)
//         break;
//         case 'Nov' :
//         console.log(30)
//         break;
//         case 'Dec' :
//         console.log(31)
//         break;
//         default : console.log('Enter Valid Month')
// }


/*
 5. Write a function that takes an array of numbers and returns a new array with only
 the prime numbers from the original array.
 Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 Output: [2, 3, 5, 7]
*/

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newar =[];
// primenum = (arr) => {
//      for (let i = 0; i < arr.length ; i++ ){
//         if (arr[count] / i == 0) {
//             newar.push(arr[i]);
//         }
//      }
// }

// console.log(newar);

/*

 6. Write a function that takes three numbers and returns the largest of the three
 without using the Math.max() method.
 Input: 3, 5, 1
 Output: 5

 */

//  maxnum = (n1,n2,n3) => {
//     if (n1 > n2 && n1 > n3 ) console.log(n1);
//     else if (n2 > n1 && n1 > n3 ) console.log(n2);
//     else if (n3 > n2 && n1 > n3 ) console.log(n3);

//  } 

//  maxnum(3,5,1);
 /*

 7. Write a function that takes an array of numbers and returns the product of all the
 numbers in the array.
 Input: [1, 2, 3, 4]
 Output: 24

 */
// var arr = [1, 2, 3, 4]
//  product = (arr) => {
//     var products = 1;
//     for(let i = 0; i < arr.length ; i++) {
//         products = products * arr[i];
//     }
//     console.log(products);
//  }

//  product(arr)
 /*
 8. Write a function that takes a string and an optional character. The function should
 return the number of times the character appears in the string. If the character is
 not provided, count the number of spaces in the string.
Input: ("Hello World", "o")

*/
// var str = 'Hello World';
// strcount = (str , char) =>{
//     var counter = 0;
    
//     for (let i = 0 ; i < str.length ; i++) {
//         if (str[i]=== char) {
//             counter++;
//         } 
//     }
//     if (counter > 0) console.log(counter);
//     else console.log(0);

// }
// strcount(str);

/*
 Output: 2
 Input: ("Hello World")
 Output: 1
 9. Write a function that takes a score (0-100) and returns the corresponding grade (A,
 B, C, D, F) based on standard grading scale. Use a switch statement with a default
 case for invalid scores.
 Input: 85
 Output: B
 10. Write a function that takes an array of strings and returns an object where the
 keys are the strings and the values are the lengths of those strings. The function
 should exclude strings that have a length of 3 or less.
 Input: ["apple", "bat", "car", "dolphin"]
 Output: {"apple": 5, "dolphin": 7
 */