import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./index.css"

const Header = () => {
  const user = useSelector((state) => state.current_user)
  return (
    <div className="container-fluid bg-dark p-4 mb-5">
      <div className=" row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <Link to="/" className="text-decoration-none"> <h4 className="text-white ">Diaries App</h4></Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6  text-end">
          {Object.keys(user).length < 1 ?
            <>
              <Link to="/login" className="btn  me-md-2 btn-outline-light">Login</Link>
              <Link to="/signup" className="btn btn-outline-warning ">SignUp</Link>
            </>
            :
            <Link to="/diary" className="btn btn-outline-warning ">Create Diary</Link>

          }
        </div>
      </div>
    </div>
  )
}

export default Header