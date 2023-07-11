const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable response: ${answer}`);

  rl.close();
});

r2.question('What\'s an activity you like doing?', (answer) => {
console.log(`Thank you for your valuable response: ${answer}`);

 r2.close();
});
