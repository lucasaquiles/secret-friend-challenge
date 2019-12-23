import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    input {
      margin-bottom: 20px;
      width: 30vw;
    }
  }
`;