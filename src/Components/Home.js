import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <h1>home Page</h1>
            {/* <button type="button" onClick={()=>dispatch(login())} className="btn btn-dark">Dark</button> */}
            <Link to="/signup" className="btn btn-dark">SignUp</Link>
        </div>
    )
}

export default Home