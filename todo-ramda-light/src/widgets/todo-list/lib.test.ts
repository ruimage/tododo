import { describe, expect, it } from "vitest";
import testTodos from "../../shared/todoTestData.json";
import testUsers from "../../shared/userTestData.json";
import { filterTodosByCompleted, filterTodosByUser } from "./lib.ts";

const filterSettings = {
	filterByCompleted: true,
	filterByTitle: "porro",
	filterByUser: testUsers[1],
};

const user2TestTodos = [
	{
		userId: 2,
		id: 19,
		title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
		completed: true,
	},
];

const todosCompleted = [
	{
		completed: true,
		id: 4,
		title: "et porro tempora",
		userId: 1,
	},
	{
		completed: true,
		id: 8,
		title: "quo adipisci enim quam ut ab",
		userId: 1,
	},
	{
		completed: true,
		id: 10,
		title: "illo est ratione doloremque quia maiores aut",
		userId: 1,
	},
	{
		completed: true,
		id: 11,
		title: "vero rerum temporibus dolor",
		userId: 1,
	},
	{
		completed: true,
		id: 12,
		title: "ipsa repellendus fugit nisi",
		userId: 1,
	},
	{
		completed: true,
		id: 14,
		title: "repellendus sunt dolores architecto voluptatum",
		userId: 1,
	},
	{
		completed: true,
		id: 15,
		title: "ab voluptatum amet voluptas",
		userId: 1,
	},
	{
		completed: true,
		id: 16,
		title: "accusamus eos facilis sint et aut voluptatem",
		userId: 1,
	},
	{
		completed: true,
		id: 17,
		title: "quo laboriosam deleniti aut qui",
		userId: 1,
	},
	{
		completed: true,
		id: 19,
		title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
		userId: 2,
	},
];

describe("filters", () => {
	it("should filter by completed", () => {
		const initCompleteFilter = filterTodosByCompleted(filterSettings);
		expect(initCompleteFilter(testTodos)).toStrictEqual(todosCompleted);
	});

	it("should filter by all", () => {
		const initCompleteFilter = filterTodosByCompleted({
			...filterSettings,
			filterByCompleted: false,
		});
		expect(initCompleteFilter(testTodos)).toStrictEqual(testTodos);
	});

	it("should filter by user", () => {
		const initFilterByUser = filterTodosByUser(filterSettings);
		expect(initFilterByUser(testTodos)).toStrictEqual(user2TestTodos);
	});
});
