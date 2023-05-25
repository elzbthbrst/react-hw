import TodoApi from "../../api/TodoApi"




export const ACTION_SET_LIST = 'ACTION_SET_LIST'
export const ACTION_CREATE = 'ACTION_CREATE'
export const ACTION_REMOVE = 'ACTION_REMOVE'
export const ACTION_EDIT = 'ACTION_EDIT'
export const ACTION_CREATE_EDIT_TODO = 'ACTION_CREATE_EDIT_TODO'

export function fetchList() {
    return (dispatch) => {
        TodoApi
            .getList()
            .then((list) => {
                dispatch(setList(list))
            })
            .catch(e => alert(e))
    }
}

export function create(todo) {
    return { type: ACTION_CREATE, payload: todo }
}

export function remove(todo) {
    return { type: ACTION_REMOVE, payload: todo }
}

export function update(todo) {
    return { type: ACTION_EDIT, payload: todo }
}

export function createEditTodo(todoEdit) {
    return { type: ACTION_CREATE_EDIT_TODO, payload: todoEdit }
}
export function setList(list) {
    return { type: ACTION_SET_LIST, payload: list }
}

export function toggleBackground(todo) {
    return (dispatch) => {
        const newTodo = {
            ...todo,
            done: !todo.done
        }
        dispatch(save(newTodo))
    }

}

export function fetchDelete(todo) {
    return (dispatch) => {
        TodoApi
            .delete(todo.id)
            .then(() => {
                dispatch(remove(todo))
            })
            .catch(e => alert(e))
    }
}

export function save(todo) {
    return (dispatch) => {
        if (todo.id) {
            TodoApi
                .update(todo.id, todo)
                .then(() => {
                    dispatch(update(todo))
                })
                .catch(e => alert(e))
        } else {

            TodoApi
                .create(todo)
                .then((todoFromServer) => {
                    dispatch(create(todoFromServer))
                })
                .catch(e => alert(e))

        }
    }
}
