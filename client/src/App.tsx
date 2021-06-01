import React from "react";

import Carousel, { CarouselItem } from "@components/molecules/Carousel";

import Banner, { BannerItem } from "@components/organisms/Banner";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Banner>
        <Carousel>
          <CarouselItem>
            <BannerItem>1</BannerItem>
          </CarouselItem>
          <CarouselItem>
            <BannerItem>2</BannerItem>
          </CarouselItem>
          <CarouselItem>
            <BannerItem>3</BannerItem>
          </CarouselItem>
          <CarouselItem>
            <BannerItem>4</BannerItem>
          </CarouselItem>
          <CarouselItem>
            <BannerItem>5</BannerItem>
          </CarouselItem>
          <CarouselItem>
            <BannerItem>6</BannerItem>
          </CarouselItem>
        </Carousel>
      </Banner>
    </React.Fragment>
  );
};

export default App;
