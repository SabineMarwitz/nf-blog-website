import type { Request, Response } from "express";
import blogData from "../data/blog.json";

export const homeController = (req: Request, res: Response) => {
  res.render("../views/index.html", {
    title: "Home",
    blogData,
  });
};
