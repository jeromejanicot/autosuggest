class TrieNode {
  char: string;
  isEnd: boolean;
  chars: Map<string, TrieNode>;

  constructor() {
    this.char = "";
    this.isEnd = false;
    this.chars = new Map();
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

	private createNode(char: string): TrieNode {
		return {char: char, isEnd: false, chars: new Map()}
	}

  public insert(key: string) {
    let curr = this.root;

    for (let i = 0; i < key.length; i++) {
		if (!curr.chars.has(key[i])){
			curr.chars.set(key[i], this.createNode(key[i]));
		}

	const node = curr.chars.get(key[i]);
	if (node != undefined) {
		curr = node;
	}

	if (i == key.length - 1) {
		curr.isEnd = true;
	}
    }
  }

  public search(key: string) {
	const results: string[] | [] = [];
	let curr = this.root;
	let word = "";

	if (key.length < 2) {	
		return []
	}


	function findWords(node: TrieNode, word: string, results: string[]) {
		if (node == null) {
			return;
		}

		if (results.length >= 10) {
			return;
		}

		if (node.isEnd) {
			results.push(word);
		}


		for (const c of node.chars.keys()) {
			findWords(node.chars.get(c) as TrieNode, word + c, results);
		}
	}
	
	for (let i = 0; i < key.length; i++) {

		if (!curr.chars.get(key[i])) {
			return [];
		}

		curr = curr.chars.get(key[i]) as TrieNode;
		word += key[i];

		if (i == key.length - 1) {
			findWords(curr, word, results);
		}
	}
	return results;
}
}

