import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 45%;
  width: 40px;
  height: 40px;
  padding: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: 571px;
  object-fit: cover;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

Content.Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;

Content.Desc = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

Content.Price = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

export { Container, Arrow, Img, Blur, Content };
