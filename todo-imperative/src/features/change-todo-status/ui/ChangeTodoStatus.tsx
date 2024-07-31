import {Alert,Checkbox, Stack} from "@mui/material";
import {Todo} from "../../../entities/todo";
import {FC, useEffect, useState} from "react";

type ChangeTodoStatusProps = {
    id: Todo['id'],
    completed: Todo['completed']
}

export const ChangeTodoStatus:FC<ChangeTodoStatusProps> = ({id, completed}) => {

    const [visible, setVisible] = useState(false)

useEffect(() => {
    if (!visible) return
  setTimeout(() => {
    setVisible(false)
  }, 3000)
}, [visible])


    const handleChange = () => {
        setVisible(true)
    }

    return <Stack direction="row-reverse" spacing={1}>
        <Checkbox
            checked={completed}
            onChange={handleChange}
        />

        {visible && <Alert>{`imagine it change ${id} status to ${!completed}`}</Alert>}
    </Stack>
}
