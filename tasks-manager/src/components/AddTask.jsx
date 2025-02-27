import { Container } from "../styles/Styles"
import { useState } from "react"

const AddTask = ({onAddTaskSubmit}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <>
    <Container>
      <input type="text" placeholder='Digite o título da tarefa'
      value={title} 
      onChange={(e) => setTitle(e.target.value)}/>

      <input type="text" placeholder='Digite a descrição da tarefa' 
      value={description}
      onChange={(e) => setDescription(e.target.value)}/>

      <button onClick={() => onAddTaskSubmit(title, description)}>Adicionar</button>
    </Container>
    </>
  )
}

export default AddTask