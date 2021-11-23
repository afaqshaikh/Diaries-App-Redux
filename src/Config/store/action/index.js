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
                if (errorMessage) alert("Invalid Credentials")

            });

    }

}

const login = (user, history) => {
    return (dispatch) => {
        const { email, pass } = user
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((result) => {
                const user = result.user;

                if (!user) {
                    <div className="text-center">
                        <div className="spinner-border text-white fw-bold fs-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                }

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
                if (errorMessage) alert("Invalid Credentials")
            });

    }
}

const get_diaries = () => {
    return (dispatch) => {
        let diaries = []
        firebase.database().ref('/').child('diary').on('child_added', (data) => {
            diaries.push(data.val())
        })
        dispatch({ type: 'GETDIARIES', payload: diaries })
    }
}

export {
    sign_up,
    login,
    get_diaries
}