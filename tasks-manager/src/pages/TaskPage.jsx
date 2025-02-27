import { useSearchParams } from "react-router-dom"
import styled from "styled-components";
import { TiChevronLeftOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: none;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  h1 {
    font-size: 1.5rem;
    color: #000;
  }
`;
const BackButton = styled.button`

  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #6c757d;
  transition: 0.3s;

  &:hover {
    color: #007bff;
    transform: scale(1.06);
  }
`;
const TaskContent = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.2rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: #000;
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #0e0e0e;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
`;
const TaskPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <>
      <Container>
        <Header>
          <BackButton title="Voltar" onClick={() => navigate(-1)}>
            <TiChevronLeftOutline />
          </BackButton>
          <h1>DETALHE DA TAREFA</h1>
        </Header>

        <TaskContent>
          <h2>{title}</h2>
          <p>{description}</p>
        </TaskContent>
      </Container>
    </>
  )
}

export default TaskPage