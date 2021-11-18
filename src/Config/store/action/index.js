// export const userLogin = "USERLOGIN" 
import firebase,{createUserWithEmailAndPassword} from "../../firebase"

const login = (e) => {
    return (dispatch) => {
        e.preventDefault()
        console.log("Login Clicked")
        const auth = getAuth();
        firebase.createUserWithEmailAndPassword(auth)
            .then((result) => {
                var token = result.credential.accessToken;
                const user = result.user;
                console.log("User ==> ",user, token)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

}

export {
    login
}