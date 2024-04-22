'use strict';
import { encoded, translations } from './data.js'

console.log("Let's rock");
console.log(encoded, translations);

let uniqueID = new Set();
const decoded = function () {
    for (let key in translations) {
        encoded.forEach(el => {
            for (let i in el) {
                if (el[i] === key) {
                    el[i] = translations[key];
                    uniqueID.add(key);
                }
            }
        });
    }
    return console.log(encoded, uniqueID);
}

decoded();
