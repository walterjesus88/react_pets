// /components/TodoList.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import TodoItem from './TodoItem';
import { fetchData } from '../services/apiService';

const TodoList = () => {
  const [task, setTodos] = useState([]);
  const todos = useSelector((state) => state.todos); // Acceder al estado global
  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (task.trim()) {
  //     dispatch(addTodo(task));
  //     setTask('');
  //   }
  // };


  // return (
  //   <div>
  //     <h1>Todo List</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={task}
  //         onChange={(e) => setTask(e.target.value)}
  //         placeholder="Add a new task"
  //       />
  //       <button type="submit">Add</button>
  //     </form>
  //     <ul>
  //       {todos.map((todo) => (
  //         <TodoItem key={todo.id} todo={todo} />
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default TodoList;
