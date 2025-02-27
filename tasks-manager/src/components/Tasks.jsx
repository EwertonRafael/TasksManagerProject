import { IoTrashOutline, } from "react-icons/io5";
import { LuSquareChevronRight } from "react-icons/lu";

import { GiCheckMark } from "react-icons/gi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 25px auto;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.15);
  }
  button {
    background: none;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    font-size: 1.2rem;
    color: #6c757d;
  }
`;
const ButtonIcons = styled.div`
  display: flex;
  margin-right: 20px;
  background: fixed;
  gap: 10px;

  button:first-child:hover {
    color: #007bff;
    transform: scale(1.25);

  }
  button:last-child:hover {
    color: #f02d2d;
    transform: scale(1.25);
  }
`;

const Tasks = ({ tasks, onTaskClick, onDeleteTask }) => {
  const navigate = useNavigate();

  const onSeeDatails = (task) => {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <>
      {tasks.map(task => <Container key={task.id}>
        <button
          onClick={() => onTaskClick(task.id)}
          style={{ textDecoration: task.isCompleted ? "line-through" : "none", color: task.isCompleted ? "#f02d2d" : "inherit" }}>
          {task.title}
          {task.isCompleted && <GiCheckMark />}
        </button>

        <ButtonIcons>
          <button title="Ver detalhes" onClick={() => onSeeDatails(task)}>
            <LuSquareChevronRight />
          </button>

          <button title="Excluir" onClick={() => onDeleteTask(task.id)}>
            <IoTrashOutline />
          </button>
        </ButtonIcons>
      </Container>
      )}
    </>
  )
}

export default Tasks