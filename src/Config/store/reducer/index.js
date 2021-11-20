
const INITIAL_STATE ={
    counter: {name:"afaque"},
    user: [],
    current_user: {},
}

export default function DiaryReducer(state = INITIAL_STATE,action){
    switch (action.type) {
            case "SETUSER" :
            return ({
                ...state,
                current_user : action.payload
            })
            default :
            return state
    }
}

  // case "GETUSERS" :
        //     return ({
        //         ...state,
        //         users : action.payload
        //     })