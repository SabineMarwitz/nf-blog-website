import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { transformBlogEntriesData } from "../utils/transformBlogData";
import type { BlogEntries, BlogEntry } from "../types/models";

const FILE_PATH = path.join(__dirname, "..", "data", "blog.json");
// ** Test
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

// delete blog
export async function deleteBlogEntry(title: string) {
  try {
    const blogEntries = await getAllBlogEntries();
    const entriesWithSlug = transformBlogEntriesData(blogEntries);

    if (entriesWithSlug.length > 0) {
      const filteredEntries = entriesWithSlug.filter(
        (entry) => entry.slug != title,
      );
      await writeFile(FILE_PATH, JSON.stringify(filteredEntries, null, 2));
    }
  } catch (err) {
    console.error("ERROR in deleteBlogEntry: ", err);
  }
}

// tbd: add blog
export async function addBlogEntry(testEntry: BlogEntry) {
  try {
    const blogEntries = await getAllBlogEntries();
    blogEntries.push(testEntry);
    await writeFile(TEST_FILE_PATH, JSON.stringify(blogEntries, null, 2));
    // ** Test
    //const data = await readFile(TEST_FILE_PATH, { encoding: "utf-8" });
    //console.log("Test: new data length ", data.length);
    // **
  } catch (err) {
    console.error("ERROR in addBlogEntry: ", err);
  }
}
