import React, { createElement } from "react";
import { bemClassName } from "@components/utils";

import "./style.scss";

export interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  color?: "primary" | "secondary" | "hint";
  size?: "small" | "medium" | "large";
}

export const Text: React.FC<TextProps> = ({
  as = "span",
  className,
  children,
  color = "primary",
  size,
  ...otherProps
}) => {
  return createElement(
    as,
    { className: bemClassName("a-text", [color && color, size && size], className), ...otherProps },
    children
  );
};

export default Text;
