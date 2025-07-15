import type { Request, Response } from "express";

export const aboutController = (req: Request, res: Response) => {
  res.render("../templates/about.html", {
    title: "About Me",
  });
};
