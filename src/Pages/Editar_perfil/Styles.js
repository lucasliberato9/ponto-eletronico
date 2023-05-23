import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 70px;
  font-family: "latoBold";
`;
export const Titulo = styled.div`
  text-align: center;
  font-size: 25px;
  height: 82px;
`;
export const Form = styled.form`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  gap: 15px;
  @media (max-width: 750px) {
    width: 70%;
  }
`;
export const Label = styled.label`
  color: #ffa000;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #d9d9d9;
  padding-left: 15px;
  border: none;
  border-radius: 2px;
  font-family: "latoRegular";
`;
export const DivInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  align-self: center;
  @media (max-width: 750px) {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
`;

export const DivRow = styled.div`
  width: 100%;
  gap: 60px;
  align-self: center;
`;
export const DivEmail = styled.div`
  width: 100%;
  gap: 60px;
  align-self: center;
`;
export const DivButton = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  gap: 60px;
  margin-top: 48px;
  margin-bottom: 50px;
  @media (max-width: 750px) {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
`;
