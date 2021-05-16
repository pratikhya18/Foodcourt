import React, { useState } from "react";
const Login = () => {
    const [data, setData] = useState({
        password: "",
        phone: "",
        email: "",
        feedback: "",
    });
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}`);
    };
    return (
        <>
            <h1 className="text-center">This is contact page</h1>
            <div className="my-5">
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label"> password</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="password" value={data.fullname} onChange={InputEvent} placeholder="password" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                </div>
                                
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Log In</button>
                                    
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;