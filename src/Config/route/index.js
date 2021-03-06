import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import SignUp from "../../Components/SignUp";
import Home from "../../Components/Home"
import Login from "../../Components/Login";
import Diary from "../../Components/Diary";

const AppRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/diary" component={Diary} />
        </Router>
    )
}

export default AppRouter