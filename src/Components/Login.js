import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Config/store/action';
import { useHistory } from "react-router-dom";


const Login = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [user, setUser] = useState({ email: "", pass: "" })

    var handleSubmit = (e) => {
        e.preventDefault()
        setUser({
            email: "",
            pass: ""
        })
    }

    var handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="pass" onChange={handleChange} className="form-control" id="password" />
                </div>
                <button type="submit" onClick={() => dispatch(login(user, history))} className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login