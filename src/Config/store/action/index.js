import firebase from "../../firebase";

const sign_up = (user, history) => {
    return (dispatch) => {
        const { email, pass } = user
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((result) => {
                const user = result.user;
                var create_user = {
                    email: user.email,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                    .then(() => {
                        dispatch({ type: 'SETUSER', payload: create_user })
                        history.push('/')
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage) alert(errorMessage)
            });
    }
}

const login = (user, history) => {
    return (dispatch) => {
        const { email, pass } = user
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((result) => {
                const user = result.user;
                var login_user = {
                    email: user.email,
                    uid: user.uid
                }
                dispatch({ type: 'SETUSER', payload: login_user })
                history.push('/') 
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage) alert("Invalid Credentials")
            });
    }
}

export {
    sign_up,
    login,
}