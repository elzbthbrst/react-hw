import TodoApi from "../../api/TodoApi"




export const ACTION_SET_LIST = 'ACTION_SET_LIST'
export const ACTION_CREATE = 'ACTION_CREATE'
export const ACTION_REMOVE = 'ACTION_REMOVE'
export const ACTION_EDIT = 'ACTION_EDIT'
export const ACTION_CREATE_EDIT_TODO = 'ACTION_CREATE_EDIT_TODO'
export const ACTION_CLEAR_EDIT_TODO = 'ACTION_CLEAR_EDIT_TODO'
export const ACTION_SET_FILTER = 'ACTION_SET_FILTER'



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

export function clearEditTodo() {
    return { type: ACTION_CLEAR_EDIT_TODO}
}

export function remove(todo) {
    return { type: ACTION_REMOVE, payload: todo }
}

export function update(todo) {
    return { type: ACTION_EDIT, payload: todo }
}

export function createEditTodo(todo) {
    return { type: ACTION_CREATE_EDIT_TODO, payload: todo }
}
export function setList(list) {
    return { type: ACTION_SET_LIST, payload: list }
}
export function setFilter(filter) {
    return { type: ACTION_SET_FILTER, payload: filter }
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

export function fetchOneTodo(id) {
    return (dispatch) => {
        TodoApi
            .getOne(id)
            .then((todo) => {
                dispatch(createEditTodo(todo))
            })
            .catch(e => alert(e))
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
