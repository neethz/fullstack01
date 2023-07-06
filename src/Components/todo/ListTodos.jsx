import { useEffect, useState } from "react"
import { deleteTodoApi, getUserTodosApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"

export default function Todos() {
    // const today = new Date()
    // const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())
    const auth = useAuth()
    const  [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    
    //Below is used to call the function on load without any dependencies. - Fetch data from API when the Todos component is mounted
    useEffect (
        () => getTodos() , []
    )

    useEffect ((() =>
    {
        setTimeout(()=> {
            setMessage(null)
        },5000)
    }))

   

    function getTodos(){
        getUserTodosApi(auth.username)
        .then((response) => {
            console.log(response.data)
            setTodos(response.data)

        })
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally todo1'))
    }

    function deleteTodoById(id){
        deleteTodoApi(auth.username,id)
        .then(
            () => {
                setMessage(`Deleted todo with id = ${id}`)
                getTodos()
            }
        )
        .catch((error) => console.log(error))
        .finally(() => console.log("Finally deleteTodo"))
    }

    return (
        <div className='container Todos'>
            <h1>Your todos are listed below!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done?</th>
                        <th>TargetDate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={
                                                                    () => {
                                                                        deleteTodoById(todo.id)}}  >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}