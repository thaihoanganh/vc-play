import { useContext } from "react";
import { LayoutContext, ILayoutContext } from "./";

export const useLayout = (): ILayoutContext => {
  const context = useContext(LayoutContext);
  return { ...context };
};
