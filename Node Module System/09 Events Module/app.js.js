const EventEmitter = require("events");

const emitter = new EventEmitter();

// Regester a listner
emitter.on("messageLogged", function () {
	console.log("listner Called");
});

// Raise an event
emitter.emit("messageLogged");
