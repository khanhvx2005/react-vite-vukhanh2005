const TodoData = (props) => {
    const { todoList } = props; // obj destructuring
    /* Vì JSX chỉ đọc được kiểu string và number nên đối với array và obj thì phải chuyển về dạng JSON */
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div> {item.name} </div>

                )
            })}

            <div>
                {JSON.stringify(todoList)}

            </div>
        </div>
    )
}
export default TodoData;