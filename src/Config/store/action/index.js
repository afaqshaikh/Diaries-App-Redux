import swal from "sweetalert";
import firebase from "../../firebase";

const sign_up = (user, history, setButtontext) => {
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
                        swal("Good job!", "Signup Sucessful", "success").then((res => {
                            if (res) {
                                history.push('/')
                            }
                        }))
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage) {
                    swal("Error!", `${errorMessage}`, "error");
                    setButtontext("Sign Up")
                }
            });
    }
}

const login = (user, history, setButtontext) => {
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
                swal("Good job!", "Login Sucessful", "success").then((res => {
                    if (res) {
                        history.push('/')
                    }
                }))
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage) {
                    swal("Error!", "Invalid Credentials", "error");
                    setButtontext("Login")
                }
            });
    }
}

export {
    sign_up,
    login,
}