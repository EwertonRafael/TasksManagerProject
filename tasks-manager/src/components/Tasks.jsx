import { IoChevronForwardOutline, IoTrashOutline   } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { ContainerTask } from "../styles/Styles";

const Tasks = ({tasks, onTaskClick, onDeleteTask}) => {
  return (
    <>
    
      {tasks.map(task => <ContainerTask key={task.id}>
        <p onClick={() => onTaskClick(task.id)}>{task.title}
          {task.isCompleted && <span>     <GiCheckMark /></span>}
        </p>

        <p><IoChevronForwardOutline /></p>

        <p onClick={() => onDeleteTask(task.id)}><IoTrashOutline/> </p>
        </ContainerTask>)}
    
    
    </>
  )
}

export default Tasks