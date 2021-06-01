import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface HeaderMenuProps {
  children?: React.ReactNode;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ children }) => {
  return <View className="o-header__menu">{children}</View>;
};

export default HeaderMenu;
