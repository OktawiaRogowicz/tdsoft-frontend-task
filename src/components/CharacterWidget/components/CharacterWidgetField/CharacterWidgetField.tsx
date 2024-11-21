import React from "react";

import StyledParagraph from "../../../StyledParagraph";

import {
  CharacterWidgetFieldContainer,
  CharacterWidgetFieldTag,
} from "./CharacterWidgetField.styled";

type CharacterWidgetFieldType = {
  label: string;
  description: string | number;
};

const CharacterWidgetField = ({
  label,
  description,
}: CharacterWidgetFieldType) => {
  return (
    <CharacterWidgetFieldContainer>
      <CharacterWidgetFieldTag>
        <StyledParagraph type="medium">{label}</StyledParagraph>
      </CharacterWidgetFieldTag>
      <StyledParagraph type="medium">{description}</StyledParagraph>
    </CharacterWidgetFieldContainer>
  );
};

export default CharacterWidgetField;