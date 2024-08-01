import { useEffect, useState } from "react";
import { Todo } from "../../../shared/types.ts";

export const useGetTodoData = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((data) => {
				setTodos(data);
			});
	}, []);

	return todos;
};
