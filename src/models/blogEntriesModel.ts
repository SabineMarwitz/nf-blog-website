import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import type { BlogEntries } from "../types/models";

const FILE_PATH = path.join(__dirname, "..", "data", "blog.json");
const TEST_FILE_PATH = path.join(__dirname, "..", "data", "test.json");

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

// todo: add models to add, update, delete data

// add blog
export async function addBlogEntry() {
  try {
    const blogEntries = await readFile(FILE_PATH, { encoding: "utf-8" });
    // todo add a blog before write back
    // ...
    await writeFile(TEST_FILE_PATH, blogEntries);
    // Test
    const data = await readFile(TEST_FILE_PATH, { encoding: "utf-8" });
    console.log(data.length);
  } catch (err) {
    console.error("ERROR in addBlogEntry: ", err);
  }
}
