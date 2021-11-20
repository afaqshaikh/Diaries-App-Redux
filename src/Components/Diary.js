import { useSelector } from "react-redux"
import { useState } from "react"
import firebase from "../Config/firebase"

const Diary = () => {
    const user = useSelector((state) => state.current_user)
    const [diary , setDiary] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.database().ref('/').child(`diary/${user.uid}`).push({
            message: diary,
            email: user.email,
            uid: user.uid,
        })
        setDiary("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <textarea className="form-control" value={diary} onChange={e => setDiary(e.target.value)} aria-label="With textarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create Diary </button>
            </form>
        </div>
    )
}

export default Diary