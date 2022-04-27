const yargs = require("yargs");

const { connection, client } = require("./db/connection.js");
const {
	addMovie,
	deleteMovie,
	updateMovie,
	listMovies,
} = require("./utils/index.js");

const app = async (yargsObj, updateObj) => {
	const collection = await connection();
	if (yargsObj.add) {
		await addMovie(collection, {
			title: yargsObj.title,
			actor: yargsObj.actor,
		});
		console.log("success added new doc to db");
	} else if (yargsObj.delete) {
		await deleteMovie(collection, {
			title: yargsObj.title,
			actor: yargsObj.actor,
		});
	} else if (yargsObj.update) {
		let updateObj = yargsObj;
		await updateMovie(
			collection,
			{
				title: yargsObj.title,
			},
			{
				$set: {
					actor: updateObj.actor,
				},
			}
		);
	} else if (yargsObj.list) {
		await listMovies(collection);
	} else {
		console.log("incorrect command");
	}
	await client.close();
};

app(yargs.argv);
