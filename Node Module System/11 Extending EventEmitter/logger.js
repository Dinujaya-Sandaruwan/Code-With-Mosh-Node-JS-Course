const EventEmitter = require("events");

// const emitter = new EventEmitter();

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
	log(msg) {
		// Send HTTP req
		console.log(msg);
		// Raise an event
		this.emit("messageLogged", { id: 1, url: "https://dinujaya.com" });
	}
}

module.exports = Logger;
