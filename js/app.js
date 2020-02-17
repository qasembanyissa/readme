'use strict';

var xz = prompt('what is your name');


var n1 = prompt('my name is qasem ? yes/no ');
if (n1.toLowerCase() === 'yes' || n1.toLowerCase() === 'y') {
    alert('correct');
} else if (n1.toLowerCase() === 'no' || n1.toLowerCase() === 'n') {
    alert('incorrect , my name is qasem');
} else {
    alert('try again');
}
var n2 = prompt('i have 30 years ? yes/no ');
if (n2.toLowerCase() === 'yes' || n2.toLowerCase() === 'y') {
    alert('incorrect! , i have 24 years');
} else if (n2.toLowerCase() === 'no' || n2.toLowerCase() === 'n') {
    alert('corrct , i have 24 years');
} else {
    alert('try again');
}

var n3 = prompt('my favourt hoppy is reading? yes/no');
if (n3.toLowerCase() === 'yes' || n3.toLowerCase() === 'y') {
    alert('incorrect , i dont like reading , i like sport');
} else if (n3.toLowerCase() === 'no' || n3.toLowerCase() === 'n') {
    alert('correct , i like sport ');
} else {
    alert('try again');
} var n4 = prompt('my favourt club is real madrid ? yes/no');
if (n4.toLowerCase() === 'yes' || n4.toLowerCase() === 'y') {
    alert('correct');
} else if (n4.toLowerCase() === 'no' || n4.toLowerCase() === 'n') {
    alert('incorrect! , my favourt club is real madrid');
} else {
    alert('try again');
}

var n5 = prompt('iam love with coffee ? yes/no');
if (n5.toLowerCase() === 'yes' || n5.toLowerCase() === 'y') {
    alert('correct');
} else if (n5.toLowerCase() === 'no' || n5.toLowerCase() === 'n') {
    alert('incorrect , i love coffe of course');
} else {
    alert('try again');
}

alert('welcome', xz);
