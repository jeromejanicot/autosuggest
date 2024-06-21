import {pokemon} from "../data/pokedex";
import { Trie } from "./trie";

const AutoTrie = new Trie();

beforeAll(() => {
	//const pokeJSON = JSON.parse(json.toString());
	for(let i = 0; i < pokemon.length; i++) {
		AutoTrie.insert(pokemon[i].name.english);
	}
})

describe("Trie", () => {
	test('pikachu returns pikachu', () => {
		const result = AutoTrie.search("Pikachu")
		expect(result).toEqual(["Pikachu"])
	})
	test('Tapu Lele returns Tapu Lele', () => {
		const result = AutoTrie.search("Tapu Lele")
		expect(result).toEqual(["Tapu Lele"])
	})
	test('Ho-Oh returns Oh-Oh', () => {
		const result = AutoTrie.search("Ho-Oh")
		expect(result).toEqual(["Ho-Oh"])
	})
	test('Type: Null returns Type: Null', () => {
		const result = AutoTrie.search("Type: Null")
		expect(result).toEqual(["Type: Null"])
	})
	test('Flabébé returns Flabébé', () => {
		const result = AutoTrie.search("Flabébé")
		expect(result).toEqual(["Flabébé"])
	})
	test('Porygon2 returns Porygon2', () => {
		const result = AutoTrie.search("Porygon2")
		expect(result).toEqual(["Porygon2"])
	})
})