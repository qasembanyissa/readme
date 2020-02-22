'use strict';
var counter = 0;
var totalQuestion=7;

function personla(){
  var xz = prompt('what is your name');

  var n1 = prompt('my name is qasem ? yes/no ');
  if (n1.toLowerCase() === 'yes' || n1.toLowerCase() === 'y') {
    alert('correct');
    counter++;
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
    counter++;
  } else {
    alert('try again');
  }

  var n3 = prompt('my favourt hoppy is reading? yes/no');
  if (n3.toLowerCase() === 'yes' || n3.toLowerCase() === 'y') {
    alert('incorrect , i dont like reading , i like sport');
  } else if (n3.toLowerCase() === 'no' || n3.toLowerCase() === 'n') {
    alert('correct , i like sport ');
    counter++;
  } else {
    alert('try again');
  } var n4 = prompt('my favourt club is real madrid ? yes/no');
  if (n4.toLowerCase() === 'yes' || n4.toLowerCase() === 'y') {
    alert('correct');
    counter++;
  } else if (n4.toLowerCase() === 'no' || n4.toLowerCase() === 'n') {
    alert('incorrect! , my favourt club is real madrid');
  } else {
    alert('try again');
  }

  var n5 = prompt('iam love with coffee ? yes/no');
  if (n5.toLowerCase() === 'yes' || n5.toLowerCase() === 'y') {
    alert('correct');
    counter++;
  } else if (n5.toLowerCase() === 'no' || n5.toLowerCase() === 'n') {
    alert('incorrect , i love coffe of course');
  } else {
    alert('try again');
  }

  alert('welcome  ' + xz);
  document.write('welcome  ' + xz);
}
function listnumber(){
  var num = 0;

  var q6 = prompt('i need ypu to choise anumber i added it , and i need you to guess what is number , you have four chanses to correct a wright answer');

  while (num < 4) {
    if (q6 == 15) {
      alert('great , good job , this is the right number');
      counter++;
      break;
    }
    else if (q6 < 10) {
      alert('The number is small, choose a higher number');
      q6 = prompt('try again');
      num++;
      console.log('first try', num);
    }
    else if (9 < q6 && q6 < 15) {
      alert('Choose a slightly higher number, you got close to answering!');
      q6 = prompt('try again');
      console.log('second try', num);
      num++;

    }

    else if (q6 > 15 && q6 < 21) {
      alert('Choose a slightly lower number, you came close to answering!');
      q6 = prompt('i need ypu to choise anumber i added it , and i need you to guess what is number , you have four chanses to correct a wright answer');
      console.log('third try', num);
      num++;
    }
    else if (q6 > 22) {
      alert('The number is high, choose a lower number');
      q6 = prompt('i need ypu to choise anumber i added it , and i need you to guess what is number , you have four chanses to correct a wright answer');
      console.log('fourth try', num);
      num++;

    } else {
      alert('wrong answer , please choise a number');
      q6 = prompt('i need ypu to choise anumber i added it , and i need you to guess what is number , you have four chanses to correct a wright answer');
      num++;
    }
  }
}
function bestmovies(){

  var films=['intersteller','inception','django','lotr','the vow'];
  var question7=prompt('whats is my faviourite movie??');
  var question7=question7.toLowerCase;
  for(var i=0;i<6;i++)
  {
    for(var x=0;x<films.length;x++)
    {
      if(question7 === films[0] || question7 === films[1] || question7 === films[2] ||
        question7 === films[3] || question7 === films[4])
      {
        counter++;
        alert('correct answer this is my best movie'+films[x]);
        i=5;
        break;

      }
      else
      {

        question7=prompt('whats is my faviourite movie??');

      }
    }
    break;
  }
  alert('your score is'+counter+' out of'+totalQuestion);
}


personla();
listnumber();
bestmovies();
