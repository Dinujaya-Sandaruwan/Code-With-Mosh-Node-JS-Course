const express = require("express");
const app = express();
require("dotenv").config();
let morgan = require("morgan");

console.log(process.env.RUN);

if (process.env.RUN === "dev") {
	app.use(morgan("tiny"));
}

const courses = [
	{ id: 0, name: "Course 00" },
	{ id: 1, name: "Course 01" },
	{ id: 2, name: "Course 02" },
];

app.get("/", (req, res) => {
	res.send({ name: "Dinujaya", age: "19" });
});
app.get("/api/courses", (req, res) => {
	res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
	const course = courses.find(
		(course) => course.id === parseInt(req.params.id)
	);

	if (!course) {
		res.status(404).send("Course Not Found");
	} else {
		res.send(course);
	}
});

app.use(express.json());

app.post("/api/courses", (req, res) => {
	const course = {
		id: courses.length + 1,
		name: req.body.name,
	};
	courses.push(course);

	// ආපහු දාපු එක යවන්න
	// res.send(course);
	res.send(`Course Added ${req.body.name}`);
});

// PUT

app.put("/api/courses/:id", (req, res) => {
	const course = courses.find(
		(course) => course.id === parseInt(req.params.id)
	);

	if (!course) {
		return res.status(404).send("Course Not Found");
	}

	// Body එකේ තියන නමට Update වෙනවා
	course.name = req.body.name;
	res.send(course);
});

// Delete

app.delete("/api/courses/:id", (req, res) => {
	const course = courses.find(
		(course) => course.id === parseInt(req.params.id)
	);

	if (!course) {
		return res.status(404).send("Course Not Found");
	}

	const index = courses.indexOf(course);
	courses.splice(index, 1);

	// ආපහු දාපු එක යවන්න
	res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on Port ${port}...`);
	console.log(`http://localhost:${port}/`);
});
