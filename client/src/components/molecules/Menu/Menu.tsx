import React, { useEffect, useRef } from "react";

import "./style.scss";

export interface MenuProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

const Menu: React.FC<MenuProps> = ({ children, isOpen }) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    } else {
      ref.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <ul className="m-menu" ref={ref}>
      {children}
    </ul>
  );
};

export default Menu;
