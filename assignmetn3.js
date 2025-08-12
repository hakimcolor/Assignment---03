/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
area = 100;
var divide = area / 2;
console.log(divide);

area = 15;
console.log(area / 2);

area = 2060;
console.log(area / 2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here
if (money >= 25000) {
  console.log('Laptop');
} else if (money >= 10000) {
  console.log('Cycle');
} else {
  console.log('Chocolate');
}

money = 10000;
if (money >= 25000) {
  console.log('Laptop');
} else if (money >= 10000) {
  console.log('Cycle');
} else {
  console.log('Chocolate');
}

money = 9999;
if (money >= 25000) {
  console.log('Laptop');
} else if (money >= 10000) {
  console.log('Cycle');
} else {
  console.log('Chocolate');
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 4;
//write your code here

for (var d = 1; d <= lastDay; d++) {
  if (d % 3 == 0) {
    console.log(d + ' - medicine');
  } else {
    console.log(d + ' - rest');
  }
}
// it's for day 6
lastDay = 6;
for (var d = 1; d <= lastDay; d++) {
  if (d % 3 == 0) {
    console.log(d + ' - medicine');
  } else {
    console.log(d + ' - rest');
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = [
  'result.pdf',
  'data.docx',
  'pdfData.jpg',
  '#exp.mp4',
  'docx.txt',
  'docx.xpdf',
  'slipdf.txt',
];

//write your code here
for (var i = 0; i < fileName.length; i++) {
  var file = fileName[i];
  if (file.startsWith('#') || file.endsWith('.pdf') || file.endsWith('.docx')) {
    console.log('Store');
    // console.log(typeof file);
  } else {
    console.log('Delete');
    // console.log(typeof file);
  }
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: 'jhankar', roll: 1014, department: 'cse' };
//write your code here
console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);

// next
student = { name: 'monu', roll: 99, department: 'eee' };
console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);

// next
student = { name: 'mewo', roll: 96, department: 'cse' };
console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for (var i = 0; i < experience; i++) {
  startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));
//  next
experience = 3;
startingSalary = 15000;
for (var i = 0; i < experience; i++) {
  startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));
// next
experience = 40;
startingSalary = 30000;
for (var i = 0; i < experience; i++) {
  startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));

// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
const heights2 = [167, 190, 120, 165, 137];

let numb = Math.min(...heights2);
console.log(numb);

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const height2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(friends) {
  let smallest = friends[0];

  for (let name of friends) {
    if (name.length < smallest.length) {
      smallest = name;
    }
  }

  return smallest;
}

console.log('Smallest name is:', smallestName(height2));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const total =
    laptopQty * laptopPrice + tabletQty * tabletPrice + mobileQty * mobilePrice;

  return total;
}

const totalBudget = calculateElectronicsBudget(2, 1, 3);
console.log('Total budget required:', totalBudget, 'tk');

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];
const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48000 },
];

function findAveragePhonePrice(phoneArray) {
  let totalPrice = 0;

  for (let phone of phoneArray) {
    totalPrice += phone.price;
  }

  const average = totalPrice / phoneArray.length;
  return average;
}

console.log('Average phone price:', findAveragePhonePrice(phones));

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
const employees = [
  { name: 'shahin', experience: 5, starting: 20000, increment: 5000 },
  { name: 'shihab', experience: 3, starting: 15000, increment: 7000 },
  { name: 'shikot', experience: 9, starting: 30000, increment: 1000 },
  { name: 'shohel', experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalMonthlySalary(employeeList) {
  let totalSalary = 0;

  for (let emp of employeeList) {
    const currentSalary = emp.starting + emp.increment * emp.experience;
    totalSalary += currentSalary;
  }

  return totalSalary;
}
const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log('Total monthly salary to be paid:', totalMonthlySalary, 'tk');
