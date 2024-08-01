import { Stack, Typography } from "@mui/material";
import type { FC } from "react";
import type { User } from "../../../shared/types.ts";

export const UserTodoPresentatation: FC<{ user: User | undefined }> = ({
	user,
}) => {
	if (!user) return <></>;

	return (
		<Stack>
			<Typography variant={"body1"}>{user.username}</Typography>
			<Typography variant={"body1"}>{user.email}</Typography>
		</Stack>
	);
};
