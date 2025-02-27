import { IoChevronForwardOutline, IoTrashOutline   } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

const Tasks = ({tasks, onTaskClick, onDeleteTask}) => {
  return (
    <>
      <h1>{tasks.map(task => <li key={task.id}>
        <button onClick={() => onTaskClick(task.id)}>{task.title}
          {task.isCompleted && <span><GiCheckMark /></span>}
        </button>

        <button><IoChevronForwardOutline /></button>

        <button onClick={() => onDeleteTask(task.id)}><IoTrashOutline/> </button>
      </li>)}
      </h1>
    </>
  )
}

export default Tasks