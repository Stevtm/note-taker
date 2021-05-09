const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
	// response is array of objects from db.json
	res.json(notes);
});

router.post("/notes", (req, res) => {
	// set id based on what the next index of the array will be (rethink this because notes can be deleted)
	req.body.id = notes.length + 1;

	// add new note object to the notes array
	notes.push(req.body);

	// update db.json with the most recent notes array
	fs.writeFileSync(
		path.join(__dirname, "../../db/db.json"),
		JSON.stringify({ notes: notes })
	);

	res.json(req.body);
});

module.exports = router;
