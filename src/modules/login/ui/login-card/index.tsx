import { Link, Typography } from "@mui/material";
import LoginForm from "../login-form";
import { StyledCard } from "./styles.ts";

const LoginCard = () => {
  return (
    <StyledCard>
      <div>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Log in
        </Typography>
        <Typography
          style={{
            color: "#6C737F",
          }}
        >
          Don&apos;t have an account?{" "}
          <Link href="#" underline="hover" style={{ color: "#6366F1" }}>
            Register
          </Link>
        </Typography>
      </div>

      <LoginForm />

      <Link
        href="#"
        underline="hover"
        style={{ color: "#6366F1", textAlign: "center" }}
      >
        Forgot password?
      </Link>
    </StyledCard>
  );
};

export default LoginCard;
