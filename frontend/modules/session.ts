import { ReactNode } from 'react';

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
  ];
}

/// Safe main menu items
export function safeMainMenu(menuItems: MenuItem[]): MenuItem[] {
  return menuItems;
}
