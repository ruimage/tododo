import type {User} from "../../../shared/types.ts";

export const getUserById = (users: User[], id: number): User | undefined => {
  return users.find((user) => user.id === id);
};
