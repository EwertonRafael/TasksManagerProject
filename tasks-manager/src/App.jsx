import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import styled from 'styled-components'
import FilterTasks from './components/FilterTasks'

const Title = styled.h1`
  color: #343a40;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []
  )
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setFilteredTasks(tasks);
  }, [tasks])


  const onTaskClick = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    });
    setTasks(newTask)
  }
  const onDeleteTask = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  const onAddTaskSubmit = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      isCompleted: false
    }
    if (title.trim() && description.trim()) {
      setTasks([...tasks, newTask])
    } else {
      alert("Preencha todos os campos")
    }
  }
  return (
    <>
      <Title>Gerenciador de Tarefas</Title>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <FilterTasks tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <Tasks tasks={filteredTasks} onTaskClick={onTaskClick}onDeleteTask={onDeleteTask} />
    </>
  )
}

export default App
