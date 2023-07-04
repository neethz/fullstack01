export default function Todos() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())
    const todos = [{ id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    { id: 2, description: 'Learn GCP', done: false, targetDate: targetDate },
    { id: 3, description: 'Learn BE', done: false, targetDate: targetDate }]
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
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}