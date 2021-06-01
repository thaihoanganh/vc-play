import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface LayoutHeaderProps {
  children?: React.ReactNode;
}

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({ children }) => {
  return (
    <View className="t-layout__header" color="secondary" bordered>
      {children}
    </View>
  );
};

export default LayoutHeader;
