import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

export const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`;
export const Logo = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  color: white;
  margin: 0;
`;
export const List = styled.li`
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  &:hover {
    color: #c291e2;
  }
  margin: 0 1rem;
`;

export const Button = styled.button`
  font: inherit;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #c291e2;
    color: #38015c;
  }
`;