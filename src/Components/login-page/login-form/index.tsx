import { Button, TextField } from "@mui/material";
import theme from "../../../utils/themes.ts";
import {ErrorMessage, Field, Form, Formik} from "formik";
import { SigninSchema } from "../../../utils/schemas.ts";
import {logIn} from "../../../lib/auth";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate()

    const handleLogIn = async (email: string, password: string) => {
          try {
            await logIn(email, password)
              navigate("/")
          } catch (error) {
            console.error(error)
          }
        }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SigninSchema}
      onSubmit={(values) => {
          handleLogIn(values.email, values.password);
      }}
    >
      {() => (
          <Form className="mt-4">
              <Field
                  as={TextField}
                  label="Email address"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                  name="email"
              />
              <div className="h-1 !mt-0 !mb-6">
                  <ErrorMessage
                      component={"div"}
                      className="text-red-500 texs-sm"
                      name={"email"}
                  />
              </div>
              <Field
                  as={TextField}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  className="mb-6"
                  name="password"
              />
              <div className="h-1 !mt-0 !mb-6">
                  <ErrorMessage
                      component={"div"}
                      className="text-red-500 texs-sm"
                      name={"password"}
                  />
              </div>

              <Button
                  fullWidth
                  variant="contained"
                  sx={{backgroundColor: theme.palette.primary.main, height: "3rem"}}
                  className="!font-bold !normal-case !rounded-md"
                  type="submit"
              >
                  Log in
              </Button>
          </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
