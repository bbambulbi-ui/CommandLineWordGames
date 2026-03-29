// Get player move from process.argv[2]
const playerMove = process.argv[2];

// List of valid moves
const choices = ['rock', 'paper', 'scissors'];

// Validation: Check if the user provided a correct move
if (!playerMove || !choices.includes(playerMove.toLowerCase())) {
    console.log("Error: Please provide a valid move: rock, paper, or scissors");
    process.exit();
}

// Generate a random move for the computer
const randomIndex = Math.floor(Math.random() * 3);
const computerMove = choices[randomIndex];

const userChoice = playerMove.toLowerCase();

console.log(`You chose: ${userChoice}`);
console.log(`Computer chose: ${computerMove}`);

// Determine the result
if (userChoice === computerMove) {
    console.log("Result: It's a draw!");
} else if (
    (userChoice === 'rock' && computerMove === 'scissors') ||
    (userChoice === 'paper' && computerMove === 'rock') ||
    (userChoice === 'scissors' && computerMove === 'paper')
) {
    console.log("Result: You win!");
} else {
    console.log("Result: You lose!");
}