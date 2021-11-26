import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const diaries = useSelector((state) => state.diaries);
    const dispatch = useDispatch()
        console.log(diaries)

    
  



    return (
        <div className="">
            <Header />

            <Footer />
        </div>
    )
}

export default Home