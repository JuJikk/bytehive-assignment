import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {BackText, Button} from "./styles.ts";

const BackButton = () => {
    return (
        <Button>
            <ArrowBackIcon sx={{color: "#111927"}} />
            <BackText>Back</BackText>
        </Button>
    );
};

export default BackButton;
