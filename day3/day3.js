const fs = require('fs');

const aInput = fs.readFileSync('./input.txt',{encoding:'utf-8'}).split('\n');



//probably a bit much but create a json map for the 2d structure

var map = {}
//we assume this is always the same
var length = aInput.length;
var width;
for (let x = 0; x < aInput.length; x++) {
    if(!map[x]){
        map[x] = {}
    }
    width = aInput[x].length;
    for (let j = 0; j < aInput[x].length; j++) {
        if(!map[x][j]){
            map[x][j] = aInput[x].charAt(j)
        }
        
    }
}


var getTrees = function(right,down){

    let depth = down;
    let xPos = right;
    let tree = 0;
    while(depth < length){
        if(map[depth][xPos +''] === '#'){
            tree++;
        }
    
        depth = depth + down;
        xPos = (xPos + right) % 31;
    }
    console.log(tree);
    return tree;
}


let totalTrees = getTrees(1,1) * getTrees(3,1) * getTrees(5,1) * getTrees(7,1) * getTrees(1,2)

console.log(totalTrees)