import { useState } from "react";
import styled from "styled-components";
import "./FormInput.css";

const Forminput = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;

const Label = styled.label`
  font-size: 1vw;
  color: black;
  padding: 0.1vw 0vw;
`;

const Span = styled.span`
  font-size: 1vw;
  padding: 0.1vw;
  color: red;
  display: none;
`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const hadleFocus = (e) => {
    setFocused(true);
  };
  return (
    <Forminput>
      <Label>{label}</Label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={hadleFocus}
        onFocus={() =>
          inputProps.name === "confirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <Span>{errorMessage}</Span>
    </Forminput>
  );
};

export default FormInput;
