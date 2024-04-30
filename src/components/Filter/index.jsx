import { Dropdown, Space } from "antd";
import { useState, useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const maxPriceRef = useRef();
  const minPriceRef = useRef();

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input ref={countryRef} placeholder="Country" />
            <Input ref={regionRef} placeholder="Region" />
            <Input ref={cityRef} placeholder="City" />
            <Input ref={zipRef} placeholder="Zip code" />
          </Section>
          <h1 className="subTitle">Apartment Info</h1>
          <Section>
            <Input ref={roomsRef} placeholder="Rooms" />
            <Input ref={sizeRef} placeholder="Size" />
            <Input ref={sortRef} placeholder="Sort" />
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input ref={maxPriceRef} placeholder="Max price" />
            <Input ref={minPriceRef} placeholder="Min price" />
          </Section>
        </MenuWrapper>
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  
  return (
    <Container>
      <Input icon={<Icons.Houses />} placeholder={"Enter an address, neighborhood, city or ZIP code"} />

      <Dropdown menu={{ items, onClick: handleMenuClick }} onOpenChange={handleOpenChange} open={open}>
        <Space>
          <Button type="light">
            <Icons.Setting /> Advanced
          </Button>
        </Space>
      </Dropdown>

      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
