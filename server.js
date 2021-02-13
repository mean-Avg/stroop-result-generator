const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const emailresult = require("./emailresult.js");
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/submitParticipantData", (req, res) => {
  res.send("ok");
});

app.post("/requestResults", (req, res) => {
  //   emailresult(req);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
