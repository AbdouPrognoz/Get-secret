// HINTS:

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));


app.get("/", async (req, res) => {
   try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    var body = result.data
    res.render("index.ejs", { secret : body.secret , user : body.username });
  } catch (error) {
    res.render("index.ejs", { secret:"failed to generate a secret ", user :"unknown" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


