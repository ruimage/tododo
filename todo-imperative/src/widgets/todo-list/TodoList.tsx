import { List, ListItem } from "@mui/material";
import { type Todo, TodoRow, useGetTodoData } from "../../entities/todo";
import {UserTodoPresentatation} from "../../entities/user";
import {getUserById} from "../../entities/user";
import { ChangeTodoStatus } from "../../features/change-todo-status";
import type {User} from "../../shared/types.ts";
import {useGetUsers} from "../../shared/useGetUsers.ts";

export const TodoList = () => {
	const todos:Todo[] = useGetTodoData();
	const users:User[] = useGetUsers()


	return (
		<List>
			{todos.map((todo: Todo) => {
				return (
					<ListItem key={todo.id}>
						<TodoRow
							title={todo.title}
							completed={todo.completed}
							activeSlotsStart={[
								<ChangeTodoStatus key={0} id={todo.id} completed={todo.completed}/>,
							]}
							activeSlotsEnd={[
								<UserTodoPresentatation key={0} user={getUserById(users, todo.userId)}/>,
							]}
						/>
					</ListItem>
				);
			})}
		</List>
	);
};
