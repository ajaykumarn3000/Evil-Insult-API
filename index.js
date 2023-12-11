import express from "express";
import axios from "axios";
const port = 3000;
const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/comeback", async (req, res) => {
  try {
    const response = await axios.get(url);
    const result = response.data;
    res.render("index.ejs", { data: result.insult });
  } catch (error) {
    console.log("Error: " + response);
    res.render("index.ejs", {
      data: "An unexpected error occured",
    });
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
