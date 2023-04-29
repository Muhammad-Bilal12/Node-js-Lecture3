const express = require("express");
const body_parser = require("body-parser");
const form = require("./routes/form");
const path = require("path");

const app = express();
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use(express.static(path.join(process.cwd(), "public")));

// 1st middleware
app.use((req, res, next) => {
  req.data = "Ishaq";
  next(); //to call next middleware
});

// 2nd middleware
app.use("/form", form);

app.listen(3000);
