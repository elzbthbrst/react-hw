import {
    ACTION_CREATE,
    ACTION_REMOVE,
    ACTION_EDIT,
    ACTION_CREATE_EDIT_TODO, 
    ACTION_SET_LIST
} from '../actions/todoActions'

const DEFAUT_TODO = {}
const initialState = {
    list: [],
    editTodo: DEFAUT_TODO
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CREATE: return {
            ...state,
            list: [
                ...state.list,
                payload
            ]
        }
        case ACTION_REMOVE:
            const newList = state.list.filter(el => el.id !== payload.id)
            return {
                ...state,
                list: newList
            }

        case ACTION_EDIT:
            const updateList = state.list.map(el => el.id === payload.id ? payload : el)
            return {
                ...state,
                list: updateList,
                editTodo: DEFAUT_TODO
            }

        case ACTION_CREATE_EDIT_TODO:
            return {
                ...state,
                editTodo: payload
            }

        case ACTION_SET_LIST:

            return {
                ...state,
                list : payload
            }
        default: return state
    }
}