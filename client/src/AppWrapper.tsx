import React, { useState } from "react";

import Menu, { MenuAction, MenuItem, SubMenu } from "@components/molecules/Menu";
import Search, { SearchAction, LiveSearch } from "@components/molecules/Search";

import Header, { HeaderLogo, HeaderMenu, HeaderSearch } from "@components/organisms/Header";

import Layout, { LayoutHeader, LayoutContent } from "@components/templates/Layout";

export interface AppWrapperProps {
  children?: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [state, setState] = useState({
    isOpenMenu: false,
    isOpenSearch: false,
  });

  const onhandleOpenMenu = () => {
    setState((prevState) => ({ ...prevState, isOpenMenu: !prevState.isOpenMenu }));
  };

  const onhandleOpenSearch = () => {
    setState((prevState) => ({ ...prevState, isOpenSearch: !prevState.isOpenSearch }));
  };

  return (
    <Layout>
      <LayoutHeader>
        <Header>
          <HeaderMenu>
            <MenuAction onClick={onhandleOpenMenu} />
            <Menu isOpen={state.isOpenMenu}>
              <MenuItem to="/menu-item-1">Menu Item 1</MenuItem>
              <MenuItem to="/menu-item-2">Menu Item 2</MenuItem>
              <MenuItem to="/menu-item-3">Menu Item 3</MenuItem>
              <SubMenu title="Submenu">
                <MenuItem to="/submenu-1">Menu Item 1</MenuItem>
                <MenuItem to="/submenu-2">Menu Item 2</MenuItem>
                <MenuItem to="/submenu-3">Menu Item 3</MenuItem>
              </SubMenu>
            </Menu>
          </HeaderMenu>
          <HeaderLogo />
          <HeaderSearch>
            <Search>
              <SearchAction onClick={onhandleOpenSearch} />
              <LiveSearch isOpen={state.isOpenSearch} />
            </Search>
          </HeaderSearch>
        </Header>
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
};

export default AppWrapper;
