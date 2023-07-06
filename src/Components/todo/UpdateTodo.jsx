import { Field, Formik, Form } from "formik"
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
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)})
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally get Todo'))
    }

    function onSubmit(values){
        console.log(values)
    }

    useEffect(() =>{
        getTodo(id)
    },[id])

    return(
        <div className="container">
            <h2>Update your todo</h2>
            <Formik initialValues={{description, targetDate}}
            enableReinitialize={true}
            onSubmit ={onSubmit}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate" />
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success m-5" onClick={onSubmit}>Save</button>
                            </div>
                        </Form>
                    )
                }
                
            </Formik>
            


        </div>
    )
}