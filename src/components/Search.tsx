import { useState } from "react";

export default function Search() {
  const [pokemon, setPokemon] = useState("");
  // fetched list of matches
  return (
    <>
      <div className="max-w-screen-md">
        <input
          onChange={(e) => setPokemon(e.target.value)}
          type="text"
          id="u_pokemon"
          name="u_pokemon"
          required
          placeholder="Pikachu"
          className="rounded-md px-2 py-1"
        />
        <input
          type="submit"
          value="Search"
          onClick={() => searchPokemon(pokemon)}
          className="ml-3 rounded-md bg-yellow-500 text-black p-1 px-2"
        />
      </div>
    </>
  );
}
