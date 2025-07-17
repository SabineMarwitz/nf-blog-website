import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";
import { transformBlogEntriesData } from "../utils/transformBlogData";
import { Console } from "console";

export const homeController = async (req: Request, res: Response) => {
  const blogEntries = await getAllBlogEntries();
  const entriesWithSlug = transformBlogEntriesData(blogEntries);

  res.render("../views/index.html", {
    title: "Home",
    entriesWithSlug,
  });
};
