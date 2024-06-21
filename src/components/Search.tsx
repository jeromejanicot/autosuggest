import { useState } from "react";
import { Trie } from "../utils/trie";
import { pokemon } from "../data/pokedex";

const AutoTrie = new Trie();
for (let i = 0; i < pokemon.length; i++) {
  AutoTrie.insert(pokemon[i].name.english);
}

export default function Search() {
  const [pokemon, setPokemon] = useState("");
  const [results, setResults] = useState<string[]>([]);

  function searchPokemon(pokemon: string) {
	if (pokemon.length >= 2) {
		const result = AutoTrie.search(pokemon);
		console.log(result);
		setResults(result);
	}
	setResults([]);
  }

  return (
    <>
      <div className="max-w-screen-md flex">
		<div className="relative">
        <input
          onChange={(e) => searchPokemon(e.target.value)}
          type="text"
          id="u_pokemon"
          name="u_pokemon"
          required
          placeholder="Pikachu"
          className="rounded-md px-2 py-1 text-black"
        />
		{results && ( 
			<>
			<ul className="absolute bg-white text-black my-1 p-2 w-full rounded-md">
				{results.map((result) => (
					<li key={result}>{result}</li>
				))}
			</ul>
			</>
		)
		}
		</div>
        <input
          type="submit"
          value="Search"
          onClick={() => setPokemon(pokemon)}
          className="ml-3 rounded-md bg-yellow-500 text-black p-1 px-2"
        />
      </div>
    </>
  );
}
