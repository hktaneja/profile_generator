const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to hold the questions
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

// Variable to store the answers
const answers = [];

// Recursive function to ask the questions one by one
function askQuestion(index) {
  rl.question(questions[index] + ' ', (answer) => {
    answers.push(answer);

    if (index === questions.length - 1) {
      // All questions have been asked, log the answers and close the interface
      console.log('Thank you for your valuable feedback:');
      console.log('Name:', answers[0]);
      console.log('Activity:', answers[1]);
      console.log('Listening preference:', answers[2]);
      console.log('Favorite meal:', answers[3]);
      console.log('Favorite food for that meal:', answers[4]);
      console.log('Favorite sport:', answers[5]);
      console.log('Superpower:', answers[6]);

      rl.close();
    } else {
      // Ask the next question
      askQuestion(index + 1);
    }
  });
}

// Start asking the questions from index 0
askQuestion(0);