import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 272px); */
  /* grid-template-columns: repeat(auto-fit,minmax(272px,1fr)); */
  max-width: 1178px;
  column-gap: 30px;
  row-gap: 50px;

  list-style: none;
  padding: 30px 0;
  margin: 0 auto;

/* ${({ variant }) => { return `grid-template-columns: ${variant ? "repeat(auto-fit,minmax(272px,1fr))" : "repeat(auto-fit, 272px)"}` }} */
 ${({ variant }) => {
    return variant
      ? `
        grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
      `
      : `
        grid-template-columns: repeat(auto-fit, 272px);
        @media (max-width: 606px) {
          grid-template-columns: 100%;
        }
      `;
  }}

`;

export const Item = styled.li`
  /* width: 272px; */
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
