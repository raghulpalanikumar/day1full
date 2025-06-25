import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodo] = useState([]); // array of tasks from backend
  const [task, setTask] = useState('');  // current input
  const [editing, setEditing] = useState(null); // editing object

  const fetchTodo = async () => {
    const response = await axios.get('http://localhost:3000/todo/');
    console.log(response.data);
    setTodo(response.data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleAddOrEdit = async(e) => {
    e.preventDefault();
    if(editing)
    {
      await axios.put(`http://localhost:3000/todo/update${editing._id}`,{task})
    }
    else
    {
      await axios.post('http://localhost:3000/todo/post', {task})

    }
    setEditing(null)
    setTask('')//after submit the form
    fetchTodo()//add panale katanum
  }
  const handleToggleStatus = async (todo) =>{
    await axios.put(`http://localhost:3000/todo/update${todo._id}`,{
      status: !todo.status
    })
    fetchTodo()
  }
  const handleEdit = (todo) => {
    setTask(todo.task)
    setEditing(todo)
    console.log(todo, 'todo')
  }
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/todo/${id}`)//yosi da router ku po
    fetchTodo()
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder="Enter the task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>
        {editing ? 'Update' : 'Add'}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span onClick={()=>{handleToggleStatus(todo)}} style={{cursor:"pointer",textDecoration: todo.status ? 'line-through' : 'none'}}> 
  
            
              <p>{todo.task}</p>
              </span>

            <button onClick={() => {
              setEditing(todo);
              setTask(todo.task);
            }}>Edit</button>

            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Todo;
