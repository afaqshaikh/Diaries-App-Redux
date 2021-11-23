import { get_diaries } from "../Config/store/action"
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {
    const diaries = useSelector((state) => state.diaries);
    const dispatch = useDispatch()

    useEffect(()=>{
        get_diaries()
    },[])

    if (!diaries) {
      <h1>Loading.....</h1>
    } else {
        console.log(diaries)

    }



    return (
        <div className="">
            <Header />
            <button type="button" onClick={() => dispatch(get_diaries())} className="btn btn-dark">Get Diaries</button>
            <Footer />
        </div>
    )
}

export default Home