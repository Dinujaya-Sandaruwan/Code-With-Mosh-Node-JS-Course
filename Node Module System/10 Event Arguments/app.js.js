const EventEmitter = require("events");

const emitter = new EventEmitter();

// Regester a listner
emitter.on("messageLogged", (eventArg) => {
	console.log("listner Called", eventArg);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "https://dinujaya.com" });
