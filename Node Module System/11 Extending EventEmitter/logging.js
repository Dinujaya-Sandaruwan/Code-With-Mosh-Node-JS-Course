const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (prop) => {
	console.log(prop.data);
});

emitter.emit("message", { data: "Heshani I love you" });
