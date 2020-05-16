import { atom, selector, selectorFamily } from "recoil";

import { getPlanet, getPlanets } from "./api";

export const planetsCurrentPageState = atom({
  key: "Planets/CURRENT_PAGE",
  default: 1,
});

export const planetsDataQuery = selector({
  key: "Planets/DATA",
  get: async ({ get }) => {
    const currentPage = get(planetsCurrentPageState);
    const {
      data: { count, results },
    } = await getPlanets(currentPage);

    const pagesCount = Math.ceil(count / 10);

    return { pagesCount, results };
  },
});

/* export const planetDetailsQuery = selectorFamily({
  key: "Planets/Details",
  get: (planetId) => async () => {
    const response = await getPlanet(planetId);

    return response;
  },
});
 */
