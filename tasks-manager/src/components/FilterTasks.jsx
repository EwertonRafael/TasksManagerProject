import styled from "styled-components";
import { useState } from "react";

const Filter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const FilterButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    } 
`;

const FilterTasks = ({ tasks, setFilteredTasks }) => {
  const [filter, setFilter] = useState('todas');

  const filterTasks = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === "concluídas") {
      setFilteredTasks(tasks.filter(task => task.isCompleted));
    } else if (selectedFilter === "pendentes") {
      setFilteredTasks(tasks.filter(task => !task.isCompleted));
    } else {
      setFilteredTasks(tasks);
    }
  };
  return (
    <>
      <Filter>
        <FilterButton onClick={() => filterTasks('todas')} active={filter === "todas"}>Todas</FilterButton>
        <FilterButton onClick={() => filterTasks('pendentes')} active={filter === "pendentes"}>Pendentes</FilterButton>
        <FilterButton onClick={() => filterTasks('concluídas')} active={filter === "concluídas"}>Concluídas</FilterButton>
      </Filter>
    </>
  )
}

export default FilterTasks