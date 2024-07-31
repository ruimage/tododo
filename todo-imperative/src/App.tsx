import './App.css'
import {useGetUsers} from "./shared/useGetUsers.ts";
import {useGetTodoData} from "./shared/useGetTodoData.ts";

function App() {

    const users = useGetUsers()
    const todos = useGetTodoData()

  return (
    <>
        {users.map(user => <p>{user.name}</p>)}
        {todos.map(todo => <p>{todo.title}</p>)}
    </>)

}

export default App
