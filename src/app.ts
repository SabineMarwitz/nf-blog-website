import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import nunjucks from "nunjucks";
//import blogData from "./data/blog.json";
import cors from "cors";
import { homeController } from "./controllers/homeController";
import { aboutController } from "./controllers/aboutController";
import { contactController } from "./controllers/contactController";
import { blogController } from "./controllers/blogController";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});

app.get("/", homeController);
app.get("/about", aboutController);
app.get("/contact", contactController);
app.get("/post", blogController);
// todo: use notFoundController

// start the web server
app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
