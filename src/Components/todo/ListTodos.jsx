import { useEffect, useState } from "react"
import { getUserTodos } from "./api/TodoApiService"

export default function Todos() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())


    const  [todos, setTodos] = useState([])
    
    //Below is used to call the function on load without any dependencies. - Fetch data from API when the Todos component is mounted
    useEffect (
        () => getTodos() , []
    )
   

    function getTodos(){
        getUserTodos('Neethu')
        .then((response) => {
            console.log(response.data)
            setTodos(response.data)

        })
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally todo1'))
    }

    return (
        <div className='container Todos'>
            <h1>Your todos are listed below!</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Done?</td>
                        <td>TargetDate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}