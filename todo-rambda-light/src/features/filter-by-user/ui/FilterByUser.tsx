import { Autocomplete, TextField } from "@mui/material";
import {ifElse, isNil, pipe, tap, when} from "rambda";
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

	const getUserByUsernameN = (username: string) =>
		getUserByUsername(username, users) as User | undefined;

	const setFilterByUserOnUserFound = pipe(
		getUserByUsernameN,
		user => user ?? null,
		when(Boolean, setFilterByUser)
	);

	const updateFilterByUser = ifElse(
		isNil,
		() => setFilterByUser(null),
		setFilterByUserOnUserFound
	);

	// Корректная типизация обработчика события handleChange
	const handleChange = (
		event: React.SyntheticEvent<Element, Event>,
		value: string | null
	) => {
		updateFilterByUser(value ?? '');
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
