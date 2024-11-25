import React from "react";
import { StyledButtonComponent } from "./StyledButton.styled";

type StyledButtonType = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const StyledButton: React.FC<StyledButtonType> = ({
  children,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButtonComponent disabled={disabled} {...props}>
      {children}
    </StyledButtonComponent>
  );
};

export default StyledButton;
