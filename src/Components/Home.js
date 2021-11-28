import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"
import firebase from '../Config/firebase'
import {useEffect , useState} from 'react'
import "./index.css"


const Home = () => {

    let [diary,setDiary] = useState([])

    useEffect(()=>{
        async function getDiaries(){
            const diaries = await firebase.database().ref('/').child('diary').on('child_added',(data)=>{
                setDiary(data.val())
            })
        }
        getDiaries()
    },[])
    console.log(diary)
  
  if(!diary){
  return <div className="d-flex mt-5 justify-content-center">
  <div className="spinner-border text-primary"  style={{width: '3rem', height: '3rem'}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
  }       


    return (
        <div className="">
            <Header />
            <div className="container diaries">
                <div className="row mb-4 p-0">
                    <div className="text-end p-0">
                        <Link to="/diary" className="btn btn-success">Create Diary</Link>
                    </div>
                </div>
                
                {/* {diary && diary.map((v,i)=>{console.log(v)})} */}

                <div className="row">
                    <textarea className="form-control rounded-0 rounded-top"  placeholder="Leave a comment here" style={{ height: '100px' }}>
                        Hello my name is babun!!!
                    </textarea>
                </div>
                <div className="row mb-4 bg-dark rounded-bottom text-end">
                    <p className="text-white mt-2">Time</p>
                </div>
                <div className="row">
                    <textarea className="form-control rounded-0 rounded-top"  placeholder="Leave a comment here" style={{ height: '100px' }}>
                        Hello my name is babun!!!
                    </textarea>
                </div>
                <div className="row mb-4 bg-dark rounded-bottom text-end">
                    <p className="text-white mt-2">Time</p>
                </div>
                <div className="row">
                    <textarea className="form-control rounded-0 rounded-top"  placeholder="Leave a comment here" style={{ height: '100px' }}>
                        Hello my name is babun!!!
                    </textarea>
                </div>
                <div className="row mb-4 bg-dark rounded-bottom text-end">
                    <p className="text-white mt-2">Time</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home