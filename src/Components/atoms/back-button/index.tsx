import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
    return (
        <button className="cursor-pointer w-fit mb-4 gap-2 space-x-2">
            <ArrowBackIcon/>
            <span className="font-medium text-sm">Back</span>
        </button>
    );
};

export default BackButton;
