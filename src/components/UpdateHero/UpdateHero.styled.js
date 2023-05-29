import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-arround;
  padding: 20px;
  gap: 20px;
  width: 350px;
  background-color: #a19ff5;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 5px -8px 14px -3px #a19ff5;
  -moz-box-shadow: 5px -8px 14px -3px #a19ff5;
  box-shadow: 5px -8px 14px -3px #a19ff5;
`;

export const Wrapper = styled.div``;

export const Label = styled.label`
  width: 250px;

  color: white;
  padding: 10px 0 8px 5px;
  border-radius: 5px;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  display: block;

  border: none;
  margin-top: 13px;
  background-color: transparent;
  padding: 10px 0 8px 5px;
  border-bottom: 1px solid black;
`;
export const Text = styled.textarea`
  margin-top: 20px;
  background-color: transparent;
  resize: none;
  display: block;
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
