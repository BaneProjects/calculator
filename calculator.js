const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
const screen = document.getElementById("calc_screen");
const numberBtn = document.querySelectorAll(".num");
const deleteBtn = document.getElementById("deleteBtn");
const operatinBtn = document.querySelectorAll(".operator");
var variable = ["", ""];
var op = "";
var id = 0;

function reset() {
  variable = ["", ""];
  op = "";
  id = 0;
  console.log(variable);
  updateScreen(variable[id]);
}
function updateScreen() {
  if (variable[id] === "") {
    console.log(variable);
    screen.innerHTML = "0";
  } else {
    screen.innerHTML = parseInt(variable[id]).toLocaleString("en-US");
    console.log(variable);
  }
}
function del() {
  if (variable[id].length > 0) {
    variable[id] = variable[id].substr(0, variable[id].length - 1);
    updateScreen();
  }
}
function calculate() {
  var res = eval(variable[0] + operator + variable[1]);
  operator = "";
  variable[1] = "";
  variable[0] = res;
  id = 0;
  updateScreen();
  variable[0] = "";
}
//EVENTS
resetBtn.addEventListener("click", reset);
numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const regEx = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (regEx.test(variable[id] + btn.innerText)) {
      variable[id] += btn.innerText;
      console.log(variable);
      updateScreen();
    }
  });
});
deleteBtn.addEventListener("click", del);

operatinBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (variable[0] === "" && screen.innerText !== "0") {
      variable[0] = screen.innerText;
      //id = 0;
    }

    id++;
    switch (button.innerText) {
      case "+":
      case "-":
      case "/":
        operator = button.innerText;
        break;
      case "x":
        operator = "*";
    }
  });
});
equalBtn.addEventListener("click", calculate);
