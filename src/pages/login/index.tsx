import BackButton from "../../shared/ui/back-button";
import LoginCard from "../../modules/login/ui/login-card";
import {LoginPageWrapper} from "./styles.ts";

const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <BackButton />
            <LoginCard />
        </LoginPageWrapper>
    );
};

export default LoginPage;
