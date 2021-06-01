import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <View className="o-header">{children}</View>;
};

export default Header;
