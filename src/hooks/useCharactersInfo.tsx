import { useEffect, useState } from "react";

import { MIN_CHARACTER_ID } from "@/config.ts";
import getCharactersInfo from "@/data/getCharactersInfo";

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
