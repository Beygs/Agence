interface RouteConstant {
  name: string;
  route: string;
  routes?: {
    [...key: string]: RouteConstant;
  }
}

export interface NavbarProps {
  navItems: RouteConstant[];
}

export interface NavItemProps {
  navItem: RouteConstant;
}

export interface MapRouteProps {
  route: {
    path: string;
    component: () => JSX.Element;
  }
}
