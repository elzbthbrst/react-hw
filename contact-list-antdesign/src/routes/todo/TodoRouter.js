import {Route, Routes} from 'react-router-dom'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import NotFound from '../NotFound'

export default function TodoRouter () {
    return (
        <Routes>
        <Route path = '/' element= {<TodoList/>}/>
        <Route path = '/create' element= {<TodoForm/>}/>
        <Route path = '/:id/edit' element= {<TodoForm/>}/>
        <Route path = '/*' element= {<NotFound/>}/>
      </Routes>
    )
    
}