import { Link } from "react-router-dom"
import { get_diaries } from "../Config/store/action"
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header";

const Home = () => {
    const diaries = useSelector((state) => state.diaries);
    const dispatch = useDispatch()

    if (!diaries) {
        <h1>Loading....</h1>
    } else {
        console.log(diaries)

    }



    return (
        <div>
            <Header />
            <h1>home Page</h1>
            <button type="button" onClick={() => dispatch(get_diaries())} className="btn btn-dark">Get Diaries</button>
            <Link to="/signup" className="btn btn-dark">SignUp</Link><br />
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/diary" className="btn btn-secondary">Create Diary</Link>

        </div>
    )
}

export default Home