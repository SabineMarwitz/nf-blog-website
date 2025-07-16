import type { Request, Response } from "express";
import { BlogEntries } from "../../types/models";
import { getAllBlogEntries } from "../../models/blogEntriesModel";

export const entriesListing = async (req: Request, res: Response) => {
  // admin view should list all blog enttries
  const blogEntries = await getAllBlogEntries();
  console.log(blogEntries.length);
  res.render("../views/admin/indexPage.html", {
    title: "Admin",
    blogEntries,
  });
};
