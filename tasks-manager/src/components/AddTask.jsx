import { useState } from "react"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;
const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <>
      <Container>
        <Input type="text" placeholder='Digite o título da tarefa'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required />

        <TextArea type="text" placeholder='Digite a descrição da tarefa'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required />

        <Button onClick={() => {
          onAddTaskSubmit(title, description);
          setDescription("")
          setTitle("")
        }}>Adicionar</Button>
      </Container>
    </>
  )
}

export default AddTask