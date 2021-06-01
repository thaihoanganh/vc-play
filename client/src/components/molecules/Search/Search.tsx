import React from "react";

import View from "@components/atoms/View";

import "./style.scss";

export interface SearchProps {
  children?: React.ReactNode;
}

export const Search: React.FC<SearchProps> = ({ children }) => {
  return <View className="m-search">{children}</View>;
};

export default Search;
