import { TextField } from "@mui/material";
import { ErrorMessage, Field, Formik } from "formik";
import { SigninSchema } from "../../utils/schemas.ts";
import { logIn } from "../../api";
import { useNavigate } from "react-router-dom";
import {
  ErrorContainer,
  ErrorText,
  StyledForm,
  SubmitButton,
} from "./styles.ts";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogIn = async (email: string, password: string) => {
    try {
      await logIn(email, password);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SigninSchema}
      onSubmit={(values) => handleLogIn(values.email, values.password)}
    >
      {() => (
        <StyledForm>
          <Field
            as={TextField}
            label="Email address"
            variant="outlined"
            fullWidth
            name="email"
          />
          <ErrorContainer>
            <ErrorMessage name="email" component={ErrorText} />
          </ErrorContainer>

          <Field
            as={TextField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
          />
          <ErrorContainer>
            <ErrorMessage name="password" component={ErrorText} />
          </ErrorContainer>

          <SubmitButton type="submit">Log in</SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
