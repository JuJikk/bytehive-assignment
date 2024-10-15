import styled from "styled-components";
import { Form } from "formik";
import { Button } from "@mui/material";

export const StyledForm = styled(Form)`
  margin-top: 1rem;
`;

export const SubmitButton = styled(Button)`
  && {
      width: 100%;
      height: 2.5rem;
      font-weight: bold;
      text-transform: none;
      border-radius: 0.5rem;
      background-color: #6366f1;
      color: #fff;
      margin-top: 0.5rem;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
`;

export const ErrorContainer = styled.div`
  height: 1.5rem;
`;
