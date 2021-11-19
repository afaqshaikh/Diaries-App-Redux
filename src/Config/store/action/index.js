// export const userLogin = "USERLOGIN" 
import firebase from "../../firebase";


const sign_up = (user,history) => {
    return (dispatch) => {
        const {email, pass } = user
        firebase.auth().createUserWithEmailAndPassword(email , pass)
            .then((result) => {
                const user = result.user;

                var create_user = {
                    email : user.email,
                    uid : user.uid
                }
                console.log(create_user)

                firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                .then(()=>{
                    dispatch({type : 'SETUSER',payload : create_user})
                    history.push('/')
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

}

const login = (user,history) => {
    return(dispatch) => {
        const {email, pass } = user
        firebase.auth().signInWithEmailAndPassword(email , pass)
        .then((result) => {
            const user = result.user;

            var create_user = {
                email : user.email,
                uid : user.uid
            }
            console.log(create_user)
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type : 'SETUSER',payload : create_user})
                history.push('/')
            })
        })
        
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });

    }
}

export {
    sign_up,
    login
}