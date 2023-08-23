//CORE
import { useSelector } from "react-redux";
import { Layout } from "antd";

//CUSTOM
import { ContentWrapper, WebsiteWrapper } from "./Website.style";
import { IRootState } from "Redux/store";
import Sidebar from "./common/Sidebar/Sidebar";
import Route from "Routes/Route";
import { SITE_CONFIG } from "Helpers/Constant";
import { TopBar } from "./common/TopBar";

const { Footer, Content } = Layout;

const Website = () => {
  const isLoggedIn = useSelector((state: IRootState) => state.Auth.isLoggedIn);

  return (
    <WebsiteWrapper>
      <Layout style={{ height: window.innerHeight }}>
        <Layout>
          {isLoggedIn && <Sidebar />}
          <Layout className="content-layout">
            {isLoggedIn && <TopBar />}
            <Content className="content">
              <ContentWrapper $ShowSideBar={isLoggedIn} $mobileHeight={138}>
                <Route />
              </ContentWrapper>
            </Content>
            {isLoggedIn && (
              <Footer className="footer-style">{SITE_CONFIG.footerText}</Footer>
            )}
          </Layout>
        </Layout>
      </Layout>
    </WebsiteWrapper>
  );
};

export default Website;
