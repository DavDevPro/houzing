import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";

import img1 from "../../assets/img/house_org1.png";
import img2 from "../../assets/img/house_org2.png";

const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.prev();
    if (name === "left") slider.current.next();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} left="true" />
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};
export default GenCarousel;
