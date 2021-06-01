import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface BannerItemProps {
  children?: React.ReactNode;
}

export const BannerItem: React.FC<BannerItemProps> = ({ children }) => {
  return <View className="o-banner__item">{children}</View>;
};

export default BannerItem;
