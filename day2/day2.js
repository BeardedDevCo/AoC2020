const fs = require('fs');

const aPasswords = fs.readFileSync('./input.txt',{encoding:'utf-8'}).split('\n');
let aPassingWords1 = []; 
let aPassingWords2 = []; 

aPasswords.map(function(x){
    let password = x.split(':')[1].trim();
    let number = parseInt(x.split('-')[0],10)
    let recurring = parseInt(x.split('-')[1].split(' ')[0],10)
    let letter = x.split(' ')[1].split(':')[0]

    let occurs = password.split(letter).length -1;
    if(occurs >= number){
        if(occurs <= recurring){
            aPassingWords1.push(password)
        }
    }
});


//part two

aPasswords.map(function(x){
    let password = x.split(':')[1].trim();
    let position1 = parseInt(x.split('-')[0],10) - 1
    let position2 = parseInt(x.split('-')[1].split(' ')[0],10) - 1
    let letter = x.split(' ')[1].split(':')[0]

    if((password.charAt(position1) === letter && password.charAt(position2) !== letter) || password.charAt(position2) === letter && password.charAt(position1) !== letter){
        aPassingWords2.push(password)
    }else{
        console.log('failed');
    }
});
console.log(aPassingWords1.length);
console.log(aPassingWords2.length);