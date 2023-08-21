#! /usr/bin/env node
import promptSync from "prompt-sync";
const prompt = promptSync();
let a = prompt("Enter your balance: ");
let b = prompt("Enter your minimum balance: ");
let c = prompt("Enter your maximum balance: ");
let bal = parseInt(a);
let minbal = parseInt(b);
let maxbal = parseInt(c);
function cScore(bal, minbal, maxbal) {
    const totalBalance = bal + minbal + maxbal;
    if (totalBalance >= 0 && totalBalance <= 300) {
        if (totalBalance >= 250 && totalBalance <= 300) {
            return "A+";
        }
        else if (totalBalance >= 220 && totalBalance < 250) {
            return "B";
        }
        else if (totalBalance >= 180 && totalBalance < 220) {
            return "C";
        }
        else if (totalBalance >= 150 && totalBalance < 180) {
            return "D";
        }
        else {
            return "Low";
        }
    }
    else {
        return "Out of Range";
    }
}
console.log(cScore(bal, minbal, maxbal));
// console.log(cScore(50,50,100)); // to manually put values in function
