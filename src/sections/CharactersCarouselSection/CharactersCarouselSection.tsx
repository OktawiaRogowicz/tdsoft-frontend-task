import React from "react";
import { useAppData } from "../../contexts/AppData.context";
import CharacterWidget from "../../components/CharacterWidget";
import StyledButton from "../../components/StyledButton";
import {
  ButtonsContainer,
  CharactersCarouselSectionContainer,
} from "./CharactersCarouselSection.styled.ts";

const CharactersCarouselSection: React.FC = () => {
  const {
    character,
    isLoading,
    handleOnPreviousButtonClick,
    handleOnNextButtonClick,
  } = useAppData();

  if (!character) return null;

  return (
    <CharactersCarouselSectionContainer>
      <CharacterWidget character={character} isLoading={isLoading} />
      <ButtonsContainer>
        <StyledButton
          disabled={isLoading}
          onClick={handleOnPreviousButtonClick}
        >
          Previous
        </StyledButton>
        <StyledButton disabled={isLoading} onClick={handleOnNextButtonClick}>
          Next
        </StyledButton>
      </ButtonsContainer>
    </CharactersCarouselSectionContainer>
  );
};

export default CharactersCarouselSection;
