import { List, ListItem } from "@mui/material";
import { type Todo, TodoRow, useGetTodoData } from "../../entities/todo";
import { ChangeTodoStatus } from "../../features/change-todo-status";

export const TodoList = () => {
	const todos = useGetTodoData();

	return (
		<List>
			{todos.map((todo: Todo) => (
				<ListItem key={todo.id}>
					<TodoRow
						title={todo.title}
						completed={todo.completed}
						activeSlotsStart={[
							<ChangeTodoStatus key={0} id={todo.id} completed={todo.completed} />,
						]}
					/>
				</ListItem>
			))}
		</List>
	);
};
