import type { Request, Response } from "express";
import { BlogEntries } from "../../types/models";
import { getAllBlogEntries, addBlogEntry } from "../../models/blogEntriesModel";

export const entriesListing = async (req: Request, res: Response) => {
  await addBlogEntry();
  // admin view should list all blog enttries
  const blogEntries = await getAllBlogEntries();
  console.log("hdsahakakdka");
  res.render("../views/admin/indexPage.html", {
    title: "Admin",
    blogEntries,
  });
};
