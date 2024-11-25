import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import getCharacterData, {
  CharacterType,
} from "../../data/getCharacterData.tsx";
import { MIN_CHARACTER_ID } from "../../config.ts";

type AppData = {
  id: number;
  isLoading: boolean;
  character?: CharacterType;
  error: boolean;
  increaseId: () => void;
  decreaseId: () => void;
};

export const AppDataContext = createContext<AppData>({
  id: MIN_CHARACTER_ID,
  isLoading: true,
  error: false,
  increaseId: () => null,
  decreaseId: () => null,
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [id, setId] = useState<AppData["id"]>(MIN_CHARACTER_ID);
  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(true);
  const [characterData, setCharacterData] =
    useState<AppData["character"]>(undefined);
  const [error, setError] = useState<AppData["error"]>(false);

  const increaseId = useCallback(() => {
    setId(id + 1);
  }, [id]);

  const decreaseId = useCallback(() => {
    setId(id - 1);
  }, [id]);

  const appData: AppData = useMemo(() => {
    return {
      id,
      character: characterData,
      isLoading,
      error,
      increaseId,
      decreaseId,
    };
  }, [id, characterData, isLoading, error, increaseId, decreaseId]);

  useEffect(() => {
    (async () => {
      setError(false);
      setIsLoading(true);
      const response = await getCharacterData(id);
      if (!response) {
        setError(true);
        setCharacterData(undefined);
      } else {
        setCharacterData(response);
      }
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <AppDataContext.Provider value={appData}>
      <AppDataContext.Provider value={appData}>
        {children}
      </AppDataContext.Provider>
    </AppDataContext.Provider>
  );
};
