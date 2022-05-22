import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItem, safeMainMenu, safeUserMenu } from 'modules/session';
import Container from './Container';
import { ButtonProps, RoundedButton } from 'components/UI/Button';

const LinkButton: FC<
  ButtonProps & {
  href?: string;
}
  > = ({ className = '', href, children }) => {
  const router = useRouter();
  const matchedPath = (path: string, exactly = false) =>
    exactly ? path === router.asPath : (path !== '/' && router.asPath.startsWith(path)) || path === router.asPath;
  return (
    <RoundedButton className={`py-1 px-4 border-2 ${href && matchedPath(href, true) ? 'filled' : ''} ${className}`}>
      <a href={href} className="appearance-none">
        {children}
      </a>
    </RoundedButton>
  );
};

const DesktopMenu: FC<{
  mainMenu?: MenuItem[];
  userMenu?: MenuItem[];
}> = ({ mainMenu = [], userMenu = [] }) => {
  const router = useRouter();
  const matchedPath = (path: string, exactly = false) =>
    exactly ? path === router.asPath : (path !== '/' && router.asPath.startsWith(path)) || path === router.asPath;
  return (
    <div className="">
      <Container className="py-2 text-sm font-medium flex flex-row justify-end gap-3">
        {userMenu.map(({ path, label }, index) => (
          <Link href={path} passHref key={index}>
            <LinkButton>{label}</LinkButton>
          </Link>
        ))}
      </Container>
      <div className="neutral on_surface">
        <Container className="flex flex-row gap-6">
          <Link href="/" passHref>
            <div className="text-4xl text-white self-center cursor-pointer">Citati</div>
          </Link>
          {mainMenu.map(({ path, label }, index) => (
            <Link href={path} passHref key={index}>
              <a
                className={`neutral on_surface ${
                  matchedPath(path) ? 'accent' : '!border-0 mb-1'
                } border-b-white border-b-4 text-xl self-end py-1`}
              >
                {label}
              </a>
            </Link>
          ))}
        </Container>
      </div>
      {mainMenu
        .filter((menuItem) => matchedPath(menuItem.path) && menuItem.subMenu)
        .map(({ subMenu }) => {
          if (subMenu && subMenu.length)
            return (
              <Container className="py-2 text-sm font-medium flex flex-row gap-3">
                {subMenu.map(({ path, label }, index) => (
                  <Link href={path} passHref key={index}>
                    <LinkButton>{label}</LinkButton>
                  </Link>
                ))}
              </Container>
            );
        })}
    </div>
  );
};

/// Page header
const Header: FC<{
  mainMenu?: MenuItem[];
  userMenu?: MenuItem[];
}> = ({ mainMenu = [], userMenu = [] }) => (
  <header>
    <DesktopMenu mainMenu={safeMainMenu(mainMenu)} userMenu={safeUserMenu(userMenu)} />
  </header>
);
export default Header;
