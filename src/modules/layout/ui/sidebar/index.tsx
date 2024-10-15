import { Box, List, Typography } from "@mui/material";
import {
  Home,
  BarChart,
  ShoppingCart,
  CurrencyBitcoin,
  Inventory,
  ShoppingBasket,
  Receipt,
  LocalShipping,
  Description,
} from "@mui/icons-material";
import {
  DocumentationButton,
  Logo,
  LogoIcon,
  SectionTitle,
  SidebarContainer,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "./styles.ts";
import { NavItem } from "../../types";
import {useLocation} from "react-router-dom";

const mainNavItems: NavItem[] = [
  { id: 0, title: "Overview", link: "/", icon: <Home /> },
  { id: 1, title: "Analytics", link: "/analytics", icon: <BarChart /> },
  { id: 2, title: "Ecommerce", link: "/ecommerce", icon: <ShoppingCart /> },
  { id: 3, title: "Crypto", link: "/crypto", icon: <CurrencyBitcoin /> },
];

const analyticsNavItems: NavItem[] = [
  { id: 4, title: "Products", link: "/products", icon: <Inventory /> },
  { id: 5, title: "Orders", link: "/orders", icon: <ShoppingBasket /> },
  { id: 6, title: "Invoices", link: "/invoices", icon: <Receipt /> },
  { id: 7, title: "Logistics", link: "/logistics", icon: <LocalShipping /> },
];

const Sidebar = () => {
const { pathname } = useLocation();

  return (
    <SidebarContainer>
      <Logo>
        <LogoIcon />
        <Box>
          <Typography sx={{ fontWeight: 600 }} variant="h6">
            Devias
          </Typography>
          <Typography variant="caption" className="text-gray-400">
            Premium tier
          </Typography>
        </Box>
      </Logo>
      <List>
        {mainNavItems.map((item) => (
          <StyledListItem
            to={item.link}
            key={item.title}
            active={pathname === item.link && true}
          >
            <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            <StyledListItemText primary={item.title} />
          </StyledListItem>
        ))}
      </List>
      <SectionTitle>ANALYTICS</SectionTitle>
      <List>
        {analyticsNavItems.map((item) => (
          <StyledListItem
            to={item.link}
            key={item.title}
            active={pathname === item.link && true}
          >
            <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            <StyledListItemText primary={item.title} />
          </StyledListItem>
        ))}
        <DocumentationButton variant="outlined" startIcon={<Description />}>
          Documentation
        </DocumentationButton>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
