let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let valueToString = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendList(manjunatha) {
  let valueContainerEl = document.createElement("div");
  valueContainerEl.classList.add("value-container");
  jsonContainerEl.appendChild(valueContainerEl);

  let valueEl = document.createElement("span");
  valueEl.classList.add("value");
  valueEl.textContent = manjunatha;
  jsonContainerEl.appendChild(valueEl);
}

function stringfyValued(value) {
  let manjunatha = JSON.stringify(value);
  createAndAppendList(manjunatha);
}

for (let value of valueToString) {
  stringfyValued(value);
}
