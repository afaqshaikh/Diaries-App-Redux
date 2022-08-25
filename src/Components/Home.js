import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"
import firebase from '../Config/firebase'
import { useEffect, useState } from 'react'
import "./index.css"
import Card from "./Card";
import Preloader from "./Preloader";

const Home = () => {

    let [diary, setDiary] = useState()
    const [loading,setLoading] = useState(true)

    const getDiaries = () => {
        firebase.database().ref('/').child('diary').get().then((snapshot) => {
            const data = []
            if (snapshot.exists()) {
                snapshot.forEach((doc)=>{
                    data.push(doc.val())
                })
                
            } else {
                console.log("No data available");
            }
            setDiary(data);
            setLoading(false)
        }).catch((error) => {
            alert(error);
        })
    }

    useEffect(() => {
        getDiaries()
    }, [])

    return (
        <div className="">
            <Header />
            <div className="container diaries">
                <div className="row mb-4 p-0">
                    <div className="text-end p-0">
                        <Link to="/diary" className="btn btn-success">Create Diary</Link>
                    </div>
                </div>
                {loading ? <Preloader />
                :
                diary.map((val,indx)=>{
                  return <Card key={indx} date={val.date} time={val.time} message={val.message}/>
                })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home