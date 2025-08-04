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
