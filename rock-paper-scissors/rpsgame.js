let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number                        

//Conditional logic goes here to determine the computers selection

if (computerSelection < 0.34) {
  computerSelection = "rock";
} else if (computerSelection <= 0.67) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
  };

//<--Code goes here-->

let compare = function(selection1, selection2) {
  if(selection1 === selection2) {
    return "it's a 👔 bud ❕"; 
} 
// fresh block ...
  else if (selection1 === "rock") {
   if (selection2 === "scissors") {
    return "🗻 wins❕"
  }
    else if (selection2 === "paper") {
      return "🧻 wins❕";
    }
}
// fresh block ...
  else if (selection1 === "paper") {
    if (selection2 === "scissors") {
      return "✂ win❕"
    }
    else if (selection2 === "rock") {
      return "🧻 wins❕";
    }
  }
// fresh block ...
  else if (selection1 === "scissors") {
    if (selection2 === "paper") {
      return "✂ win❕"
    }
    else if (selection2 === "rock") {
      return "🗻 wins❕";
    }
  };
//Function to compare the userSelection and the computerSelection to determine the winner    
}
console.log(compare(userSelection,computerSelection)); //call the function to compare and display result
