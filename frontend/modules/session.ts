import { ReactNode } from 'react';
// @ts-ignore
import Cookies from 'js-cookie';

export type MenuItem = {
  path: string;
  label: ReactNode;
  subMenu?: MenuItem[];
};

/// Safe user menu items
export function safeUserMenu(menuItems: MenuItem[]): MenuItem[] {
  return [
    { path: '/signup', label: 'Sign up' },
    { path: '/signin', label: 'Sign in' },
    { path: '/exit', label: 'Exit' },
  ];
}

/// Safe main menu items
export function safeMainMenu(menuItems: MenuItem[]): MenuItem[] {
  return menuItems;
}
