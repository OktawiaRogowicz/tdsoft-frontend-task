import { useEffect, useState } from "react";

import getCharactersInfo from "../data/getCharactersInfo";
import { MIN_CHARACTER_ID } from "../config.ts";

const useCharactersInfo = () => {
  const [maxId, setMaxId] = useState<number>(MIN_CHARACTER_ID);

  useEffect(() => {
    (async () => {
      const charactersInfo = await getCharactersInfo();
      setMaxId(charactersInfo.count);
    })();
  }, []);

  return {
    maxId,
  };
};

export default useCharactersInfo;
