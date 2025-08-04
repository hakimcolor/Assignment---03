// var nm = 'hakimali';
// console.log(nm);
// const country = 'bangladesh';
// console.log(country);
// const x = '';
// if (!x.length) {
//   console.log('Hey');
// } else {
//   console.log('Hi');
// }
// const str = 'Hello';
// str[0] = 'h';
// console.log(str);
// let age = 21;
// console.log(age);
// age = 22;
// console.log(age);

// // object
// const student = {
//   names: 'hakimali',
//   age: 22,
//   stady: 'honurs 1st yer',
//   skill: 'web developer ..',
//   tecknolagyFontrent:
//     'html, css, tailwindcss , javaScript , React.js , next.js, ',
//   tecknolagyBackend: 'node.js, python, dango',
//   dataBace: ' laraver, mongodb, sql,',
// };
// console.log(student.skill);
// for (let key in student) {
//   if (key === 'skill') {
//     console.log(`${key}: ${student[key]}`);
//   }
// }
// console.log('skill :', student.skill);
// const a = '4' - 2;
// console.log(a);

// // let appleOrang = 700;
// // let haveTaka = 1000;
// // let cost = `was my pocket 1000 taka ..  i gone markect for buy some food .. actulaey i bueay some food .. as apple and orange ... the apple and orage cost was 700 taka.... so now my pocket have ${appleOrang}-${haveTaka}`;
// // document.getElementById(cost);
// let appleOrang = 700;
// let haveTaka = 1000;

// let cost = `Was my pocket 1000 taka... I went to the market to buy some food. Actually, I bought some apples and oranges.
// The apple and orange cost was 700 taka...
// So now my pocket has ${haveTaka} - ${appleOrang} = ${
//   haveTaka - appleOrang
// } taka.`;

// document.getElementById('output').innerHTML = cost;
// console.log(haveTaka - appleOrang);

// practice roblem 2
// let num = ' 75.25,65,80,35.45,99.50';
// document.getElementById('numm').innerHTML = num;
// const numr = num.trim().split(',').map(Number);

// const total = numr.reduce((a, b) => a + b);
// const ave = total / numr.length;
// const aves = ave.toFixed(2);
// document.getElementById('aves').innerHTML = aves;
let num = ' 75.25,65,80,35.45,99.50';

document.getElementById('numm').innerHTML = num;

const numr = num.trim().split(',').map(Number);

const total = numr.reduce((a, b) => a + b);

const ave = total / numr.length;

const aves = ave.toFixed(2);

document.querySelector('.avs').innerHTML = `Average: ${aves}`;



// class13work3
let w3=119;
console.log(w3%5)
