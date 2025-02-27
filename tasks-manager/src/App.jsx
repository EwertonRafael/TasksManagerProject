import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import {TitleH1} from './styles/Styles.js'

function App() {
const [tasks, setTasks] = useState([{
  id: 1,
  title: 'Estudar React',
  description: 'Estudar React com Vite',
  isCompleted: false
},
{
  id: 2,
  title: 'Estudar Vue',
  description: 'Estudar Vue com Vite',
  isCompleted: false
},
{
  id: 3,
  title: 'Estudar Angular',
  description: 'Estudar Angular com Vite',
  isCompleted: false
}
])

const onTaskClick = (taskId) => {
  const newTask = tasks.map(task => {
    if(task.id === taskId){
      return {...task, isCompleted: !task.isCompleted}
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
    id: tasks.length + 1,
    title,
    description,
    isCompleted: false
  }
  if(title.trim() && description.trim()){
    setTasks([...tasks, newTask])
  }else{
    alert("Preencha todos os campos")
  }
}
  return (
    <>
      <TitleH1>Gerenciador de Tarefas</TitleH1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>
    </>
  )
}

export default App
