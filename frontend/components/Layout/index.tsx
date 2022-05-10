import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Container from './Container';
import Header from './Header';

const Layout: FC<PropsWithChildren<Record<string, unknown>>> = ({ children, ...pageProps }) => (
  <div className="h-screen grid" style={{ gridTemplateRows: 'auto 1fr auto' }}>
    <Header {...pageProps} />
    <main>
      <Container className="py-2">{children}</Container>
    </main>
    <Footer />
  </div>
);
export default Layout;
