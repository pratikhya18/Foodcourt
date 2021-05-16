import React, { useState } from "react";
const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
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
                                    <label for="exampleFormControlInput1" class="form-label"> full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter your name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">phone number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="number" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="feedback" value={data.feedback} onChange={InputEvent}></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                    
                                    <button class="btname btn-primary" >log in</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;