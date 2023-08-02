import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  width: calc((272px * 4) + 90px);

  list-style: none;
  padding: 30px 0;
  margin: 0;
`;

export const Item = styled.li`
  width: 272px;
  height: 426px;
`;

export const ButtonLoad = styled.button`
  margin-left: auto;
  margin-right: auto;

  background-color: transparent;
  color: #3470ff;

  border: none;
  outline: none;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  cursor: pointer;

  &:hover {
    color: #0b44cd;
    transform: scale(1.3);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
