import logo from './logo.svg';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
