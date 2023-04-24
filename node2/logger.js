const EventEmiter = require("events");

let url = "https://exmple.com/api/users";

class Logger extends EventEmiter {
	// Methord
	log = (message) => {
		console.log(message);

		// // Making a noise | Raise an event
		this.emit("messageLogged", { id: 1, url: "dinujaya.com" });
	};
}

module.exports = Logger;
// module.exports.url = url;
