import { describe, expect, it } from "vitest";
import testTodos from "../../shared/todoTestData.json";
import testUsers from "../../shared/userTestData.json";
import { completedFilter, titleFilter, userFilter } from "./lib.ts";

const filterSettings = {
	filterByCompleted: true,
	filterByTitle: "porro",
	filterByUser: testUsers[0],
};

describe("filters", () => {
	it("should filter by completed", () => {
		const initCompleteFilter = completedFilter(filterSettings);
		expect(initCompleteFilter(testTodos[0])).toBe(false);
		expect(initCompleteFilter(testTodos[3])).toBe(true);
	});

	it("should filter by title", () => {
		const initTitleFilter = titleFilter(filterSettings);
		expect(initTitleFilter(testTodos[0])).toBe(false);
		expect(initTitleFilter(testTodos[3])).toBe(true);
	});

	it("should filter by user", () => {
		const initUserFilter = userFilter(filterSettings);
		expect(initUserFilter(testTodos[0])).toBe(true);
		expect(initUserFilter(testTodos[3])).toBe(true);
	});
});
