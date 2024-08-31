import { Alert, Checkbox, Stack } from "@mui/material";
import {isNotEmpty, when} from "rambda";
import { type FC, useEffect, useState } from "react";
import type { Todo } from "../../../entities/todo";

type ChangeTodoStatusProps = {
	id: Todo["id"];
	completed: Todo["completed"];
};

export const ChangeTodoStatus: FC<ChangeTodoStatusProps> = ({
	id,
	completed,
}) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const setVisibleFalseByTimeout = () => {setTimeout(() => {setVisible(false)}, 3000)}

		when(
			isNotEmpty,
			setVisibleFalseByTimeout,
		)(visible);
	}, [visible]);

	const handleChange = () => {
		setVisible(true);
	};

	return (
		<Stack direction="row-reverse" spacing={1}>
			<Checkbox checked={completed} onChange={handleChange} />

			{visible && (
				<Alert>{`imagine it change ${id} status to ${!completed}`}</Alert>
			)}
		</Stack>
	);
};
