
let int = undefined;
console.log('hier undefined int type is: ', typeof int)

let primitiveTypes = `
hier are primitive tytes:

int: ${15  + ' -> ' + typeof 15}
float: ${1.5  + ' -> ' + typeof 1.5}
double: ${1.23421  + ' -> ' + typeof 1.23421}
string: ${'Text'  + ' -> ' + typeof 'hier is a text'}
char: ${'a'  + ' -> ' + typeof 'a'}
boolean: ${true  + ' -> ' + typeof true}
`;
console.log(primitiveTypes);

// int variable changed
// let int = 17;
// console.log(int);


const saxeli = 'Nia';
let activity = 'hike';
let weekDay = null;

let datum = new Date();
let dayToday= datum.getDay();

switch(dayToday){
case 0:
    weekDay = "Sunday";
    break;
case 1:
    weekDay = "Monday";
    break;
case 2:
    weekDay = "Thuesday";
    break;
case 3:
    weekDay = "Wednesday";
    break;
case 4:
    weekDay = "Thursday";
    break;
case 5:
    weekDay = "Friday"
    break;
case 6:
    weekDay = "Saturday"
    break;
}

const text = 'Hi, my name is ' + saxeli + ' today is ' + weekDay + ', and a perfect day for a ' + activity + '.';
console.log(text)



// console.log -> print out, unterschied, ein Satz kann man NICHT direcht in console log mit + und so bauen
// var let -> gleich, var ist nur alt. variablen die geändert werden können
// const -> variable die nicht geändert werden können, ähnlich wie final

