import React from "react";

import { bemClassName } from "@components/utils";

import "./style.scss";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const SvgIcon: React.FC<SvgIconProps> = ({ children, size = "medium", ...otherProps }) => {
  return (
    <svg className={bemClassName("a-svg-icon", [size && size])} {...otherProps} viewBox="0 0 48 48">
      {children}
    </svg>
  );
};

export default SvgIcon;
