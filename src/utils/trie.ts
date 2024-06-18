import pokeJSON from "../data/pokedex.json";

//const pokemon = JSON.parse(pokeJSON);

class TrieNode {
  char: string;
  isEnd: boolean;
  chars: TrieNode[];

  constructor() {
    this.char = "";
    this.isEnd = false;
    this.chars = [];
  }
}

class Trie {
  root: TrieNode;
  insert: (word: string) => void;

  constructor() {
    this.root = new TrieNode();
  }

  public insert(key: string) {
    let curr = this.root;

    function createNode(char: string): TrieNode {
      return { char: char, isEnd: false, chars: [] };
    }

    for (let i = 0; i < key.length; i++) {
      const index = key.charCodeAt(i) - "a".charCodeAt(0);
      if (!curr.chars[index]) {
        curr.chars[index] = createNode(key[i]);
      }

      curr = curr.chars[index];

      if (i == key.length - 1) {
        curr.isEnd = true;
      }
    }
  }
}
