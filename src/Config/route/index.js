import {
    BrowserRouter as Router,
    Redirect,
    Route,
} from "react-router-dom";
import SignUp from "../../Components/SignUp";
import Home from "../../Components/Home"
import Login from "../../Components/Login";
import Diary from "../../Components/Diary";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const user = useSelector((state) => state.current_user)

    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            
            <Route path="/diary">
                {Object.keys(user).length < 1 ? <Redirect to="/login" /> : <Diary/>}
            </Route>
          
        </Router>
    )
}

export default AppRouter