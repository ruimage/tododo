import {find, pluck, propEq} from "ramda";
import type { User } from "../../../shared/types.ts";

export const getUserNames = pluck('username')

export const getUserByUsername = (username: string|null, users: User[]):User|undefined => find(propEq(username, "username"), users)
