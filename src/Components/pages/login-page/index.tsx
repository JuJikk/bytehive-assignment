import BackButton from "../../atoms/back-button";
import LoginCard from "../../login-page/login-card";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center w-[28rem] mx-auto min-h-screen">
      <BackButton />
      <LoginCard/>
    </div>
  );
};

export default LoginPage;