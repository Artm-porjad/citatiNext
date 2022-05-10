import { FC, ReactNode } from 'react';

/// Container component
const Container: FC<{
  className?: string;
  children?: ReactNode;
}> = ({ className = '', children }) => (
  <div className={`max-w-screen-2xl 2xl:mx-auto mx-2 ${className}`}>{children}</div>
);
export default Container;
