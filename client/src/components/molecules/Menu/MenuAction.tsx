import React, { useState } from "react";
import { bemClassName } from "@components/utils/function";

import View from "@components/atoms/View";

import "./style.scss";

export interface MenuActionProps {
  onClick?: () => void;
}

export const MenuAction: React.FC<MenuActionProps> = ({ onClick }) => {
  const [state, setState] = useState({
    isActive: false,
  });

  const onHandleClick = () => {
    if (onClick) onClick();
    setState((prevState) => ({ ...prevState, isActive: !prevState.isActive }));
  };
  return (
    <View className={bemClassName("m-menu-action", [state.isActive && "active"])} onClick={onHandleClick}>
      <span />
    </View>
  );
};

export default MenuAction;
