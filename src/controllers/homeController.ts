import type { Request, Response } from "express";
import blogData from "../data/blog.json";

export const homeController = (req: Request, res: Response) => {
  res.render("../templates/index.html", {
    title: "Home",
    blogData,
  });
};
