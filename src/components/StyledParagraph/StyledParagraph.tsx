import React from "react";

import { StyledParagraphComponent } from "./StyledParagraph.styled";

type StyledButtonType = {
  children: React.ReactNode;
  type: "bold" | "medium";
};

const StyledParagraph: React.FC<StyledButtonType> = ({ children, type }) => {
  return (
    <StyledParagraphComponent type={type}>{children}</StyledParagraphComponent>
  );
};

export default StyledParagraph;
