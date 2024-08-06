import { Autocomplete, TextField } from "@mui/material";
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

	const updateFilterByUser = (
		users: User[],
		userName: User["username"] | null,
	) => {
		if (userName === null) {
			setFilterByUser(null);
			return;
		}

		const currentUser = getUserByUsername(users, userName);
		if (!currentUser) return;

		setFilterByUser(currentUser);
	};

	// @ts-ignore
	const handleChange = (event, value) => {
		updateFilterByUser(users, value || null);
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
