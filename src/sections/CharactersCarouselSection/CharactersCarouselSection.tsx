import React from "react";
import CharacterWidget from "../../components/CharacterWidget";
import StyledButton from "../../components/StyledButton";
import {
  ButtonsContainer,
  CharactersCarouselSectionContainer,
} from "./CharactersCarouselSection.styled.ts";
import { useAppData } from "../../contexts/AppData/useAppData.tsx";

const CharactersCarouselSection: React.FC = () => {
  const {
    error,
    character,
    isLoading,
    handleOnPreviousButtonClick,
    handleOnNextButtonClick,
    nextButtonDisabled,
    prevButtonDisabled,
    lastAction,
  } = useAppData();

  return (
    <CharactersCarouselSectionContainer>
      <CharacterWidget
        error={error}
        character={character}
        isLoading={isLoading}
        lastAction={lastAction}
      />
      <ButtonsContainer>
        <StyledButton
          disabled={prevButtonDisabled || isLoading}
          onClick={handleOnPreviousButtonClick}
        >
          Previous
        </StyledButton>
        <StyledButton
          disabled={nextButtonDisabled || isLoading}
          onClick={handleOnNextButtonClick}
        >
          Next
        </StyledButton>
      </ButtonsContainer>
    </CharactersCarouselSectionContainer>
  );
};

export default CharactersCarouselSection;
