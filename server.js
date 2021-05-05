const express = require("express");

// express app declaration
const PORT = process.env.PORT || 3001;
const app = express();

// epress middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// api and html routes
// app.use("/", htmlRoutes);

app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});
