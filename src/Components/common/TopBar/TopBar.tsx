//CORE
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

//ICONS
import { MenuOutlined } from "@ant-design/icons";

//CUSTOM
import { TopBarWrapper } from "./TopBar.style";
import { IRootState } from "Redux/store";
import { hideSideBar, showSideBar } from "Redux/App/Actions";

const { Header } = Layout;

const TopBar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: IRootState) => state.App.collapsed
  );

  const toggleCollapsed = () => {
    if (collapsed) {
      dispatch(showSideBar());
    } else {
      dispatch(hideSideBar());
    }
  };

  return (
    <TopBarWrapper>
      <Header className={`isomorphicTopbar ${collapsed && "collapsed"}`}>
        <div className="isoLeft">
          <button
            className={
              collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
            }
            onClick={toggleCollapsed}
          >
            <MenuOutlined className="menu-icon" />
          </button>
        </div>
      </Header>
    </TopBarWrapper>
  );
};

export default TopBar;
