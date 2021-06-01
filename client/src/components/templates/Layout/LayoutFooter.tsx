import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface LayoutFooterProps {
  children?: React.ReactNode;
}

export const LayoutFooter: React.FC<LayoutFooterProps> = ({ children }) => {
  return <View className="t-layout-footer">{children}</View>;
};

export default LayoutFooter;
