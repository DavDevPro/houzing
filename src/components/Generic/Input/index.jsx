import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(({ type, onChange, placeholder, value, defaultValue, name, width, height, icon }, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        ref={ref}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
        icon={icon}
      />
    </Wrapper>
  );
});

export default Input;
