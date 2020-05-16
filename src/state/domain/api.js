import axios from "axios";

const SWAPI_URL = "https://swapi.dev/api/";
const SWAPI_ENDPOINTS = {
  CHARACTERS: "people/",
  PLANETS: "planets/",
  VEHICLES: "vehicles/",
};

const api = axios.create({
  baseURL: SWAPI_URL,
});

const createGetPaginatedResources = (resources) => (page = 1) =>
  api.get(`${resources}?page=${page}`);

export const getCharacters = createGetPaginatedResources(
  SWAPI_ENDPOINTS.CHARACTERS
);
export const getPlanets = createGetPaginatedResources(SWAPI_ENDPOINTS.PLANETS);
export const getVehicles = createGetPaginatedResources(
  SWAPI_ENDPOINTS.VEHICLES
);

const createGetResource = (resource) => (id) => api.get(`${resource}/${id}/`);

export const getCharacter = createGetResource(SWAPI_ENDPOINTS.CHARACTERS);
export const getPlanet = createGetResource(SWAPI_ENDPOINTS.PLANETS);
export const getVehicle = createGetResource(SWAPI_ENDPOINTS.VEHICLES);
