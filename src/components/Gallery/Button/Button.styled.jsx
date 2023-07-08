import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  min-width: 180px;
  margin: 0 auto;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
  background-size: 300% 100%;
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  transition: all .4s ease-in-out;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;

  :hover {
    background-position: 100% 0;
    transition: all .4s ease-in-out;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
  }
`;
