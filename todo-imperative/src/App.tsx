import "./App.css";
import {GlobalProvider} from "./shared/GlobalProvider.tsx";
import { TodoList } from "./widgets";

function App() {
	return (
		<GlobalProvider>
			<TodoList />
		</GlobalProvider>
	);
}

export default App;
