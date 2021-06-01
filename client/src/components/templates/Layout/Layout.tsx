import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  console.log("rerender");
  return (
    <View className="t-layout" color="primary">
      {children}
    </View>
  );
};

export default Layout;
