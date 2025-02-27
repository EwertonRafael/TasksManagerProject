import { useSearchParams } from "react-router-dom"
import { Container } from "../styles/Styles";
import { TiChevronLeftOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const TaskPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <>
      <Container>
        <div>
          <button onClick={() => navigate(-1)}><TiChevronLeftOutline/></button>
          <h1>Detalhe da Tarefa</h1>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Container>
    </>
  )
}

export default TaskPage