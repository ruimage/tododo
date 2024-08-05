import { List, ListItem } from "@mui/material";
import { type Todo, TodoRow, useGetTodoData } from "../../entities/todo";
import { UserTodoPresentatation } from "../../entities/user";
import { getUserById } from "../../entities/user";
import { ChangeTodoStatus } from "../../features/change-todo-status";
import {
	type FilterSettings,
	useGlobalContext,
} from "../../shared/GlobalProvider.tsx";
import type { User } from "../../shared/types.ts";
import { useGetUsers } from "../../shared/useGetUsers.ts";

const prepareData = (todos: Todo[], filterSettings: FilterSettings): Todo[] => {
	const completedFilter = (todo: Todo) => {
		if (filterSettings.filterByCompleted) return todo.completed;
		return true;
	};

	const titleFilterApplied = (todo: Todo) => {
		if (filterSettings.filterByTitle)
			return todo.title.includes(filterSettings.filterByTitle);
		return true;
	};

	const userFilterApplied = (todo: Todo) => {
		if (filterSettings.filterByUser)
			return todo.userId === filterSettings.filterByUser.id;
		return true;
	};

	return todos
		.filter(completedFilter)
		.filter(titleFilterApplied)
		.filter(userFilterApplied);
};

export const TodoList = () => {
	const { filterSettings } = useGlobalContext();

	const todos: Todo[] = useGetTodoData();
	const users: User[] = useGetUsers();

	const todosData = prepareData(todos, filterSettings);

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
