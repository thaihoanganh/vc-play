import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface HeaderSearchProps {
  children?: React.ReactNode;
}

export const HeaderSearch: React.FC<HeaderSearchProps> = ({ children }) => {
  return <View className="o-header__search">{children}</View>;
};

export default HeaderSearch;
