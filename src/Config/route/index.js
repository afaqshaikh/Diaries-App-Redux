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
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/diary" component={Diary} />
        </Router>
    )
}

export default AppRouter