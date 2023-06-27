const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team  = players;

let team1 = [];
while(let val of players){
	team1.push(val);
}

let cap1 = [];
for(let value of person){
	cap1.push(value);
}

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
