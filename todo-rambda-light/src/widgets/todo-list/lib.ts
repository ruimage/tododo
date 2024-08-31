import {
	path,
	curry, defaultTo,equals,
	filter,
	isNotNil,
	pipe, prop,
	propEq,
	when, 
} from "rambda";
import type { Todo } from "../../entities/todo";
import type { FilterSettings } from "../../shared/GlobalProvider.tsx";
import type { User } from "../../shared/types.ts";

export const filterTodosByCompleted = curry(
	(filterSettings: FilterSettings, todos: Todo[]): Todo[] => {

		const completedFilterValue = pipe(
			prop("filterByCompleted"),
			defaultTo(false)
		)(filterSettings)

		const getByCompletion = filter<Todo>(
			propEq(completedFilterValue, "completed"),
		);

		return when<Todo[], Todo[]>(
			()=>equals(true,completedFilterValue),
			getByCompletion,
		)(todos) as Todo[];
	},
);

export const filterTodosByUser = curry(
	(filterSettings: FilterSettings, todos: Todo[]): Todo[] => {

		const userFilterValue = path(
			["filterByUser", "id"],
			filterSettings,
		) as User["id"] | undefined;

		return when<Todo[], Todo[]>(
			() => isNotNil(userFilterValue),
			filter<Todo>(propEq(userFilterValue, "userId")),
		)(todos) as Todo[];
	},
);

export const applyFiltersOnTodos = (
	todos: Todo[],
	filterSettings: FilterSettings,
): Todo[] =>
	pipe(
		(t: Todo[]): Todo[] => filterTodosByUser(filterSettings)(t),
		(t: Todo[]): Todo[] => filterTodosByCompleted(filterSettings)(t),
	)(todos);
