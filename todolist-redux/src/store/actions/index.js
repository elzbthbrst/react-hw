export const ACTION_CREATE = 'create'
export const ACTION_REMOVE = 'remove'
export const ACTION_EDIT = 'edit'
export const ACTION_CREATE_EDIT_TODO = 'create editTodo'

export function create(todo) {
    return { type: ACTION_CREATE, payload: todo }
}
export function remove(id) {
    return { type: ACTION_REMOVE, payload: id }
}
export function edit(todo) {
    return { type: ACTION_EDIT, payload: todo }
}
export function createEditTodo(todoEdit) {
    return { type: ACTION_CREATE_EDIT_TODO, payload: todoEdit }
}

