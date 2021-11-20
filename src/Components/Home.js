import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Home = () => {
    const user = useSelector((state) => state.counter);


    return(
        <div>
            <h1>home Page</h1>
            {/* <button type="button" onClick={()=>dispatch(login())} className="btn btn-dark">Dark</button> */}
            <Link to="/signup" className="btn btn-dark">SignUp</Link><br/>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/diary" className="btn btn-secondary">Create Diary</Link>
        </div>
    )
}

export default Home