import ky from "ky";

import { CharactersInfoResponse } from "@/types/RickAndMorty.types";
import { API_URL } from "@/config";

const getCharactersInfo = async () => {
  const response: CharactersInfoResponse = await ky
    .get(`${API_URL}/character`)
    .json();

  return {
    count: response.info.count,
    pages: response.info.pages,
    next: response.info.next,
    prev: response.info.prev,
  };
};

export default getCharactersInfo;
