import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import type { BlogEntries, BlogEntry } from "../types/models";
import { getDB } from "../db/database";

const FILE_PATH = path.join(__dirname, "..", "data", "blog.json");

export async function getAllBlogEntries(): Promise<BlogEntries> {
  const db = getDB();

  return new Promise((resolve, reject) => {
    db.all<BlogEntry>(
      `SELECT * FROM blog_entries`,
      [],
      (error: Error | null, rowData: BlogEntries) => {
        if (error) {
          reject(error);
        } else {
          resolve(rowData);
        }
      },
    );
  });
}

export async function deleteBlogEntry(id: number) {
  const db = getDB();

  const stmt = "DELETE from blog_entries where id = " + id;

  return new Promise((resolve, reject): void => {
    console.log(stmt);
    db.run(stmt, [], (error: Error | null) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
}

// tbd: add blog
export async function addBlogEntry(testEntry: BlogEntry) {
  try {
    const blogEntries = await getAllBlogEntries();
    blogEntries.push(testEntry);
    await writeFile(FILE_PATH, JSON.stringify(blogEntries, null, 2));
  } catch (err) {
    console.error("ERROR in addBlogEntry: ", err);
  }
}
