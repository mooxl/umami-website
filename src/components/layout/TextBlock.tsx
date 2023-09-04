import classNames from 'classnames';
import styles from './TextBlock.module.css';
import { HTMLAttributes, ReactNode } from 'react';

export default function TextBlock({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={classNames(styles.text, className)}>
      {children}
    </div>
  );
}
