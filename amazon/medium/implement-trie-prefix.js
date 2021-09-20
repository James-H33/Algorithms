// https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 * Space O(n) | Time O(n)
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (char in node.children) {
      node = node.children[char];
    } else {
      node.children[char] = new TrieNode();
      node = node.children[char];
    }

    if (i === word.length - 1) {
      node.isEndOfWord = true;
    }
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
  * Space O(1) | Time O(n)
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (char in node.children) {
      node = node.children[char];
    } else {
      return false;
    }

    if (i === word.length - 1 && !node.isEndOfWord) {
      return false;
    }
  }

  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 * Space O(1) | Time O(n)
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i];

    if (char in node.children) {
      node = node.children[char];
    } else {
      return false;
    }
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
function TrieNode() {
  this.children = {};
  this.isEndOfWord = false;
}
