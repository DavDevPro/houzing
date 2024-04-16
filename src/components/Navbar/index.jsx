import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";
import { Button } from "../Generic/Button";
import { Container, Wrapper, Section, Logo, Link } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path, hidden }, index) => {
            return (
              !hidden && (
                <Link className={({ isActive }) => isActive && "active"} key={index} to={path}>
                  {title}
                </Link>
              )
            );
          })}
        </Section>
        <Section>
          <Button onClick={() => navigate("/signin")} type="dark">
            Sign in
          </Button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
export default Navbar;
