import { Field, Formik, Form, ErrorMessage } from "formik"
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

    function onValidate(values){
        let errors={}
        if(values.description.length <5){
            errors.description='Description should be atleast of 5 characters'
        }
        if(values.targetDate==null){
            errors.targetDate='Enter valid target date'
        }
        return errors
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
            validate={onValidate}
            validateOnChange = {false}
            validateOnBlur ={false}
            >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className= "alert alert-warning"
                        
                            />
                            <ErrorMessage
                                name="targetDate"
                                component="div"
                                className= "alert alert-warning"
                            
                            />
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