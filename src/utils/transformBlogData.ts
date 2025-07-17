import dayjs from "dayjs";
import slug from "slug";
import { BlogEntries } from "../types/models";
import { v4 as uuid } from "uuid";

export function transformBlogEntriesData(blogEntries: BlogEntries) {
  const entriesWithSlug = blogEntries.map((entry) => {
    const titleAsSlug = slug(entry.title);
    const datatime = dayjs.unix(entry.createdAt);
    const id: string = uuid();

    return {
      ...entry,
      createdAt: datatime.format("MMMM DD, YYYY"),
      slug: entry.slug || titleAsSlug,
      id: entry.id || id,
    };
  });

  return entriesWithSlug;
}
