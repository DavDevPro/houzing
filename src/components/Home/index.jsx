import React from "react";
import {Input, Button} from "../Generic";
import { Container } from "./style";

const Home = () => {
  return <Container>Home
    <Input placeholder={"test"} width={200}/>
    <Button>Button</Button>
  </Container>;
};
export default Home;
