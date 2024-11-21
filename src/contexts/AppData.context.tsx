import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";

import getCharactersInfo from "../data/getCharactersInfo.tsx";
import getCharacterData, { CharacterType } from "../data/getCharacterData.tsx";

type AppData = {
  isLoading: boolean;
  character: CharacterType | null;
  handleOnNextButtonClick: () => void;
  handleOnPreviousButtonClick: () => void;
  maxId: number;
};

const AppDataContext = createContext<AppData>({
  handleOnNextButtonClick(): void {},
  handleOnPreviousButtonClick(): void {},
  isLoading: true,
  character: null,
  maxId: 0,
});

export const useAppData = () => useContext(AppDataContext);

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(true);
  const [id, setId] = useState(1);
  const [maxId, setMaxId] = useState<number>(1);
  const [characterData, setCharacterData] =
    useState<AppData["character"]>(null);

  const appData: AppData = useMemo(() => {
    const handleOnNextButtonClick = () => {
      const updatedId = id + 1;
      if (updatedId > maxId) return;
      setId(updatedId);
    };

    const handleOnPreviousButtonClick = () => {
      const updatedId = id - 1;
      if (updatedId < 1) return;
      setId(updatedId);
    };

    return {
      isLoading,
      character: characterData,
      handleOnNextButtonClick,
      handleOnPreviousButtonClick,
      maxId,
    };
  }, [isLoading, characterData, maxId]);

  useEffect(() => {
    (async () => {
      const charactersInfo = await getCharactersInfo();
      setMaxId(charactersInfo.count);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response: AppData["character"] = await getCharacterData(id);
      setCharacterData(response);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
