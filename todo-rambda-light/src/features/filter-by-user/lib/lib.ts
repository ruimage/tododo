import {find, pluck, propEq} from "rambda";
import type { User } from "../../../shared/types.ts";

export const getUserNames = pluck('username')

export const getUserByUsername = (username: string|null, users: User[]):User|undefined => {

    if(!username) return undefined
    if(!users) return undefined

    return find(propEq(username,'username' ), users)
}
