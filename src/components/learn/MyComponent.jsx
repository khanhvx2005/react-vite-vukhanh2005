// component = HTML + CSS + JS
// JSX
// Fragment
// Sử dụng CSS
// Sử dụng 1 biến số với JSX sử dụng cú pháp {} cho phép code JS trong HTML
const MyComponent = () => {
    // const hoidanit = "eric"; // string
    // const hoidanit = 25; // number
    // const hoidanit = true;
    // const hoidanit = undefined;
    // const hoidanit = null
    // Đối với trường hợp kiểu dữ liệu là boolean , undefined , null thì việc dùng biến số sẽ vô nghĩa
    const hoidanit = [1, 2, 3]
    // Đối với trường hợp kiểu dữ liệu là array và obj thì phải ép về string vì JSX chỉ đọc đc string và number
    return (
        <>
            <div>fullname</div>
            <div style={{ color: "red" }}> {JSON.stringify(hoidanit)}</div>
        </>
    );
}
export default MyComponent;