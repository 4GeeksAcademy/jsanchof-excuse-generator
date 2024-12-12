/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getExcuse() {
  let excuse = "";
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = [" ate", " peed", " crushed", " broke"];
  let what = [" my homework", " my phone", " the car"];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];

  excuse += who[Math.floor(Math.random() * who.length)];
  excuse += action[Math.floor(Math.random() * action.length)];
  excuse += what[Math.floor(Math.random() * what.length)];
  excuse += when[Math.floor(Math.random() * when.length)];

  document.getElementById("myExcuse").innerHTML = excuse;

  console.log(excuse);
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  getExcuse();
};
