import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import nunjucks from "nunjucks";
import blogData from "./data/blog.json";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});

app.get("/", (req: Request, res: Response) => {
  res.render("index.html", {
    title: "Home",
    blogData,
  });
});

app.get("/about", (req: Request, res: Response) => {
  res.render("about.html", {
    title: "About",
  });
});

app.get("/post", (req: Request, res: Response) => {
  res.render("post.html", {
    title: "Sample Post",
  });
});

app.get("/contact", (req: Request, res: Response) => {
  res.render("contact.html", {
    title: "Contact",
  });
});

// start the web server
app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
