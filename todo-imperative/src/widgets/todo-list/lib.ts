import type { Todo } from "../../entities/todo";
import type { FilterSettings } from "../../shared/GlobalProvider.tsx";

export const completedFilter =
	(filterSettings: FilterSettings) => (todo: Todo) => {
		if (filterSettings.filterByCompleted) return todo.completed;
		return true;
	};

export const titleFilter = (filterSettings: FilterSettings) => (todo: Todo) => {
	if (filterSettings.filterByTitle)
		return todo.title.includes(filterSettings.filterByTitle);
	return true;
};

export const userFilter = (filterSettings: FilterSettings) => (todo: Todo) => {
	if (filterSettings.filterByUser)
		return todo.userId === filterSettings.filterByUser.id;
	return true;
};

export const applyFiltersOnTodos = (
	todos: Todo[],
	filterSettings: FilterSettings,
): Todo[] => {
	return todos
		.filter(completedFilter(filterSettings))
		.filter(titleFilter(filterSettings))
		.filter(userFilter(filterSettings));
};
