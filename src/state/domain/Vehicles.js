import { atom, selector, selectorFamily } from "recoil";

import { getVehicle, getVehicles } from "./api";

export const vehiclesCurrentPageState = atom({
  key: "Vehicles/CURRENT_PAGE",
  default: 1,
});

export const vehiclesDataQuery = selector({
  key: "Vehicles/DATA",
  get: async ({ get }) => {
    const currentPage = get(vehiclesCurrentPageState);
    const {
      data: { count, results },
    } = await getVehicles(currentPage);

    const pagesCount = Math.ceil(count / 10);

    return { pagesCount, results };
  },
});

/* export const vehicleDetailsQuery = selectorFamily({
  key: "Vehicles/Details",
  get: (vehicleId) => async () => {
    const response = await getVehicle(vehicleId);

    return response;
  },
}); */
