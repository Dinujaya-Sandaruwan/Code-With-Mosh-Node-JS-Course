const randNumber = Math.floor(Math.random() * 10);
console.log(randNumber);

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((data) => console.log(data[randNumber].name))
	.catch((error) => console.error(error));
