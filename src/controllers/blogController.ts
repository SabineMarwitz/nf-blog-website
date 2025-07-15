import type { Request, Response } from "express";

export const blogController = (req: Request, res: Response) => {
  res.render("../templates/post.html", {
    title: "Sample Post",
  });
};
