import styled from 'styled-components';

export const Form = styled.form`
  padding: 40px;
  background-color: #fff;
`;

export const Image = styled.img`
  height: 260px;
  width: 460px;

  border-radius: 14px;
  object-fit: cover;
`;

export const Title = styled.p`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const Description = styled.p`
  margin: 0;
  max-width: 460px;
  color: #121417;
  font-size: 14px;
  line-height: 1.42;
`;



export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 460px;
  list-style: none;
  padding: 0;
  margin: 0;
 
 &:not(:last-child){
 margin-bottom:5px;
 }
`;

export const ListItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;

  &:not(:first-child)::before {
    content: '|';
    margin-right: 6px;
    margin-left: 6px;
    color: rgba(18, 20, 23, 0.5);
  }
`;
