import { List, ListItem } from "@mui/material";
import { type Todo, TodoRow, useGetTodoData } from "../../entities/todo";
import { UserTodoPresentatation, getUserById } from "../../entities/user";
import { ChangeTodoStatus } from "../../features/change-todo-status";
import { useGlobalContext } from "../../shared/GlobalProvider.tsx";
import type { User } from "../../shared/types.ts";
import { useGetUsers } from "../../shared/useGetUsers.ts";
import { applyFiltersOnTodos } from "./lib.ts";

export const TodoList = () => {
	const { filterSettings } = useGlobalContext();

	const todos: Todo[] = useGetTodoData();
	const users: User[] = useGetUsers();

	const todosData = applyFiltersOnTodos(todos, filterSettings);

	return (
		<List>
			{todosData.map((todo: Todo) => {
				return (
					<ListItem key={todo.id}>
						<TodoRow
							title={todo.title}
							completed={todo.completed}
							activeSlotsStart={[
								<ChangeTodoStatus
									key={0}
									id={todo.id}
									completed={todo.completed}
								/>,
							]}
							activeSlotsEnd={[
								<UserTodoPresentatation
									key={0}
									user={getUserById(users, todo.userId)}
								/>,
							]}
						/>
					</ListItem>
				);
			})}
		</List>
	);
};
