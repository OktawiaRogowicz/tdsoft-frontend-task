import React from "react";

import StyledParagraph from "@/components/StyledParagraph";
import { CharacterType } from "@/data/getCharacterData.tsx";

import {
  CharacterWidgetContainer,
  CharacterAvatar,
  CharacterWidgetHeader,
  CharacterWidgetContent,
  CharacterWidgetDescriptionContainer,
} from "./CharacterWidget.styled";
import CharacterWidgetField from "./components/CharacterWidgetField";

type CharacterWidgetType = {
  error: boolean;
  character?: CharacterType;
  isLoading: boolean;
  lastAction?: string;
};

const CharacterWidget: React.FC<CharacterWidgetType> = ({
  error,
  character,
  isLoading,
  lastAction,
}) => {
  if (isLoading)
    return (
      <CharacterWidgetContainer
        key={character?.id}
        fromRight={lastAction === "next"}
      >
        <CharacterWidgetContent>
          <StyledParagraph type="medium">Loading...</StyledParagraph>
        </CharacterWidgetContent>
      </CharacterWidgetContainer>
    );

  if (error || !character)
    return (
      <CharacterWidgetContainer key="errorWidget" fromRight>
        <CharacterWidgetContent>
          <StyledParagraph type="medium">
            An error occured... try again later.
          </StyledParagraph>
        </CharacterWidgetContent>
      </CharacterWidgetContainer>
    );

  return (
    <CharacterWidgetContainer
      key={character.id}
      fromRight={lastAction === "next"}
    >
      <CharacterWidgetHeader status={character.status}>
        <StyledParagraph type="bold">{character.name}</StyledParagraph>
      </CharacterWidgetHeader>
      <CharacterWidgetContent>
        <CharacterWidgetDescriptionContainer>
          <CharacterWidgetField label={"id"} description={`#${character.id}`} />
          <CharacterWidgetField
            label={"status"}
            description={character.status}
          />
          <CharacterWidgetField
            label={"gender"}
            description={character.gender}
          />
          <CharacterWidgetField
            label={"episodes"}
            description={character.episodes}
          />
        </CharacterWidgetDescriptionContainer>
        <CharacterAvatar src={character.imageUrl} alt="Character avatar" />
      </CharacterWidgetContent>
    </CharacterWidgetContainer>
  );
};

export default CharacterWidget;
