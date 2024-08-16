import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ImagesSwiper({ images }) {
  if (!images?.length) return null;

  const renderSlides = () => {
    return images.map((item, index) => {
      console.log("item", item);

      return (
        <SwiperSlide key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 30,
            }}
          >
            <img loading="lazy" src={item} alt="" />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Swiper
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        spaceBetween={30}
        style={{
          "--swiper-pagination-color": "grey",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
}
