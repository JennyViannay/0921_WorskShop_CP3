const cors = require("cors");
const express = require("express");
const morgan = require('morgan');
const setupRoutes = require("./routes/routing");

const PORT = process.env.PORT || 8000;
const app = express();


app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
}
module.exports = app;
