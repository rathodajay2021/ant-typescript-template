export type contentWrapperPropsType = {
  $ShowSideBar: boolean;
  $mobileHeight: number;
};

export type RouteListType = {
  path: string;
  exact: boolean;
  Component: React.ReactNode;
  hasChildren: boolean;
  children?: [];
  // component: JSX.Element;
}[];

export type ProtectedRouteType = {
  children: React.ReactNode;
};

export type LogoPropsType = {
  collapsed: boolean;
};

export type subMenuArgsType = {
  key: string;
  label: string;
  leftIcon: string;
  order: Number;
  children?: {
    key: String;
    label: string;
    leftIcon: string;
  }[];
};

export type RTLType = {
  "data-rtl": "rtl" | "ltr"
}