import { Category } from "./category";

export interface Post {
  id?: number,
  title?: string,
  image?: string,
  summary?: string,
  content?: string,
  readingTime?: number,
  categories?: Category[],
  postedAt?: Date,
  enumPostPermission?: string
}
