let money = 100;
let goal = 200;
while (money > 0 && money < goal){
  if (Math.random() >= 0.5) {
    money++;
  } else {
    money--;
  }
}

if (money === goal) {
  console.log("Gambler reached the goal!");
} else {
  console.log("Gambler went broke!");
}
