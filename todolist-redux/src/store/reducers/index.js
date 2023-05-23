import {
 ACTION_CREATE,
ACTION_REMOVE,
ACTION_EDIT,
ACTION_CREATE_EDIT_TODO
} from '../actions'

const DEFAUT_TODO = {}
const initialState = {
    list: [
        { "title": "help", "status": false, "done": true, "id": "17" },
        { "title": "ignore", "status": true, "done": true, "id": "20" },
        { "title": "hero", "status": false, "done": false, "id": "21" },
        { "title": "indigo", "status": false, "done": true, "id": "22" },
        { "title": "telephone", "status": false, "done": false, "id": "23" }
    ],
    editTodo: DEFAUT_TODO
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CREATE: return {
            ...state,
            list: [
                ...state.list,
                {
                    ...payload,
                    id: Math.random()
                }
            ]
        }
        case ACTION_REMOVE:
            const newList = state.list.filter(el => el.id !== payload)
            return {
                ...state,
                list: newList
            }

        case ACTION_EDIT:
            const updateList = state.list.map(el => el.id === payload.id ? payload : el)
            return {
                ...state,
                list: updateList
            }
        case ACTION_CREATE_EDIT_TODO:
            
            return {
                ...state,
                editTodo: payload
            }
        default: return state
    }
}