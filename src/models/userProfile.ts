import { User } from "./user";

export interface UserProfile {
  id?: string,
  avatar?: string,
  firstName?: string,
  lastName?: string,
  bio?: string,

  userId: string,
  // user: User[]
}
