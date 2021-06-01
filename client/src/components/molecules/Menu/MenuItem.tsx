import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import "./style.scss";

export interface MenuItemProps extends NavLinkProps {
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...otherProps }) => {
  return (
    <View className="m-menu-item" as="li" color="secondary" bordered>
      <NavLink className="m-menu-item__link" activeClassName="m-menu-item__link--active" {...otherProps}>
        <Text>{children}</Text>
      </NavLink>
    </View>
  );
};

export default MenuItem;
