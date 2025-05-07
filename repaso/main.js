// alerts
// alert("Hi Im Albert");

// variables
let name = "Albert";

//constants
const height = 186;

//Show in console
console.log(name);
console.log(height);

//Concatenation
let concatenation = name + " " + height;

// Selection of DOM

let data = document.querySelector("#datos");
datos.innerHTML = `
  <h1>I'm the data box</h1>
  <h2>My name is ${name}</h2>
`;

// conditions
if (height >= 185) {
  datos.innerHTML += "<h1>You are tall</h1>";
}

// Bucles
for (let year = 2000; year <= 2023; year++) {
  datos.innerHTML += "<h2>We are in the year: " + year + "</h2>";
}

// Arrays
let names = ["Albert", "Paula", "Lucas", "Emma"];
let divNames = document.querySelector("#names");
// divNames.innerHTML = names[1];
divNames.innerHTML = "<h1>List of names</h1>";
names.forEach((name) => {
  divNames.innerHTML += "<li>" + name + "</li>";
});

//Funtions
const myInfo = (name, height) => {
  return name + " " + height;
};

// Objects
let car = {
  model: "Mercedes",
  max: 500,
  year: 2020,
  showData() {
    console.log(this.model, this.max, this.year);
  },
};

let objectBox = document.querySelector("#object");
objectBox.innerHTML = "<h1>" + car.model + "</h1>";
car.showData();

// promeses

let sayHi = new Promise((res, rej) => {
  setTimeout(() => {
    let greeting = "Hi everyones";
    if (greeting) {
      res(greeting);
    } else {
      rej("There is not greeting");
    }
  }, 2000);
});
sayHi
  .then((result) => {
    alert(result);
  })
  .catch((err) => {
    alert(err);
  });
