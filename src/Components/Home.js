import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"
import firebase from '../Config/firebase'
import { useEffect, useState } from 'react'
import "./index.css"
import Card from "./Card";
import Preloader from "./Preloader";
import { useSelector } from "react-redux";

const Home = () => {

    let [diary, setDiary] = useState()
    const [loading, setLoading] = useState(true)
    const user = useSelector((state) => state.current_user)

    const getDiaries = () => {
        firebase.database().ref('/').child('diary').get().then((snapshot) => {
            const data = []
            if (snapshot.exists()) {
                snapshot.forEach((doc) => {
                    data.push(doc.val())
                })

            } else {
                console.log("No data available");
            }
            setDiary(data.reverse());
            setLoading(false)
        }).catch((error) => {
            alert(error);
        })
    }

    useEffect(() => {
        getDiaries()
    }, [])

    // console.log(diary);

    return (
        <>
            <Header />
            <div className="container diaries">
                <div className="row mb-4">
                    <div className="col-lg-12 text-end">
                        <Link to="/diary" className="btn btn-success"> 
                        {Object.keys(user).length < 1 ?"Login to Create Diary":"Create Diary"}
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {loading ? <Preloader />
                        :
                        diary.map((val, indx) => {
                            return <div key={indx} className="col-lg-12">
                                <Card email={val.email} date={val.date} time={val.time} message={val.message} />
                            </div>
                        })
                    }
                </div>

            </div>
            {loading ? "" :<Footer />}
            
        </>
    )
}

export default Home