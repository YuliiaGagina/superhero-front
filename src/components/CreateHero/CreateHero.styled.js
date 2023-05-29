import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 500px;
  background-color: #a19ff5;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 5px -8px 14px -3px #a19ff5;
  -moz-box-shadow: 5px -8px 14px -3px #a19ff5;
  box-shadow: 5px -8px 14px -3px #a19ff5;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  width: 120px;
  background-color: black;
  color: white;
  padding: 10px 0 8px 5px;
  border-radius: 5px;
`;
export const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 10px 0 8px 5px;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;
export const Text = styled.textarea`
  background-color: transparent;
  resize: none;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  background-color: beige;
  padding: 10px 60px;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid black;
  }
`;
