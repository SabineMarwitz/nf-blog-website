import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import type { BlogEntries, BlogEntry } from "../types/models";

const FILE_PATH = path.join(__dirname, "..", "data", "blog.json");
// ** Test
//const TEST_FILE_PATH = path.join(__dirname, "..", "data", "test.json");

export async function getAllBlogEntries(): Promise<BlogEntries> {
  try {
    const blogEntries = await readFile(FILE_PATH, { encoding: "utf-8" });

    if (blogEntries.length === 0) {
      return [];
    } else {
      return JSON.parse(blogEntries);
    }
  } catch (error) {
    return [];
  }
}

// add blog
export async function addBlogEntry(testEntry: BlogEntry) {
  try {
    const blogEntries = await getAllBlogEntries();
    blogEntries.push(testEntry);
    await writeFile(FILE_PATH, JSON.stringify(blogEntries));
    // ** Test
    // const data = await readFile(FILE_PATH, { encoding: "utf-8" });
    // console.log("Test: new data length ", data.length);
    // **
  } catch (err) {
    console.error("ERROR in addBlogEntry: ", err);
  }
}

// delete blog
export async function deleteBlogEntry(index: number) {
  try {
    const blogEntries = await getAllBlogEntries();
    if (blogEntries.length > 0) {
      blogEntries.splice(index, 1);
    }
    await writeFile(FILE_PATH, JSON.stringify(blogEntries));
    // ** Test
    // const data = await readFile(FILE_PATH, { encoding: "utf-8" });
    // console.log("Test: new data length ", data.length);
    // **
  } catch (err) {
    console.error("ERROR in deleteBlogEntry: ", err);
  }
}

// todo: update a blog
