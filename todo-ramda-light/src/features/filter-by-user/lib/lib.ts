import * as R from "ramda";
import type { User } from "../../../shared/types.ts";

export const getUserNames = R.map<User, string>(R.prop("username"));

export const getUserByUsername: (
	username: string,
	users: User[],
) => User | undefined = R.curry((username: string, users: User[]) => {
	const eqUsername = R.propEq(username, "username");
	return R.find(eqUsername, users);
});
