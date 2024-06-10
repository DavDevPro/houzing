import React from "react";
import Carousel from "../Carousel";
import HouseCard from "../HouseCard";
import { CardWrapper, Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <CardWrapper>
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </CardWrapper>
    </Container>
  );
};
export default Home;
