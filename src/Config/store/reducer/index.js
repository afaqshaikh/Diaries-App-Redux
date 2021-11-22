
const INITIAL_STATE = {
    diaries: [],
    current_user: {},
}

export default function DiaryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload
            })
        case 'GETDIARIES':
            return ({
                ...state,
                diaries: action.payload
            })
        default:
            return state
    }
}
