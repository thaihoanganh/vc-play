import React, { useEffect, useRef, useState } from "react";
import { bemClassName } from "@components/utils";

import Input from "@components/atoms/Input";
import View from "@components/atoms/View";

import "./style.scss";

export interface LiveSearchProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const LiveSearch: React.FC<LiveSearchProps> = ({ children, isOpen }) => {
  const ref = useRef(null);

  const [state, setState] = useState({
    isFocusForm: false,
    isLoading: false,
    searchValue: "",
    time: 0,
  });

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      setState((prevState) => ({ ...prevState, isFocusForm: false, isLoading: false, searchValue: "", time: 0 }));
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);

  useEffect(() => {
    const time = setTimeout(() => {
      if (state.time) {
        console.log("call api");
      }
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [state.time]);

  const onHandleFocus = () => {
    setState((prevState) => ({ ...prevState, isFocusForm: true }));
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, isLoading: true, searchValue: e.target.value, time: Date.now() }));
  };

  return (
    <div className={bemClassName("m-search__live-search", [isOpen && "open", state.isFocusForm && "focus"])} ref={ref}>
      <View className="m-search__live-search__form">
        <Input
          placeholder="Tìm kiếm phim ..."
          className="m-search__live-search__form__input"
          value={state.searchValue}
          onFocus={onHandleFocus}
          onChange={(e) => onHandleChange(e)}
        />
      </View>
      <View className="m-search__live-search__data" bordered={Boolean(state.searchValue) || state.isLoading}>
        {state.isLoading && (
          <View className="m-search__live-search__data__loading">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet recusandae, voluptatem dignissimos expedita
            vitae animi voluptatum tempora saepe perspiciatis provident mollitia eveniet iusto id reiciendis omnis
            debitis maxime quam odio!
          </View>
        )}
        {children}
      </View>
    </div>
  );
};

export default LiveSearch;
