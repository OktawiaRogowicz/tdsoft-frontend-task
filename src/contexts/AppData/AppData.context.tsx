import React, { createContext, useState, useEffect, useMemo } from "react";

import getCharacterData, {
  CharacterType,
} from "../../data/getCharacterData.tsx";
import useCharactersInfo from "../../hooks/useCharactersInfo.tsx";
import { MIN_CHARACTER_ID } from "../../config.ts";

type AppData = {
  isLoading: boolean;
  character?: CharacterType;
  handleOnNextButtonClick: () => void;
  handleOnPreviousButtonClick: () => void;
  error: boolean;
  nextButtonDisabled: boolean;
  prevButtonDisabled: boolean;
  lastAction: string;
};

export const AppDataContext = createContext<AppData>({
  handleOnNextButtonClick(): void {},
  handleOnPreviousButtonClick(): void {},
  isLoading: true,
  error: false,
  nextButtonDisabled: false,
  prevButtonDisabled: true,
  lastAction: "",
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const { maxId } = useCharactersInfo();

  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(true);
  const [id, setId] = useState(MIN_CHARACTER_ID);
  const [characterData, setCharacterData] =
    useState<AppData["character"]>(undefined);
  const [error, setError] = useState(false);
  const [lastAction, setLastAction] = useState<string>("");

  const nextButtonDisabled = id >= maxId - 1;
  const prevButtonDisabled = id <= MIN_CHARACTER_ID;

  const appData: AppData = useMemo(() => {
    const handleOnNextButtonClick = () => {
      const updatedId = id + 1;
      setId(updatedId);
      setLastAction("next");
    };

    const handleOnPreviousButtonClick = () => {
      const updatedId = id - 1;
      setId(updatedId);
      setLastAction("prev");
    };

    return {
      isLoading,
      character: characterData,
      handleOnNextButtonClick,
      handleOnPreviousButtonClick,
      error,
      nextButtonDisabled,
      prevButtonDisabled,
      lastAction,
    };
  }, [isLoading, characterData, maxId, error, id, lastAction]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getCharacterData(id);
      if (!response) {
        setError(true);
      } else {
        setCharacterData(response);
      }
      setIsLoading(false);
    })();
  }, [id, maxId]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
