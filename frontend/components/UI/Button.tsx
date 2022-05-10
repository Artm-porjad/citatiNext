import { FC, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}>;

// Rounded button UI component
export const RoundedButton: FC<ButtonProps> = ({ className, disabled = false, onClick, children }) => (
  <button
    className={`neutral outlined p-2 border-2 rounded-full ${className}`}
    disabled={disabled}
    onClick={() => onClick && onClick()}
  >
    {children}
  </button>
);