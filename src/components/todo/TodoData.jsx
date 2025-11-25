const TodoData = (props) => {
    const { name, data, age, todoList } = props; // obj destructuring
    /* Vì JSX chỉ đọc được kiểu string và number nên đối với array và obj thì phải chuyển về dạng JSON */
    return (
        <div className="todo-data">
            <div>Hello {name}</div>
            <div>Learn React </div>
            <div>Watching Youtobe</div>
            <div>
                {JSON.stringify(todoList)}

            </div>
        </div>
    )
}
export default TodoData;