import { Autocomplete, TextField } from "@mui/material";
import { defaultTo, ifElse, isNil, pipe, when } from "ramda";
import { useGlobalContext } from "../../../shared/GlobalProvider.tsx";
import type { User } from "../../../shared/types.ts";
import { useGetUsers } from "../../../shared/useGetUsers.ts";
import { getUserByUsername, getUserNames } from "../lib/lib.ts";

export const FilterByUser = () => {
	const { setFilterSettings } = useGlobalContext();

	const users: User[] = useGetUsers();
	const userNames = getUserNames(users);

	const setFilterByUser = (user: User | null) => {
		setFilterSettings({ type: "setFilterByUser", payload: user });
	};

	const setFilterByUserOnUserFound = pipe(
		(username: string | null) => getUserByUsername(username,users),
		defaultTo(null),
		when(Boolean, setFilterByUser)
	);

	const updateFilterByUser = ifElse(
		isNil,
		() => setFilterByUser(null),
		setFilterByUserOnUserFound
	);

	// @ts-ignore
	const handleChange = (event, value) => {
		updateFilterByUser(value || null);
	};

	return (
		<div>
			<Autocomplete
				disablePortal
				options={userNames}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Username" />}
				onChange={handleChange}
			/>
		</div>
	);
};
