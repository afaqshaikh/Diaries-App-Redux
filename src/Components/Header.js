import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"


const Header = () => {
  const dispatch = useDispatch()

  return (
    <div className="container-fluid bg-dark p-2">
      <div className="container row">
        <div className="col">
          <h4 className="text-white">Diaries App By Technical Haji</h4>
        </div>
        <div className="col text-end ">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-dark ">SignUp</Link>
        </div>
      </div>

    </div>
  )
}

export default Header