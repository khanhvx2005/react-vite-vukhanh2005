const TodoNew = (props) => {
    const { addNewTodo } = props;
    addNewTodo();
    const handleClick = () => {
        console.log("---->>> handleClick")
    }
    const handleOnchange = (name) => {
        console.log("---->", name);
    }
    return (
        <div className="todo-new">
            <input
                type="text"
                placeholder="Nhập từ khóa"
                onChange={(event) => { handleOnchange(event.target.value) }}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew;