import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"

const Home = () => {
    const diaries = useSelector((state) => state.diaries);
    const dispatch = useDispatch()
    console.log(diaries)






    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="row mb-4 p-0">
                    <div className="text-end p-0">
                        <Link className="btn btn-success">Create Diary</Link>
                    </div>
                </div>
                <div className="row">
                    <textarea className="form-control rounded-0 rounded-top" placeholder="Leave a comment here" style={{ height: '100px' }}>
                        Hello my name is babun!!!
                    </textarea>
                </div>
                <div className="row bg-dark rounded-bottom text-end">
                    <p className="text-white mt-2">Time</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home