import React from 'react';
import { GiNoodles,GiChopsticks } from 'react-icons/gi';
import { FaPizzaSlice ,FaHamburger} from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <CategoryList>
      <CategoryItem to="/home">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CategoryItem>
      <CategoryItem to="/home">
        <GiNoodles />
        <h4>Thai</h4>
      </CategoryItem>
      <CategoryItem to="/home">
        <FaHamburger />
        <h4>American</h4>
      </CategoryItem>
      <CategoryItem to="/home">
        <GiChopsticks />
        <h4>Japanesee</h4>
      </CategoryItem>
    </CategoryList>
  );
}

const CategoryList = styled.div`
  width: 40%;
  margin: auto;
  color: white;
  display: flex;
  justify-content: space-evenly;
`;

const CategoryItem = styled(NavLink)`
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  h4 {
    font-size: 0.7rem;
    color: white;
  }
  svg {
    font-size: 1.5rem;
    color: white;
  }
`;

export default Category;
