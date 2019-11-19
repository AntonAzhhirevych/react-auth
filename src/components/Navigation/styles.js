import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
export const StyledNavLink = styled(Link)`
  padding: 8px 16px;
  color: skyblue;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
