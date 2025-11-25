import express from "express";
import { homeController } from "../controllers/homeController";
import { aboutController } from "../controllers/aboutController";
import { contactController } from "../controllers/contactController";
import { getBlog, getDefaultBlog } from "../controllers/blogController";

const router = express.Router();

router
  .get("/", homeController)
  .get("/about", aboutController)
  .get("/post", getDefaultBlog)
  .get("/posts/:slug", getBlog)
  .get("/contact", contactController);

export default router;
