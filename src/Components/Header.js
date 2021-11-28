import { Link } from "react-router-dom"
import "./index.css"

const Header = () => {

  return (
    <div className="container-fluid bg-dark p-4 mb-5">
      <div className="container row">
        <div className="col">
          <h4 className="text-white text-center">Diaries App</h4>
        </div>
        <div className="col  text-end ">
          <Link to="/" className="btn  me-md-2 btn-outline-light">Login</Link>
          <Link to="/signup" className="btn btn-outline-warning ">SignUp</Link>
        </div>
      </div>

    </div>
  )
}

export default Header