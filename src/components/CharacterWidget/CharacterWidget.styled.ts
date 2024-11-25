import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { Character } from "@/types/RickAndMorty.types.ts";

const appearFromRightAnimation = keyframes`
  0% {
      opacity: 0;
       transform: translateX(15%);
  }
  100% {
      opacity: 1;
      transform: translateX(0%);
  }
`;

const appearFromLeftAnimation = keyframes`
  0% {
      opacity: 0;
       transform: translateX(-15%);
  }
  100% {
      opacity: 1;
      transform: translateX(0%);
  }
`;

export const CharacterWidgetContainer = styled.div<{
  fromRight?: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  border-radius: 8px;
  min-height: 127px;
  font-family: "Open Sans", sans-serif;

  animation: ${(props) =>
      props.fromRight ? appearFromRightAnimation : appearFromLeftAnimation}
    300ms ease-in-out forwards;

  @media (min-width: 420px) {
    min-width: 360px;
  }
`;

export const CharacterWidgetHeader = styled.div<{
  status: Character["status"];
}>`
  background-color: ${(props) => {
    if (props.status === "Alive") return props.theme.colors.green;
    if (props.status === "Dead") return props.theme.colors.red;
    return props.theme.colors.lightGray;
  }};
  padding: 8px 10px;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
`;

export const CharacterWidgetContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  padding: 10px;
`;

export const CharacterWidgetDescriptionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px 24px;
  padding: 14px 0;
`;

export const CharacterAvatar = styled.img`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  border-radius: 4px;
  box-shadow: ${(props) => `0px 4px 4px 0px ${props.theme.colors.shadow}`};
`;
