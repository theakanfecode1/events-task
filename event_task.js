const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
var events = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
    ["D1", "D2", "D3"],
    ["E1", "E2", "E3"],
    ["F1", "F2", "F3"],
    ["G1", "G2", "G3"],
    ["H1", "H2", "H3"],
    ["I1", "I2", "I3"],
    ["J1", "J2", "J3"],
    ["K1", "K2", "K3"],
    ["L1", "L2", "L3"],
]
var possibleCombinations = getPossibleCombinations(events)
function getPossibleCombinations(list, n = 0, result = [], current = []){
    if (n === list.length) result.push(current)
    else list[n].forEach(item => getPossibleCombinations(list, n+1, result, [...current, item]))
    return result
}
function searchForCombination(value){
    var foundItem = false
    var userInput = value.split(",")
    for(let i = 0; i < possibleCombinations.length;i++){
        if(possibleCombinations[i].every((val, index) => val === userInput[index])){
            console.log("Combination found at position:"+(i+1))
            foundItem = true
        }
    }
    if(!foundItem){
        console.log("Combination not found")
    }
}
console.log(possibleCombinations);
console.log("The total number of possible combination is: "+possibleCombinations.length)
rl.question("Kindly enter your search combination (comma seprated) e.g A1,B1,C1,D1,E1,F1,G1,H1,I1,J1,K1,L1? ", function (answer) {
    searchForCombination(answer)
    rl.close()
})