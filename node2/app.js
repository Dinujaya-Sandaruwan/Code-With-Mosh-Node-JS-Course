const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hellow World");
		res.end();
	}

	if (req.url === "/api/users") {
		res.write(JSON.stringify({ id: 1, name: "Hasitha Sandeepa", age: 22 }));
		res.end();
	}
});

server.listen(3000);

console.log("Listening on port 3000...");
