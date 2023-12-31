import { AnimalsType } from "./animals";

export type animalBreedType = {
  animalBreed: string;
  handle: string;
  image?: any;
  description?: any;
  origination?: string;
  lifespan?: string;
  animals: AnimalsType[];
  friendliness?: number;
  shedScale?: number;
};
