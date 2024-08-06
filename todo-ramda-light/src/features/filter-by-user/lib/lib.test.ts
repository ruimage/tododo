import { describe, expect, it } from "vitest";
import userTestData from "../../../shared/userTestData.json";
import { getUserByUsername, getUserNames } from "./lib.ts";

describe("getUserName", () => {
	it("should return user name", () => {
		const userNames = getUserNames(userTestData);
		expect(userNames).toStrictEqual([
			"Bret",
			"Antonette",
			"Samantha",
			"Karianne",
			"Kamren",
			"Leopoldo_Corkery",
			"Elwyn.Skiles",
			"Maxime_Nienow",
			"Delphine",
			"Moriah.Stanton",
		]);
	});
});

describe("getUserByUsername", () => {
	it("should return user by username", () => {
		const userNames = getUserByUsername("Bret", userTestData);
		expect(userNames).toStrictEqual({
			address: {
				city: "Gwenborough",
				geo: {
					lat: "-37.3159",
					lng: "81.1496",
				},
				street: "Kulas Light",
				suite: "Apt. 556",
				zipcode: "92998-3874",
			},
			company: {
				bs: "harness real-time e-markets",
				catchPhrase: "Multi-layered client-server neural-net",
				name: "Romaguera-Crona",
			},
			email: "Sincere@april.biz",
			id: 1,
			name: "Leanne Graham",
			phone: "1-770-736-8031 x56442",
			username: "Bret",
			website: "hildegard.org",
		});
	});
});
