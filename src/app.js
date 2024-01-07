/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
}; */

let array1 = ["the", "our"];
let array2 = ["great", "big"];
let array3 = ["jogger", "racoon"];
let todasLasCombinaciones = [];
for (let elemento1 of array1) {
  for (let elemento2 of array2) {
    for (let elemento3 of array3) {
      todasLasCombinaciones.push(elemento1 + elemento2 + elemento3 + ".com");
    }
  }
}
console.log(todasLasCombinaciones);
