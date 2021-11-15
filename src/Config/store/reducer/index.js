const INITIAL_STATE ={
    users :  [{
        name : "Afaque"
    }],
}

export default (state = INITIAL_STATE,action)  =>{
    // switch (action.type) {
    //     case "GETUSERS" :
    //         return ({
    //             ...state,
    //             users : action.payload
    //         })
    //         case "SETUSER" :
    //         return ({
    //             ...state,
    //             current_user : action.payload
    //         })
    //         default:
    //             return state
    // }
    return state
}