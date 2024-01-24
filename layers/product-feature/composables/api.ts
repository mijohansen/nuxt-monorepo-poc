export const useFetchPokemon = () => {
  const url = computed(() => `https://pokeapi.co/api/v2/pokemon/1`);
  return useFetch<PokemonModel>(url, { pick: ["name", "base_experience"], key: "pokemon" });
};

export interface PokemonModel {
  name: string;
  base_experience: number;
}
