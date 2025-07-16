import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import nunjucks from "nunjucks";
import publicRoutes from "./routes/publicRoutes";

import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

/** Routes */
app.use(publicRoutes);
// todo: .use(notFoundController)

// start the web server
app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
