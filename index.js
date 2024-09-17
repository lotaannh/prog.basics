
let name = 'Mosh'; //string literal
console.log(name);

let firstName = 'Mosh';
//const lastName ='Hamedani';
//default kasutan const
//let ainult siis kui pean andma uue väärtuse
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
let vanus = 30; //number literal
let isApproved = false //boolean literal
let selectedColor = null; //object literal
let person = {
    name: 'Mari',
    age: 30
};

console.log(person);

//Dot notation
person.name = 'John';

console.log(person.name);

//Array algab numbriga 0
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

function greet (name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Tom', 'Thomas');
greet('Tim');

//Calculating a value
function square(number) {
    return number * number;
}

//
const side = 5
const pindala = side*side
console.log(pindala);
console.log(square(side))

//
const nimi = 'Sandra';
const synniaasta = 1995
const currentyear = new Date().getFullYear()
const vanus2 = currentyear - synniaasta
console.log('Tere, ' +nimi + ' sa oled ' +vanus +' aastane!')

//
function greet (nimi, i) {
    console.log('Tere, ' +nimi +'!')
    if (i<18){
        console.log('Alaealine')
    }
    else if (18>=i && i<65){
        console.log('Täisealine')
    }
    
    else {
    console.log('Pensionär')
    }
    function kontrolliPaarisVõiPaaritu(i){
if (i % 2 ===0) {
console.log('Arv on paaris')
}
else {
    console.log('Arv on paaritu')
    }}

    kontrolliPaarisVõiPaaritu(i)
}
let age = 57
greet ('Malle', age);


