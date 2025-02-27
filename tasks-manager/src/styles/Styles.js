import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

export const ContainerTask = styled.div`
  display: flex;
  max-width: 400px;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  gap: 20px;
  padding: 20px;
`;

export const TitleH1 = styled.h1`
  color: #000;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;
