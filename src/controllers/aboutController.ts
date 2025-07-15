import type { Request, Response } from "express";

export const aboutController = (req: Request, res: Response) => {
  res.render("../views/about.html", {
    title: "About Me",
  });
};
