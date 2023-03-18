import styled from '@emotion/styled';

export const FormSubmit = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding-bottom: 20px;
  padding-left: 15px;
`;

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 170px;
`;

export const Input = styled.input`
  padding-top: 5px;
  margin-top: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const ButtonSubmit = styled.button`
  width: 90px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid grey;
`;
