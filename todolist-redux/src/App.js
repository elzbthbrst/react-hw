
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList';
import './App.css';

import { useSelector} from 'react-redux';




function App() {
  const list = useSelector((state) => state.list)

  return (
    <div className="App">

      <TodoForm/>
      <TodoList
        list={list}
      />

    </div>
  );
}

export default App;
