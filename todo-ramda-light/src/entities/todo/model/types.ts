import type {User} from "../../../shared/types.ts";

export type Todo = {
	userId: User["id"];
	id: number;
	title: string;
	completed: boolean;
};
