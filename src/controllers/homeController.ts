import type { Request, Response } from "express";
//import blogData from "../data/blog.json";
import { getAllBlogEntries } from "../models/blogEntriesModel";

/* todo add:
 * function transformBlogEntriesData () {
 * const titleAsSlug = slug(entry.title);
 * const datatime = dayjs.unix(entry,createdAt);
 * ...
 * */

export const homeController = async (req: Request, res: Response) => {
  const blogEntries = await getAllBlogEntries();
  // const transformBlogEntriesData(...)

  res.render("../views/index.html", {
    title: "Home",
    blogEntries,
  });
};
