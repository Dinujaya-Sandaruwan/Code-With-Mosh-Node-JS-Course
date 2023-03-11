const { response } = require("express");
const Joi = require("joi");
const express = require("express");

const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: "course 01" },
	{ id: 2, name: "course 02" },
	{ id: 3, name: "course 03" },
];

app.get("/", (req, res) => {
	res.send("Hello Heshani");
});

app.get("/api/courses", (req, res) => {
	res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
	const course = courses.find((c) => c.id === parseInt(req.params.id));
	if (!course) {
		return res.status(404).send("The course with given ID not found");
	} else {
		res.send(course);
	}
});

app.post("/api/courses", (req, res) => {
	const { error } = validateCourse(req);
	if (error) {
		// 400 Bad request
		return res.status(400).send(error.details[0].message);
	}
	const course = {
		id: courses.length + 1,
		name: req.body.name,
	};

	courses.push(course);
	res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
	// Lookup the Course
	// If not exiciting, return 404
	const course = courses.find((c) => c.id === parseInt(req.params.id));
	if (!course) {
		return res.status(404).send("The course with given ID not found");
	}
	// Validate
	// If invalid, return 400 - bad request
	const { error } = validateCourse(req);
	if (error) {
		// 400 Bad request
		res.status(400).send(error.details[0].message);
		return;
	}

	// Update Course
	course.name = req.body.name;
	// Return the updated course
	res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
	const course = courses.find((c) => c.id === parseInt(req.params.id));
	if (!course) {
		return res.status(404).send("The course with given ID not found");
	}

	// Delete
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	res.send(courses);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required(),
	};

	return (result = Joi.validate(course.body, schema));
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listning on port ${port}...`));
