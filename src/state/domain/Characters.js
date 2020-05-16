import { atom, selector, selectorFamily } from "recoil";

import { getCharacter, getCharacters } from "./api";

export const charactersCurrentPageState = atom({
  key: "Characters/CURRENT_PAGE",
  default: 1,
});

export const charactersDataQuery = selector({
  key: "Characters/DATA",
  get: async ({ get }) => {
    const currentPage = get(charactersCurrentPageState);
    const {
      data: { count, results },
    } = await getCharacters(currentPage);

    const pagesCount = Math.ceil(count / 10);

    return { pagesCount, results };
  },
});

/* export const characterDetailsQuery = selectorFamily({
  key: "Character/Details",
  get: (characterId) => async () => {
    const response = await getCharacter(characterId);

    return response;
  },
});
 */
