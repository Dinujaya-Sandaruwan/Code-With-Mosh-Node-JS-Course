const movies = [
	{
		_id: "24108",
		title: "Terminator",
		genre: { _id: "5662540", name: "Action" },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:28.809Z",
	},
	{
		_id: "37698",
		title: "The Dark Knight",
		genre: { _id: "1456768", name: "Drama" },
		numberInStock: 3,
		dailyRentalRate: 3.5,
		publishDate: "2011-07-18T11:54:26.404Z",
	},
	{
		_id: "98326",
		title: "The Lord of the Rings: The Fellowship of the Ring",
		genre: { _id: "7583967", name: "Adventure" },
		numberInStock: 8,
		dailyRentalRate: 2.0,
		publishDate: "2003-09-17T08:23:14.512Z",
	},
	{
		_id: "62387",
		title: "The Godfather",
		genre: { _id: "3675452", name: "Crime" },
		numberInStock: 4,
		dailyRentalRate: 3.0,
		publishDate: "1972-03-24T14:32:49.290Z",
	},
	{
		_id: "54673",
		title: "Inception",
		genre: { _id: "9876543", name: "Sci-Fi" },
		numberInStock: 5,
		dailyRentalRate: 3.5,
		publishDate: "2010-07-16T21:43:32.175Z",
	},
	{
		_id: "87459",
		title: "The Shawshank Redemption",
		genre: { _id: "2345789", name: "Drama" },
		numberInStock: 2,
		dailyRentalRate: 4.0,
		publishDate: "1994-09-23T16:08:11.973Z",
	},
	{
		_id: "24601",
		title: "Pulp Fiction",
		genre: { _id: "6754321", name: "Crime" },
		numberInStock: 7,
		dailyRentalRate: 2.5,
		publishDate: "1994-10-14T02:17:56.801Z",
	},
	{
		_id: "23147",
		title: "The Matrix",
		genre: { _id: "4536789", name: "Sci-Fi" },
		numberInStock: 9,
		dailyRentalRate: 2.0,
		publishDate: "1999-03-31T08:43:22.008Z",
	},
];

export function getMovies() {
	return movies;
}

export function getMovie(id) {
	return movies.find((m) => m._id === id);
}
