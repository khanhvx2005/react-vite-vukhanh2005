import { Button, Input } from 'antd';

const UserForm = () => {
    return (
        <>
            <div className='user-form' style={{ margin: "20px o" }}>
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input placeholder="Nhập họ tên" />

                    </div>
                    <div>
                        <span>Email</span>
                        <Input placeholder="Nhập email" />

                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password placeholder="Nhập mật khẩu" />

                    </div>
                    <div>
                        <span>Phone</span>
                        <Input placeholder="Nhập số điện thoại" />

                    </div>
                    <div>
                        <Button type="primary">Create User</Button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default UserForm;