import type { Request, Response } from "express";
import { getBlogBySlug } from "../models/blogEntriesModel";

export const getDefaultBlog = async (req: Request, res: Response) => {
  res.render("../views/post.html", {
    title: "Sample Post",
  });
};

export const getBlog = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const post = await getBlogBySlug(slug);
  if (post) {
    res.render("../views/singlepost.html", {
      title: post.title,
      teaser: post.teaser,
      image: `/assets/postimages/${post.image}`,
      author: post.author,
      createdAt: post.createdAt,
      content: post.content,
    });
  }
};
