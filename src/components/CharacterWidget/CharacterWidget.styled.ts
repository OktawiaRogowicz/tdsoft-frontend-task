import styled from "@emotion/styled";
import { Character } from "../../types/RickAndMorty.types.ts";

export const CharacterWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  border-radius: 8px;
  min-width: 360px;
  min-height: 127px;
  font-family: "Open Sans", sans-serif;
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
  gap: 8px;
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
