import React from "react";

import StyledParagraph from "../StyledParagraph";

import {
  CharacterWidgetContainer,
  CharacterAvatar,
  CharacterWidgetHeader,
  CharacterWidgetContent,
  CharacterWidgetDescriptionContainer,
} from "./CharacterWidget.styled";
import CharacterWidgetField from "./components/CharacterWidgetField";
import { CharacterType } from "../../data/getCharacterData.tsx";

type CharacterWidgetType = {
  character: CharacterType;
  isLoading: boolean;
};

const CharacterWidget: React.FC<CharacterWidgetType> = ({
  character,
  isLoading,
}) => {
  if (isLoading)
    return (
      <CharacterWidgetContainer>
        <CharacterWidgetContent>
          <StyledParagraph type="medium">Loading...</StyledParagraph>
        </CharacterWidgetContent>
      </CharacterWidgetContainer>
    );

  if (!character)
    return (
      <CharacterWidgetContainer>
        <CharacterWidgetContent>
          <StyledParagraph type="medium">
            An error occured... try again later.
          </StyledParagraph>
        </CharacterWidgetContent>
      </CharacterWidgetContainer>
    );

  return (
    <CharacterWidgetContainer>
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
