import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import cls from './Portal.module.scss';
import change = Simulate.change;
// eslint-disable-next-line import/order
import { ReactNode } from 'react';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props;

  return createPortal(children, element);
};
