import type { User } from "../../../shared/types.ts";

export const getUserNames = (users: User[]) => {
	return users.map((user: User) => {
		return user.username;
	});
};
export const getUserByUsername = (
	users: User[],
	username: string,
): User | null => {
	return users.find((user: User) => user.username === username) || null;
};
