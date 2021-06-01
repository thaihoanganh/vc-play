import React from "react";
import { bemClassName } from "@components/utils";

import "./style.scss";

export interface InputProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size"> {
  size?: "small" | "medium" | "large";
}

const Input: React.FC<InputProps> = ({ className, size = "medium", ...otherProps }) => {
  return <input className={bemClassName("a-input", [size && size], className)} {...otherProps} />;
};

export default Input;
