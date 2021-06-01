import React from "react";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import "./style.scss";

export interface SubMenuProps {
  children?: React.ReactNode;
  title?: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({ children, title }) => {
  return (
    <View className="m-menu-item" as="li" color="secondary" bordered>
      <View className="m-menu-item__link">
        <Text>{title}</Text>
      </View>
      <View className="m-menu" as="ul">
        {children}
      </View>
    </View>
  );
};

export default SubMenu;
