import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import SignUp from "../../Components/signUp";
import Home from "../../Components/Home"

const AppRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
        </Router>
    )
}

export default AppRouter