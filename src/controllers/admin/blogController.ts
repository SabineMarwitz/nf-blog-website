import type { Request, Response } from "express";
import { BlogEntries, BlogEntry } from "../../types/models";
import { transformBlogEntriesData } from "../../utils/transformBlogData";
import {
  getAllBlogEntries,
  addBlogEntry,
  deleteBlogEntry,
} from "../../models/blogEntriesModel";

export const entriesListing = async (req: Request, res: Response) => {
  // admin view should list all blog enttries
  const blogEntries = await getAllBlogEntries();
  const entriesWithSlug = transformBlogEntriesData(blogEntries);

  res.render("../views/admin/indexPage.html", {
    title: "Admin",
    entriesWithSlug,
  });
};

export const deleteBlog = async (req: Request, res: Response) => {
  await deleteBlogEntry(req.params.id);
  // admin view should list remaining blog entries

  const blogEntries = await getAllBlogEntries();
  const entriesWithSlug = transformBlogEntriesData(blogEntries);

  res.render("../views/admin/indexPage.html", {
    title: "Admin",
    entriesWithSlug,
  });
};

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
