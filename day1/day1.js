const fs = require('fs');

const aInput = fs.readFileSync('./input.txt',{encoding:'utf-8'}).split('\n').map(x => parseInt(x));

for (let i = 0; i < aInput.length; i++) {
    for (let j = i+1; j < aInput.length; j++) {
        for (let k = j+1; k < aInput.length; k++){
            if((aInput[j] + aInput[i] + aInput[k]) === 2020){
                console.log(aInput[j] * aInput[i] * aInput[k]);
            }          
        }
        
    }
    
}