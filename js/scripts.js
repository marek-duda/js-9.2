var femalNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femalNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push('Marian')
} 

console.log(allNames);
