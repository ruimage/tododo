import { Box, Stack, Typography } from "@mui/material";
import type React from "react";
import type { FC } from "react";

type TodoProps = {
	title: string;
	completed: boolean;
	activeSlotsStart?: Array<React.ReactNode>;
	activeSlotsEnd?: Array<React.ReactNode>;
};

export const TodoRow: FC<TodoProps> = ({
	title,
	completed,
	activeSlotsStart = [],
	activeSlotsEnd = [],
}) => {
	return (
		<Box
			border={1}
			borderColor="grey.500"
			borderRadius={2}
			p={1}
			minWidth={"30vw"}
			maxWidth={"30vw"}
		>
			<Stack direction="row" spacing={1} alignItems="center" justifyContent={'space-between'}>
				{activeSlotsStart}
				<Typography
					variant="body1"
					sx={{
						textDecoration: completed ? "line-through" : "none",
						wrap: "break-word",
						textWrapping: "wrap",
				}}
				>
					{title}
				</Typography>
				{activeSlotsEnd}
			</Stack>
		</Box>
	);
};
