import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;

  font-size: 16px;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: #fdb825;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
`;

export { Container, Wrapper, Section, Logo, Link };
