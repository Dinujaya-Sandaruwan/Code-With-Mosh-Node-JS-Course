const email = document.getElementById("email");

const fetchData = () => {
	const randNumber = Math.floor(Math.random() * 10);
	console.log(randNumber);
	fetch("https://jsonplaceholder.typicode.com/comments")
		.then((response) => response.json())
		.then((data) => {
			email.innerText = data[randNumber].email;
		})
		.catch((error) => console.error(error));
};
