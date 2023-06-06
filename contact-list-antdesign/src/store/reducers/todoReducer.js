import {
    ACTION_CREATE,
    ACTION_REMOVE,
    ACTION_EDIT,
    ACTION_CREATE_EDIT_TODO,
    ACTION_SET_LIST,
    ACTION_CLEAR_EDIT_TODO,
    ACTION_SET_FILTER
} from '../actions/todoActions'

export const FILTRES = {
    All: 'all',
    DONE: 'done',
    ACTIVE: 'active',
}

export const DEFAUT_TODO = { "title": "" }
const initialState = {
    list: [],
    editTodo: DEFAUT_TODO,
    filter: FILTRES.All
}

export default function todoReducer(state = initialState, { type, payload }) {
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

        case ACTION_CLEAR_EDIT_TODO:
            return {
                ...state,
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
                list: payload,
            }
        case ACTION_SET_FILTER:

            return {
                ...state,
                filter: payload
            }
        default: return state
    }
}