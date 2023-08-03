import React from "react";

import { ButtonContainer } from "./styles";

const Button = ({ children }: { children: string }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
