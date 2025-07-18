import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import nunjucks from "nunjucks";
import publicRoutes from "./routes/publicRoutes";
import adminRoutes from "./routes/adminRoutes";
import { connectDB, closeDB } from "./db/database";

import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

connectDB()
  .then(() => {
    /** Routes */
    app.use(publicRoutes).use("/admin", adminRoutes);
    // todo: .use(notFoundController)

    // start the web server
    app.listen(port, () => {
      console.log(`Example app listening on port${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Failed to start Database server");
  });

process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing database connection...");
  await closeDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Closing database connection...");
  await closeDB();
  process.exit(0);
});
