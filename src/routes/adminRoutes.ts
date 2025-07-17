import express from "express";
import {
  entriesListing,
  deleteBlog,
} from "../controllers/admin/blogController";

const router = express.Router();

router.get("/", entriesListing);
router.get("/delete/:id", deleteBlog);

export default router;
