import { useSelector } from "react-redux"
import { useState } from "react"
import firebase from "../Config/firebase"
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"


const Diary = () => {
    const user = useSelector((state) => state.current_user)
    const [diary, setDiary] = useState()
    const [buttonText, setButtontext] = useState("Write Diary")

    let newDate = new Date()
    var date = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate()
    var time = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtontext("Writing....")
        firebase.database().ref('/').child(`diary`).push({
            message: diary,
            email: user.email,
            uid: user.uid,
            date: date,
            time: time
        })
            .then(() => {
                setDiary("")
                setButtontext("Write Diary")
            })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row mb-5 p-0">
                    <div className=" p-0">
                        <Link to="/" className="btn btn-outline-warning">Back</Link>
                    </div>
                </div>
                <div className="row p-0">
                    <form className="p-0" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="form-label">Write Your Diary </label>
                        <textarea className="form-control mb-4" style={{ height: '100px' }} placeholder="Enter Your Diary" value={diary} onChange={e => setDiary(e.target.value)} aria-label="With textarea"></textarea>
                        <button type="submit" className={buttonText === "Writing...." ? "disabled btn btn-success" : "btn btn-success"}>{buttonText}</button>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Diary