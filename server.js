const app = require("express")();
const bodyparser = require("body-parser");

const PORT = 3000;

app.use(bodyparser.json());

app.listen(PORT, () => console.log("listening on port", PORT));

app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome!" });
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: "Welcome!" });
});

app.get("/fail", (req, res) => {
  res.status(500).json({ success: false, message: "Something went wrong!" });
});
