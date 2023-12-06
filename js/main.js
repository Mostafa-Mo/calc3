// //Question 1
// var x = Number(prompt('Enter a number'));
// console.log(x);

// //Question 2
// var x = Number(prompt('Enter a number'));
// if (x % 3 == 0 && x % 4 == 0)
//     console.log('yes');
// else
//     console.log('no');

// //Question 3
// var x = Number(prompt('Enter first number'));
// var y = Number(prompt('Enter second number'));
// if (x > y)
//     console.log(x);
// else
//     console.log(y);

// //Question 4
// var x = Number(prompt('Enter a number'));
// if (x < 0)
//     console.log('negative');
// else
//     console.log('positive');

// //Question 5
// var x = Number(prompt('Enter first number'));
// var y = Number(prompt('Enter second number'));
// var z = Number(prompt('Enter third number'));
// var max = -99999999;
// var min = 9999999;
// if (x > max)
//     max = x;
// if (y > max)
//     max = y;
// if (z > max)
//     max = z;
// if (x < min)
//     min = x;
// if (y < min)
//     min = y;
// if (z < min)
//     min = z;
// console.log('Max element = ' + max);
// console.log('Min element = ' + min);

// //Question 6
// var x = parseInt(prompt('Enter a number'));
// if (x % 2 == 0)
//     console.log('even');
// else
//     console.log('odd');

// //Question 7
// var x = prompt('Enter a character');
// if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
//     console.log('vowel');
// else
//     console.log('constant');

// //Question 8
// var x = parseInt(prompt('Enter a number'));
// for (var i = 1; i <= x; i++)
//     console.log(i);
//saleb

// //Question 9
// var x = parseInt(prompt('Enter a number'));
// for (var i = 1; i < 13; i++)
//     console.log(x * i);

// //Question 10
// var x = Number(prompt('Enter a number'));
// for (var i = 1; i < x; i++)
//     if (i % 2 == 0)
//         console.log(i);

// //Question 11
// var x = parseInt(prompt('Enter first number'));
// var y = parseInt(prompt('Enter second number'));
// console.log(x ** y);

// //Question 12
// var x = ['first', 'second', 'third', 'fourth', 'fifth'];
// var total = 0;
// for (var i = 0; i < 5; i++) {
//     x[i] = Number(prompt('Enter ' + x[i] + ' mark'));
//     total += x[i];
// }
// console.log('Total marks = ' + total);
// console.log('Average marks = ' + total / 5);
// console.log('Percentage = ' + (total / 5)  + '%');

// //Question 13
// var x = Number(prompt('Enter month number'));
// switch (x) {

//     case 1:
//         console.log('January has 31 days');
//         break;

//     case 2:
//         console.log('February has 28 days');
//         break;

//     case 3:
//         console.log('March has 31 days');
//         break;

//     case 4:
//         console.log('April has 30 days');
//         break;

//     case 5:
//         console.log('May has 31 days');
//         break;

//     case 6:
//         console.log('June has 30 days');
//         break;

//     case 7:
//         console.log('July has 31 days');
//         break;

//     case 8:
//         console.log('August has 31 days');
//         break;

//     case 9:
//         console.log('September has 30 days');
//         break;

//     case 10:
//         console.log('October has 31 days');
//         break;

//     case 11:
//         console.log('November has 30 days');
//         break;

//     case 12:
//         console.log('December has 31 days');
//         break;

//     default:
//         console.log('Enter a proper value!');
// }

// //Question 14
// var x = ['physics', 'chemistry', 'biology', 'maths', 'computer'];
// var total = 0;
// for (var i = 0; i < 5; i++) {
//     x[i] = Number(prompt('Enter ' + x[i] + ' mark'));
//     total += x[i];
// }
// var grade = total / 5;
// if (grade >= 90)
//     grade = 'A';
// else if (grade >= 80)
//     grade = 'B';
// else if (grade >= 70)
//     grade = 'C';
// else if (grade >= 60)
//     grade = 'D';
// else if (grade >= 40)
//     grade = 'E';
// else if (grade < 40)
//     grade = 'F';
// console.log('Percentage = ' + (total / 5) + '%' + '    ' + 'Grade: ' + grade);

// //Question 15
// var x = Number(prompt('Enter month number'));
// switch (x) {

//     case 1:
//         console.log('January has 31 days');
//         break;

//     case 2:
//         console.log('February has 28 days');
//         break;

//     case 3:
//         console.log('March has 31 days');
//         break;

//     case 4:
//         console.log('April has 30 days');
//         break;

//     case 5:
//         console.log('May has 31 days');
//         break;

//     case 6:
//         console.log('June has 30 days');
//         break;

//     case 7:
//         console.log('July has 31 days');
//         break;

//     case 8:
//         console.log('August has 31 days');
//         break;

//     case 9:
//         console.log('September has 30 days');
//         break;

//     case 10:
//         console.log('October has 31 days');
//         break;

//     case 11:
//         console.log('November has 30 days');
//         break;

//     case 12:
//         console.log('December has 31 days');
//         break;

//     default:
//         console.log('Enter a proper value!');
// }

// //Question 16
// var x = prompt('Enter a character');
// switch (x) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('Vowel');
//         break;

//     default:
//         console.log('Constant');
// }

// //Question 17
// var x = Number(prompt('Enter first number'));
// var y = Number(prompt('Enter second number'));
// switch (true) {

//     case (y > x):
//         console.log('Max = ' + y);
//         console.log('Min = ' + x);
//         break;

//     case (x > y):
//         console.log('Max = ' + x);
//         console.log('Min = ' + y);
//         break;

//     case (x === y):
//         console.log('Two numbers are equal');

//     default:
//         console.log('Please type a valid input');
// }

// //Question 18
// var x = Number(prompt('Enter a number'));
// switch (true) {

//     case (x % 2 == 0):
//         console.log('Even');
//         break;

//     case ((x + 1) % 2 == 0):
//         console.log('Odd');
//         break;

//     default:
//         console.log('Please type a valid input');
// }

// //Question 19
// var x = Number(prompt('Enter a number'));
// switch (true) {

//     case (x > 0):
//         console.log('Positive');
//         break;

//     case (x < 0):
//         console.log('Negative');
//         break;

//     case (x === 0):
//         console.log('Zero');
//         break;

//     default:
//         console.log('Please type a valid input');
// }

// //Question 20
// var x = Number(prompt('Enter first number'));
// var operator = prompt('Choose an operator ( +, -, *, / , ^)');
// var y = Number(prompt('Enter second number'));
// var result;
// switch (operator) {

//     case '+':
//         result = x + y;
//         console.log(x + ' + ' + y + ' = ' + result);
//         break;

//     case '-':
//         result = x - y;
//         console.log(x + ' - ' + y + ' = ' + result);
//         break;

//     case '*':
//         result = x * y;
//         console.log(x + ' * ' + y + ' = ' + result);
//         break;

//     case '/':
//         result = x / y;
//         console.log(x + ' / ' + y + ' = ' + result);
//         break;

//     case '^':
//     case '**':
//         result = x ** y;
//         console.log(x + ' ^ ' + y + ' = ' + result);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }