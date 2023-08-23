//CORE
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

//CUSTOM
import { SidebarWrapper } from "./Sidebar.style";
import { IRootState } from "Redux/store";
import { Logo } from "../Logo";
import options from "Helpers/Options";
import { subMenuArgsType } from "Helpers/TypeConstants";
import { changeCurrent, toggleDrawer } from "Redux/App/Actions";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const Sidebar = (props: any) => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: IRootState) => state.App.collapsed);
  const openDrawer = useSelector((state: IRootState) => state.App.openDrawer);
  const drawerCurrent = useSelector((state: IRootState) => state.App.current);
  const DrawerCollapsed = collapsed && !openDrawer;
  const mode = DrawerCollapsed === true ? "vertical" : "inline";

  const onMouseEnter = () => {
    if (openDrawer === false) {
      dispatch(toggleDrawer());
    }
    return;
  };

  const onMouseLeave = () => {
    if (openDrawer === true) {
      dispatch(toggleDrawer());
    }
    return;
  };

  const onMenuChange = (data: {
    domEvent: {};
    key: string;
    keyPath: string[];
  }) => {
    dispatch(changeCurrent(data.keyPath))
  };

  const getMenuItem = (singleOption: subMenuArgsType) => {
    const { key, label, leftIcon, children } = singleOption;
    const url = "";

    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <span className="isoMenuHolder">
              <i className={leftIcon} />
              <span className="nav-text">{label}</span>
            </span>
          }
        >
          {children.map((child, index) => {
            const linkTo = `${url}/${child.key}`;
            return (
              <Menu.Item
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                key={index}
              >
                <Link to={linkTo} className="child-nav-text">
                  <span className="child-menu-holder">
                    <i className={child.leftIcon} />
                    <span className="nav-text">{child.label}</span>
                  </span>
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={key}>
        <Link to={`${url}/${key}`}>
          <span className="isoMenuHolder">
            <i className={leftIcon} />
            <span className="nav-text">{label}</span>
          </span>
        </Link>
      </Menu.Item>
    );
  };

  return (
    <SidebarWrapper data-rtl={"ltr"}>
      <Sider
        trigger={null}
        collapsible={true}
        width={240}
        collapsed={DrawerCollapsed}
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Logo collapsed={DrawerCollapsed} />
        <Menu
          className="isoDashboardMenu"
          theme="dark"
          mode={mode}
          onClick={onMenuChange}
          selectedKeys={drawerCurrent}
          openKeys={[]}
        >
          {options.map((singleOption) => getMenuItem(singleOption))}
        </Menu>
      </Sider>
    </SidebarWrapper>
  );
};

export default Sidebar;
