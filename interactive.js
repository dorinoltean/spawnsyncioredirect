var readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
    
  rl.write("Write a message and new line.\n")

  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    rl.close();
  });
  