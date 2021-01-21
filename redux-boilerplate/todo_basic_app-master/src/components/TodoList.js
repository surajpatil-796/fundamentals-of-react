import React from 'react';
import {useSelector} from 'react-redux'

const TodoList = () => {
  const list = useSelector((state) => state.todoList)

  return (
    <ul>
      {list.map((item, index) => 
        <li key={index}>{item}</li>
      )}
    </ul>
  );
};

export default TodoList;