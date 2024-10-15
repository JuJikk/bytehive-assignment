import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  HeaderContainer,
  HeaderContent,
  IconButton,
  UserInfo,
  Username,
} from "./styles.ts";
import {useGetUserData} from "../../../users/api";

const Header = () => {
  const { data: userData } = useGetUserData();

  return (
    <HeaderContainer>
      <HeaderContent>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <UserInfo>
          <Avatar src={userData?.avatar} alt="User avatar" />
          <Username>{userData?.name}</Username>
          <KeyboardArrowDownIcon style={{ marginLeft: "2rem" }} />
        </UserInfo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
