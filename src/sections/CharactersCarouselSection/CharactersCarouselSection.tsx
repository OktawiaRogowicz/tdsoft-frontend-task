import React, { useState } from "react";

import CharacterWidget from "@/components/CharacterWidget";
import StyledButton from "@/components/StyledButton";
import { MIN_CHARACTER_ID } from "@/config.ts";
import { useAppData } from "@/contexts/AppData/useAppData.tsx";
import useCharactersInfo from "@/hooks/useCharactersInfo.tsx";

import {
  ButtonsContainer,
  CharactersCarouselSectionContainer,
} from "./CharactersCarouselSection.styled.ts";

const CharactersCarouselSection: React.FC = () => {
  const { maxId } = useCharactersInfo();
  const { id, error, character, isLoading, increaseId, decreaseId } =
    useAppData();

  const [lastAction, setLastAction] = useState<"next" | "prev" | undefined>(
    undefined,
  );
  const prevButtonDisabled = id <= MIN_CHARACTER_ID;
  const nextButtonDisabled = id >= maxId;

  const handleOnNextButtonClick = () => {
    increaseId();
    setLastAction("next");
  };

  const handleOnPreviousButtonClick = () => {
    decreaseId();
    setLastAction("prev");
  };

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
