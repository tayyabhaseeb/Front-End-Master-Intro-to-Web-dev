console.log("Hell0's");
console.log("Don't do that");

const firstName = "Tayyab";
const lastName = "Haseeb";
console.log(`My name is ${firstName} ${lastName}`);

let isTayyabCool = true;
console.log(isTayyabCool);

let skyIsBlue = false;

// The reason why === is necessary
if (2 + "2" == 22) {
  console.log("Sky is blue");
} else {
  console.log("Sky is not blue but red");
}

/////////////////////////////

const friendsAtParty = 10;

if (friendsAtParty === 0) {
  console.log("You can have some nachoes for yourself");
} else if (friendsAtParty <= 4) {
  console.log("A little bit fun for yourself");
} else {
  console.log("Part Hard & turn on the music");
}

////////////////////////////////
let friendsAtYourParty = 0;

for (let i = 0; i < 10; i++) {
  console.log(friendsAtYourParty);
  friendsAtYourParty++;
}

console.log(friendsAtParty);

///////////////////////////////

const timesToRepeat = 15;
let character = "🐶";

console.log(character);

for (let i = 0; i < timesToRepeat; i++) {
  character += "🐶";
}
console.log(character);

////////////////////////////////////

const city = "Faisalabad";
const country = "Pakistan";

console.log(`I am from ${city} , ${country}`);

// //////////////////////////

const calculateArea = (length, width) => length * width;
console.log(calculateArea(2, 2));
console.log(calculateArea(234, 23));

const chirp = (voice) => console.log(`${voice} , ${voice}`);
chirp("woww", "woww");
chirp("mewo", "meow");

/////////////////////////////////////////

const sentence = (city) => {
  const names = "Tayyab";
  console.log(`${names} lives in ${city}`);
};

sentence("Faisalabad");
// console.log(names);

///////////////////////////////////

let F;

if (1 + 1 === 2) {
  F = "something else";
}

console.log(F);

/////////////////////////////////

const description =
  "Tayyab is a british citizen but loved to live in Faisalabad";
console.log(description.includes("british"));
console.log(description.includes("canada"));
console.log(description.charAt(5));
// console.log(Date.now());

///////////////////////////////////////////

// OBJECTS

const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};

const propertyName = "city";

console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; prefer using the other one

//////////////////////////////////////////////////////////////////////////////////
console.log(person[propertyName]); // sometimes you have to do it in this way

//////

// console.log(console);

/////////////////////////////////////////////////////////////////

// context

const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
  },
};

const pullOut = me.getAddress.bind(me); // .bind()
console.log(pullOut());

// ARRAYS

// DOM

const arr = document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    console.log(event.target.innerText);
  });

// LOOP OVER STRINGS

const str = "tayyab";

for (let i = 0; i < str.length; i++) {
  const element = str[i];
  console.log(element);
}

////////////////////////////////////////

// Asynchroneous JS

const myName = {
  name: "Tayyab",
  age: 23,
};

const myNamejh = JSON.stringify(myName);
console.log(myNamejh);
