import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";
import { transformBlogEntriesData } from "../utils/transformBlogData";

//const blogEntries = await getAllBlogEntries();
//const entriesWithSlug = transformBlogEntriesData(blogEntries);

export const blogController = async (req: Request, res: Response) => {
  res.render("../views/post.html", {
    title: "Sample Post",
  });
};
