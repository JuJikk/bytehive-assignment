import { Card, Link, Typography, useTheme } from "@mui/material";
import LoginForm from "../login-form";

const LoginCard = () => {
  const theme = useTheme();
  return (
    <Card className="bg-white shadow-lg !rounded-2xl !p-8 flex flex-col justify-between !h-[23rem]">
      <div>
        <Typography variant="h6" className="!font-bold">
          Log in
        </Typography>
        <Typography
          className="mb-8"
          sx={{ color: theme.palette.secondary.light }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            underline="hover"
            sx={{ color: theme.palette.primary.main }}
          >
            Register
          </Link>
        </Typography>
      </div>

      <LoginForm />

      <Link
        href="#"
        className="text-center"
        underline="hover"
        sx={{ color: theme.palette.primary.main }}
      >
        Forgot password?
      </Link>
    </Card>
  );
};

export default LoginCard;
