var equal_pressed = 0;

var input_button = document.querySelectorAll(".input-button");

var input = document.getElementById("input");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var del = document.getElementById("del");

window.onload = () => {
  input.value = "";
};

input_button.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  var inp_val = input.value;
  try {
    var solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(3);
    }
  } catch (e) {
    alert("Hata: " + e);
    input.value = "";
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

del.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
