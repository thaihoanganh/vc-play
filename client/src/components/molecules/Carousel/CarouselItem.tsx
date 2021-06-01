import React from "react";

import View, { ViewProps } from "@components/atoms/View";

import "./style.scss";

export interface CarouselItemProps extends ViewProps {
  children?: React.ReactNode;
  isRender?: boolean;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, isRender, ...otherProps }) => {
  return (
    <View className="m-carousel__item" {...otherProps}>
      {isRender ? children : null}
    </View>
  );
};

export default CarouselItem;
