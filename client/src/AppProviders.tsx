import React from "react";

import { LayoutProvider } from "@modules/Layout";

interface AppProvidersProps {
  children?: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default AppProviders;
