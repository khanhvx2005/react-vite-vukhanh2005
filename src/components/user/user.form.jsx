import { Button, Input } from 'antd';
import { useState } from 'react';

const UserForm = () => {
    // Vấn đề là value trong input
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [phone, setPhone] = useState("")

    // console.log(`Fullname = ${fullName}, Email =${email} , Password = ${password}, Phone = ${phone}`)
    return (
        <>
            <div className='user-form' style={{ margin: "20px o" }}>
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input placeholder="Nhập họ tên" value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />

                    </div>
                    <div>
                        <span>Email</span>
                        <Input placeholder="Nhập email" value={email}
                            onChange={(event) => { setEmail(event.target.value) }}

                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password placeholder="Nhập mật khẩu" value={password}
                            onChange={(event) => { setPassword(event.target.value) }}

                        />
                    </div>
                    <div>
                        <span>Phone</span>
                        <Input placeholder="Nhập số điện thoại" value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}

                        />
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