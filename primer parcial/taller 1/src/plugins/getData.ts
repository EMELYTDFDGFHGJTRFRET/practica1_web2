import { get } from "./httpClient";

async function getPokemon(pokemonId: number) {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    try {
        const data = await get(url); 
        return data; 
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { getPokemon };
