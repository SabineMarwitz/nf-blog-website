import type { Request, Response } from "express";
import { BlogEntries, BlogEntry } from "../../types/models";
import {
  getAllBlogEntries,
  addBlogEntry,
  deleteBlogEntry,
} from "../../models/blogEntriesModel";

/* ******************
 * only for testing *
 * ******************/
const testEntry: BlogEntry = {
  title: "New Blog",
  image: "sailing.jpg",
  author: "Paul",
  createdAt: 1743120000,
  teaser: "This is a test for adding a block",
  content: "<p>Test function addBlogEntry </p>",
};

export const entriesListing = async (req: Request, res: Response) => {
  // only for testing
  // await addBlogEntry(testEntry);
  // await deleteBlogEntry(3);

  // admin view should list all blog enttries
  const blogEntries = await getAllBlogEntries();
  res.render("../views/admin/indexPage.html", {
    title: "Admin",
    blogEntries,
  });
};
