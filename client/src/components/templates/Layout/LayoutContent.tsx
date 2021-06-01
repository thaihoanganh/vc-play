import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface LayoutContentProps {
  children?: React.ReactNode;
}

export const LayoutContent: React.FC<LayoutContentProps> = ({ children }) => {
  return <View className="t-layout__content">{children}</View>;
};

export default LayoutContent;
