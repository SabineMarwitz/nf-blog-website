import type { Request, Response } from "express";

/* todo add:
 * function transformBlogEntriesData () {
 * const titleAsSlug = slug(entry.title);
 * const datatime = dayjs.unix(entry,createdAt);
 * ...
 * */

export const blogController = (req: Request, res: Response) => {
  res.render("../views/post.html", {
    title: "Sample Post",
  });
};
