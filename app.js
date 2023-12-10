import express from "express";
import axios from "axios";
const port = 3000;
const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

const app = express();
app.use(express.static("public"));

const wallpaperList = [
  "https://wallpaperaccess.com/full/432699.jpg",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100",
  "https://wallpaperaccess.com/full/432767.jpg",
  "https://wallpapercave.com/wp/wp2915636.jpg",
];

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
