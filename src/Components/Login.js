import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Config/store/action';
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css"


const Login = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [user, setUser] = useState({ email: "", pass: "" })
    const [buttonText, setButtontext] = useState("Login")


    var handleSubmit = (e) => {
        e.preventDefault()
        setButtontext("Loading....")
        dispatch(login(user, history,setButtontext))
    }

    var handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={user.pass} name="pass" onChange={handleChange} className="form-control" id="password" />
                    </div>
                    <button type="submit" className={buttonText === "Loading...." ? "disabled btn btn-primary" : "btn btn-primary"}>{buttonText}</button>
                </form>
            </div>
            <Footer position="fixed-bottom" />
        </div>
    )
}

export default Login