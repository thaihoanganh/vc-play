import { createContext } from "react";

export interface ILayoutContext {
  device: "mobile" | "desktop";
}

export const LayoutContext = createContext({} as ILayoutContext);
