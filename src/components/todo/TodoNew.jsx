import { useState } from "react";

const TodoNew = (props) => {
    // const inputValue = "eric";
    const { addNewTodo } = props;
    const [inputValue, setInputValue] = useState("Eric")
    const handleClick = () => {
        addNewTodo(inputValue);
        setInputValue("");

    }
    const handleOnchange = (name) => {
        // console.log("---->", name);
        setInputValue(name) // Mỗi 1 lần thay đổi giá trị ô input thì sẽ cập nhập lại giá trị inputValue
    }
    return (
        <div className="todo-new">
            <input
                type="text"
                placeholder="Nhập từ khóa"
                onChange={(event) => { handleOnchange(event.target.value) }}
                value={inputValue}
            />
            <button onClick={handleClick}>Add</button>
            <div>My text input is : {inputValue}</div>
        </div>
    )
}
export default TodoNew;