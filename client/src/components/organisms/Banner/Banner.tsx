import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface BannerProps {
  children?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ children }) => {
  return <View className="o-banner">{children}</View>;
};

export default Banner;
