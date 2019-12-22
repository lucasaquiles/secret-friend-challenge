import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  p {
    text-align: center;
    margin: 10px 0 ;
  }
  input {
    font-size: 24px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #e3e3e3;
  }

  button {
    font-size: 24px;
    padding: 5px;
    background: blue;
    border: none;
    color: #F3f3f3;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
