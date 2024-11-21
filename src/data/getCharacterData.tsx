import ky from "ky";

import { type Character } from "../types/RickAndMorty.types";
import { API_URL } from "../config";

export type CharacterType = {
  id: Character["id"];
  name: Character["name"];
  status: Character["status"];
  gender: Character["gender"];
  episodes: number;
  imageUrl: string;
};

const getCharacterData = async (id: number) => {
  const response: Character = await ky.get(`${API_URL}/character/${id}`).json();

  const nextCharacterData: CharacterType = {
    id: response.id,
    name: response.name,
    status: response.status,
    gender: response.gender,
    imageUrl: response.image,
    episodes: response.episode.length,
  };

  return nextCharacterData;
};

export default getCharacterData;
