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
  toggle: Cycle;
}

export interface MapRouteProps {
  route: {
    path: string;
    component: () => JSX.Element;
  }
}

export interface ToggleProps {
  toggle: Cycle;
}
