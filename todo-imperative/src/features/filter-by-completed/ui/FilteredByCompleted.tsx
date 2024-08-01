import {Checkbox, Stack, Typography} from "@mui/material";
import type {FC } from "react";
import {useGlobalContext} from "../../../shared/GlobalProvider.tsx";

export const FilteredByCompleted:FC = () => {

    const {filterSettings,setFilterSettings} = useGlobalContext()

    const checked = filterSettings.filterByCompleted;
    const changeHandler = () => {
        setFilterSettings({type:'setFilterByCompleted', payload:!checked});
    };

    return (
        <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between">
            <Checkbox value={checked} onChange={changeHandler} />
            <Typography variant="caption">Filtered by completed</Typography>
        </Stack>)
}
