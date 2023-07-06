import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"

export default function UpdateTodo(){
    const { id } = useParams()
    const auth = useAuth()
  

    const [todo, setTodo] = useState(null)
    const [ description, setDescription] = useState(null)
    const [ targetDate, setTargetDate] = useState(null)

    

    function getTodo(id){
        getTodoApi(auth.username, id)
        .then((response) => {
            setTodo(response.data)
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)})
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally get Todo'))
    }

    useEffect(() =>{
        getTodo(id)
    },[id])

    return(
        <div className="container">
            <h2>Update your todo</h2>
            <form>
                <div>
                Description : <input  type="text" name="description" value={description} className="m-5" onChange={(event)=> setDescription(event.target.value)}/>
                </div>
                <div>
                TargetDate : <input type="date" name="targetDate" value={targetDate} className="m-5" onChange={(event) => setTargetDate(event.target.value)} />
                </div>
            </form>


        </div>
    )
}