import { useEffect, useState } from "react";
import type { User } from "./types.ts";

export const useGetUsers = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	return users;
};
