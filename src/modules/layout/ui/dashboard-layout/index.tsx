import Sidebar from "../sidebar";
import Header from "../header";
import { ContentArea, Layout, MainContent, SidebarWrapper } from "./styles.ts";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Layout>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainContent>
        <Header />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainContent>
    </Layout>
  );
};

export default DashboardLayout;
