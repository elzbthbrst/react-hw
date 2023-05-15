import { useState } from 'react'
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList';
import './App.css';

const defaultList = [
  { "title": "help", "status": false, "done": true, "id": "17" },
  { "title": "ignore", "status": true, "done": true, "id": "20" },
  { "title": "hero", "status": false, "done": false, "id": "21" },
  { "title": "indigo", "status": false, "done": true, "id": "22" },
  { "title": "telephone", "status": false, "done": false, "id": "23" }
]


function App() {
  const [list, setList] = useState(defaultList)
  const [editTodo, setEditTodo] = useState({})

  function onRemoveTodo(id) {
    const newList = list.filter(el => el.id !== id)
    setList(newList)
  }

  function onFormSubmit(todo) {
    
    setEditTodo({})

    if (todo.id) {
      const newList = list.map(el => el.id === todo.id ? todo : el)

      setList(newList)
      
    } else {
      const todoFromServer = {
        ...todo, 
        id: Math.random()
      }
       
      setList([...list, todoFromServer])

    }
  }

  function onEditTodo(todo) {
    setEditTodo(todo)

  }

  return (
    <div className="App">

      <TodoForm
        onFormSubmit={onFormSubmit}
        editTodo ={editTodo}
      />
      <TodoList
        list={list}
        onRemoveTodo={onRemoveTodo}
        onEditTodo={onEditTodo}
      />

    </div>
  );
}

export default App;
