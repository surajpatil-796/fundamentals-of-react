import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/actions/actions'

const CreateTodo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(todo))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default CreateTodo;