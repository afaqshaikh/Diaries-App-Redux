import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sign_up } from '../Config/store/action';
import { useHistory } from "react-router-dom";


const SignUp = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [user, setUser] = useState({ username: "", email: "", pass: "" })

    var handleSubmit = (e) => {
        e.preventDefault()
        setUser({
            username: "",
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
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="pass" value={user.pass} onChange={handleChange} className="form-control" id="password" />
                </div>
                <button type="submit" onClick={() => dispatch(sign_up(user, history))} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp