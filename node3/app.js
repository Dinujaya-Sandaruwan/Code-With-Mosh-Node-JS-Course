var cowsay = require("cowsay");

function get_cows(error, cow_names) {
	if (error) {
		console.log(error);
	} else if (cow_names) {
		console.log(`First Cow Name is: ${cow_names[0]}`);
	}
}

cowsay.list(get_cows);
