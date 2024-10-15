import styled from "styled-components";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 240px;
  flex-shrink: 0;
  background-color: #1c2536;
  color: #ffffff;
  overflow-x: hidden;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #5048e5;
  border-radius: 8px;
  margin-right: 12px;
`;

export const SectionTitle = styled(Typography)`
  && {
    color: #9da4ae;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
  }
`;

export const StyledListItem = styled(Link)<{ active?: boolean }>`
  && {
    cursor: pointer;
    border-radius: 8px;
    margin: 0 8px;
    padding: 4px 16px;
    background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.08)" : "transparent"};
    display: flex;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  && {
    color: #9da4ae;
    min-width: 40px;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  && {
    color: #ffffff;
  }
`;

export const DocumentationButton = styled(Button)`
  && {
    color: #ffffff;
    border-color: #ffffff;
    margin: 16px;
    width: 85%;
    text-transform: none;
    border-radius: 12px;
  }
`;
