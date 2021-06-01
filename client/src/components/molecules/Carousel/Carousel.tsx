import View from "@components/atoms/View";
import { bemClassName } from "@components/utils";
import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

import "./style.scss";

export interface CarouselProps {
  autoPlay?: boolean;
  children?: React.ReactNode;
  limitRender?: number;
  transitionTime?: number;
}

interface ICarouselState {
  countItems: number;
  isRenderAll: boolean;
  limitRender: number;
  selectedItem: number;
  widthItem: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  autoPlay = true,
  children,
  limitRender = 1,
  transitionTime = 4500,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<ICarouselState>({} as ICarouselState);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      countItems: Children.count(children),
      isRenderAll: false,
      limitRender: limitRender,
      selectedItem: 0,
      widthItem: ref.current.offsetWidth / limitRender,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      if (autoPlay) {
        setState((prevState) => ({
          ...prevState,
          selectedItem: prevState.selectedItem + limitRender === prevState.countItems ? 0 : prevState.selectedItem + 1,
        }));
      }
    }, transitionTime);

    return () => {
      clearTimeout(time);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectedItem]);

  useEffect(() => {
    scrollRef.current.style.transform = `translateX(-${state.widthItem * state.selectedItem}px)`;
    if (!state.isRenderAll && state.countItems - 1 === state.selectedItem) {
      setState((prevState) => ({ ...prevState, isRenderAll: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectedItem]);

  const onHandleClick = (index: number) => {
    setState((prevState) => ({ ...prevState, selectedItem: index }));
  };

  return (
    <div className="m-carousel" ref={ref}>
      <div className="m-carousel__scroll" ref={scrollRef}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              style: { width: state.widthItem, minWidth: state.widthItem },
              isRender: state.isRenderAll || index - limitRender - 1 < state.selectedItem,
            });
          }
        })}
      </div>
      <View className="m-carousel__pagination">
        {Children.map(children, (child, index) => {
          if (index + limitRender - 1 < state.countItems) {
            return (
              <View
                key={index}
                className={bemClassName("m-carousel__pagination__item", [state.selectedItem === index && "active"])}
                onClick={() => onHandleClick(index)}
              />
            );
          }
        })}
      </View>
    </div>
  );
};

export default Carousel;
