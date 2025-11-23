const TodoData = (props) => {
    const { name, data, age } = props; // obj destructuring
    return (
        <div className="todo-data">
            <div>Hello {name}</div>
            <div>Learn React </div>
        </div>
    )
}
export default TodoData;