import React, { useMemo, useState, useLayoutEffect } from "react";

import { LayoutContext, ILayoutContext } from ".";

export interface LayoutProviderProps {
  children?: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [state, setState] = useState<ILayoutContext>({
    device: "mobile",
  });

  useLayoutEffect(() => {
    if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setState((prevState) => ({ ...prevState, device: "mobile" }));
      document.getElementsByTagName("body")[0].dataset["device"] = "mobile";
    } else {
      setState((prevState) => ({ ...prevState, device: "desktop" }));
      document.getElementsByTagName("body")[0].dataset["device"] = "desktop";
    }
  }, []);

  const value = useMemo<ILayoutContext>(() => {
    return {
      device: state.device,
    };
  }, [state]);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
