import {IoTrashOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { TiChevronRightOutline } from "react-icons/ti";
import { ContainerTask } from "../styles/Styles";
import { useNavigate } from "react-router-dom";

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

      {tasks.map(task => <ContainerTask key={task.id}>
        <button onClick={() => onTaskClick(task.id)}>{task.title}
          {task.isCompleted && <span>     <GiCheckMark /></span>}
        </button>

        <button onClick={() => onSeeDatails(task)}><TiChevronRightOutline /></button>

        <button onClick={() => onDeleteTask(task.id)}><IoTrashOutline /> </button>
      </ContainerTask>)}


    </>
  )
}

export default Tasks