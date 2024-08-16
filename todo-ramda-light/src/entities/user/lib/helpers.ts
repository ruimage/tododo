import {find, propEq} from "ramda";
import type { User } from "../../../shared/types.ts";

export const getUserById = (users: User[], id: number): User | undefined => find(propEq(id,'id'),users)
