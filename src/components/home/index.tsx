// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

import foto1 from "../../images/guatape1.jpeg";
import foto2 from "../../images/medellinday.jpeg";

import foto3 from "../../images/medellinnigth1.jpeg";

import foto4 from "../../images/guatapePueblo.jpeg";

// Import Swiper styles
import "swiper/css";
import styled from "styled-components";
const SLIDER_DATA = [
  {
    id: 1,
    name: "Guatape",
    imageUrl: foto1,
    price: 25,
  },
  {
    id: 2,
    name: "Bata Pink",
    imageUrl: foto2,
    price: 18,
  },
  {
    id: 3,
    name: "Bata Style",
    imageUrl: foto3,
    price: 35,
  },
  {
    id: 4,
    name: "Bata Blu Start",
    imageUrl: foto4,
    price: 25,
  },
];
const Image = styled.img`
  height: 370px;
`;
const Container = styled.div`
  margin: 0 auto;
`;
const Home = () => {
  console.log(SLIDER_DATA[0].imageUrl, "whats this");

  return (
    <Container>
      <Swiper
        centeredSlides={true}
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCube]}
        
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SLIDER_DATA.map((item) => {
          console.log(item, "item");
          return (
            <SwiperSlide>
              <Image src={item.imageUrl} alt={item.name} />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </Container>
  );
};

export default Home;
