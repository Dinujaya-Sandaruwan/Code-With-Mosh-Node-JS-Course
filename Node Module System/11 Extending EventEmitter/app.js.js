const EventEmitter = require("events");

// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

// Regester a listner
logger.on("messageLogged", (eventArg) => {
	console.log("listner Called", eventArg);
});

logger.log("message");
