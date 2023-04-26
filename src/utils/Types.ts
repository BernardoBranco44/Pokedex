export interface AppTypeInitalState {}

export interface PokemonInitialStateType {
  allPokemon: undefined | genericPokemonType[];
}

export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
}
