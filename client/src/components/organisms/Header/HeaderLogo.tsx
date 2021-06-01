import React from "react";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import "./style.scss";

export interface HeaderLogoProps {}

export const HeaderLogo: React.FC<HeaderLogoProps> = () => {
  return (
    <View className="o-header__logo">
      <Text as="h1">Play</Text>
    </View>
  );
};

export default HeaderLogo;
