import styled from 'styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const InputLabel = styled.label`
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  padding: 13px 10px 10px 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.secondaryFontFamily};
`;

export const TextArea = styled(Input.withComponent('textarea'))`
  min-height: 200px;
  resize: vertical;
`;
