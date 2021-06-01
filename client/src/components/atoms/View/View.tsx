import React, { createElement } from "react";
import { bemClassName } from "@components/utils";

import "./style.scss";

export interface ViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  bordered?: boolean;
  color?: "primary" | "secondary" | "hint";
}

export const View: React.FC<ViewProps> = ({ as = "div", bordered, className, children, color, ...otherProps }) => {
  return createElement(
    as,
    { className: bemClassName("a-view", [bordered && "bordered", color && color], className), ...otherProps },
    children
  );
};

export default View;
