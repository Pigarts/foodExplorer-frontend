import React, { useState } from "react";
import { Container, Content } from "./styles.js"

export function Input({ icon: Icon, title, value, ...rest }) {
  return (
    <Content>
      <span>{title}</span>
      <Container>
        {Icon && <Icon size={20} />}
        <input
          value={value}
          {...rest}
        />
      </Container>
    </Content>
  );
}
