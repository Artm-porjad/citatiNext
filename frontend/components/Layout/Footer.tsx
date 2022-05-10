import React, { FC } from 'react';
import Container from './Container';

/// Page footer
const Footer: FC = () => (
  <footer className="bg-neutral-100 border-t">
    <Container className="grid grid-cols-3 py-1">
      <section>
        <section>2022 Citati</section>
      </section>
    </Container>
  </footer>
);
export default Footer;
