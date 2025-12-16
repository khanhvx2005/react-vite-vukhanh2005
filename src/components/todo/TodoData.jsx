const TodoData = (props) => {
    const { todoList } = props; // obj destructuring
    /* Vì JSX chỉ đọc được kiểu string và number nên đối với array và obj thì phải chuyển về dạng JSON */
    const handleClick = () => {

    }
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div> {item.name} </div>
                        <button onClick={handleClick}>Delete</button>
                    </div>

                )
            })}
        </div>
    )
}
export default TodoData;