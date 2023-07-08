import styled from 'styled-components';

export const Button = styled.button`
      font-size: 16px;
      font-weight: 600;
      width: 300px;
      height: 50px;
      margin: 0 auto;
      color: #fff;
      cursor: pointer;
      text-align: center;
      border: none;
      background-size: 300% 100%;
      border-radius: 50px;
      moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
      background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
      box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
      :hover {
          background-position: 100% 0;
          moz-transition: all .4s ease-in-out;
          -o-transition: all .4s ease-in-out;
          -webkit-transition: all .4s ease-in-out;
          transition: all .4s ease-in-out;
        }
      :focus{
      outline: none;
    }
`;
