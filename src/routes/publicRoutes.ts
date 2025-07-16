import express from "express";
import { homeController } from "../controllers/homeController";
import { aboutController } from "../controllers/aboutController";
import { contactController } from "../controllers/contactController";
import { blogController } from "../controllers/blogController";

const router = express.Router();

router
  .get("/", homeController)
  .get("/about", aboutController)
  .get("/contact", contactController)
  .get("/post", blogController);

export default router;
