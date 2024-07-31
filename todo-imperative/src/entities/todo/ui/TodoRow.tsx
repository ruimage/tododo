import React, { FC } from "react"
import {Box, Stack, Typography} from "@mui/material";

type TodoProps = {
    title: string,
    completed: boolean
    activeSlotsStart?:Array<React.ReactNode>
    activeSlotsEnd?:Array<React.ReactNode>
}


export const TodoRow:FC<TodoProps> = ({title, completed, activeSlotsStart=[], activeSlotsEnd=[]}) => {
    return (
        <Box border={1} borderColor="grey.500" borderRadius={2} p={1} minWidth={'30vw'}>
           <Stack direction="row" spacing={1} alignItems="center">
            {activeSlotsStart}
            <Typography variant="body1" sx={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</Typography>
            {activeSlotsEnd}
           </Stack>
        </Box>
    )
}
