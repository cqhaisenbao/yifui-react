import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './index';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const context = useContext(MenuContext);
  const { index, disabled, className, style, children } = props;
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.activeKey === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'number') {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick} role={'menuitem'}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;