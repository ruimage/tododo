import "./App.css";
import {Stack} from "@mui/material";
import {FilteredByCompleted} from "./features/filter-by-completed";
import {GlobalProvider} from "./shared/GlobalProvider.tsx";
import { TodoList } from "./widgets";

function App() {
	return (
		<GlobalProvider>
			<Stack direction="column" gap={2} alignItems="center" justifyContent="center">
			<Stack direction="row" gap={2} alignItems="center" justifyContent="space-between">
				<FilteredByCompleted/>
			</Stack>
			<TodoList />
			</Stack>
		</GlobalProvider>
	);
}

export default App;
