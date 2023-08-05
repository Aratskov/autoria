import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 100%;
  /* max-width: 274px; */
  height: 268px;
  border-radius: 14px;
  object-fit:cover;
`;

export const Title = styled.div`
display: flex;
justify-content: space-between;
margin: 14px 0 8px;

color: #121417;
font-size: 16px;
line-height: 1.5;
`
export const Text = styled.p`
margin: 0;
color: #121417;
font-size: 16px;
line-height: 1.5;
`

export const SecondText = styled.p`
font-size: 12px;
color: rgba(18, 20, 23, 0.50);
line-height: 1.5;
margin: 0;
`

export const ToggleLike = styled.button`
position: absolute;
top:14px;
right: 14px;

padding: 0;

background-color: transparent;
border: none;
outline: transparent;

cursor: pointer;

&:hover{
transform: scale(1.3);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

`
