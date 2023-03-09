const os = require("node:os");

console.log(`You have ${os.freemem()} free memory of ${os.totalmem()}`);
