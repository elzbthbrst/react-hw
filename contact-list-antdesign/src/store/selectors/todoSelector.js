import { createSelector } from 'reselect'
import { FILTRES } from '../reducers/todoReducer'

export const selectList = state => state.todo.list
export const selectFilter = state => state.todo.filter
export const selectEditTodo = state => state.todo.editTodo


export const selectFilterList = createSelector (
    selectList,
    selectFilter,
    (list, filter) => {
        if (filter === FILTRES.ACTIVE) {
            return list.filter(todo => todo.done === false)
        }
        if (filter === FILTRES.DONE) {
            return list.filter(todo => todo.done === true)
        }
        return list 
    }
)
