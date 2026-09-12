/**
 * STRINGS DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Reverse String',
    slug: 'reverse-string',
    difficulty: 'EASY',
    category: 'Strings',
    description: 'Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with `O(1)` extra memory.',
    constraints: [
      '1 <= s.length <= 10^5',
      's[i] is a printable ascii character.',
    ],
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Modify s in-place
}`,
      python: `def reverseString(s):
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
    }
}`,
      cpp: `class Solution {
public:
    void reverseString(vector<char>& s) {
    }
};`,
      c: `void reverseString(char* s, int sSize) {
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: ['h', 'e', 'l', 'l', 'o'] }, expectedOutput: ['o', 'l', 'l', 'e', 'h'] },
      { input: { s: ['H', 'a', 'n', 'n', 'a', 'h'] }, expectedOutput: ['h', 'a', 'n', 'n', 'a', 'H'] },
    ],
    hiddenTestCases: [
      { input: { s: ['a'] }, expectedOutput: ['a'] },
      { input: { s: ['A', ' ', 'b'] }, expectedOutput: ['b', ' ', 'A'] },
      { input: { s: ['1', '2', '3', '4'] }, expectedOutput: ['4', '3', '2', '1'] },
    ],
    tags: ['Two Pointers', 'String'],
  },
  {
    title: 'Valid Palindrome',
    slug: 'valid-palindrome',
    difficulty: 'EASY',
    category: 'Strings',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.',
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.',
    ],
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: 'false',
        explanation: '"raceacar" is not a palindrome.',
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Your solution here
}`,
      python: `def isPalindrome(s):
    pass`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isPalindrome(string s) {
        return true;
    }
};`,
      c: `bool isPalindrome(char* s) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'A man, a plan, a canal: Panama' }, expectedOutput: true },
      { input: { s: 'race a car' }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { s: ' ' }, expectedOutput: true },
      { input: { s: '0P' }, expectedOutput: false },
      { input: { s: 'ab_a' }, expectedOutput: true },
      { input: { s: '.,' }, expectedOutput: true },
    ],
    tags: ['Two Pointers', 'String'],
  },
  {
    title: 'Valid Anagram',
    slug: 'valid-anagram',
    difficulty: 'EASY',
    category: 'Strings',
    description: 'Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    constraints: [
      '1 <= s.length, t.length <= 5 * 10^4',
      's and t consist of lowercase English letters.',
    ],
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: 'true',
      },
      {
        input: 's = "rat", t = "car"',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Your solution here
}`,
      python: `def isAnagram(s, t):
    pass`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isAnagram(string s, string t) {
        return true;
    }
};`,
      c: `bool isAnagram(char* s, char* t) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'anagram', t: 'nagaram' }, expectedOutput: true },
      { input: { s: 'rat', t: 'car' }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { s: 'a', t: 'ab' }, expectedOutput: false },
      { input: { s: 'listen', t: 'silent' }, expectedOutput: true },
      { input: { s: 'aacc', t: 'ccac' }, expectedOutput: false },
    ],
    tags: ['Hash Table', 'String', 'Sorting'],
  },
  {
    title: 'Longest Common Prefix',
    slug: 'longest-common-prefix',
    difficulty: 'EASY',
    category: 'Strings',
    description: 'Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `""`.',
    constraints: [
      '1 <= strs.length <= 200',
      '0 <= strs[i].length <= 200',
      'strs[i] consists of only lowercase English letters.',
    ],
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: 'There is no common prefix among the input strings.',
      },
    ],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Your solution here
}`,
      python: `def longestCommonPrefix(strs):
    pass`,
      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        return "";
    }
};`,
      c: `char* longestCommonPrefix(char** strs, int strsSize) {
    return "";
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { strs: ['flower', 'flow', 'flight'] }, expectedOutput: 'fl' },
      { input: { strs: ['dog', 'racecar', 'car'] }, expectedOutput: '' },
    ],
    hiddenTestCases: [
      { input: { strs: ['a'] }, expectedOutput: 'a' },
      { input: { strs: ['cir', 'car'] }, expectedOutput: 'c' },
      { input: { strs: ['', 'b'] }, expectedOutput: '' },
      { input: { strs: ['interspecies', 'interstellar', 'interstate'] }, expectedOutput: 'inters' },
    ],
    tags: ['String', 'Trie'],
  },
  {
    title: 'Group Anagrams',
    slug: 'group-anagrams',
    difficulty: 'MEDIUM',
    category: 'Strings',
    description: 'Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.',
    constraints: [
      '1 <= strs.length <= 10^4',
      '0 <= strs[i].length <= 100',
      'strs[i] consists of lowercase English letters.',
    ],
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Your solution here
}`,
      python: `def groupAnagrams(strs):
    pass`,
      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        return {};
    }
};`,
      c: `char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] }, expectedOutput: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']] },
      { input: { strs: [''] }, expectedOutput: [['']] },
    ],
    hiddenTestCases: [
      { input: { strs: ['a'] }, expectedOutput: [['a']] },
      { input: { strs: ['ab', 'ba', 'abc', 'cba', 'bca'] }, expectedOutput: [['ab', 'ba'], ['abc', 'cba', 'bca']] },
    ],
    tags: ['Array', 'Hash Table', 'String', 'Sorting'],
  },
  {
    title: 'Longest Palindromic Substring',
    slug: 'longest-palindromic-substring',
    difficulty: 'MEDIUM',
    category: 'Strings',
    description: 'Given a string `s`, return the longest palindromic substring in `s`.',
    constraints: [
      '1 <= s.length <= 1000',
      's consist of only digits and English letters.',
    ],
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.',
      },
      {
        input: 's = "cbbd"',
        output: '"bb"',
      },
    ],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Your solution here
}`,
      python: `def longestPalindrome(s):
    pass`,
      java: `class Solution {
    public String longestPalindrome(String s) {
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        return "";
    }
};`,
      c: `char* longestPalindrome(char* s) {
    return "";
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'babad' }, expectedOutput: 'bab' },
      { input: { s: 'cbbd' }, expectedOutput: 'bb' },
    ],
    hiddenTestCases: [
      { input: { s: 'a' }, expectedOutput: 'a' },
      { input: { s: 'ac' }, expectedOutput: 'a' },
      { input: { s: 'racecar' }, expectedOutput: 'racecar' },
      { input: { s: 'abbcccbbb' }, expectedOutput: 'bbcccbb' },
    ],
    tags: ['String', 'Dynamic Programming'],
  },
  {
    title: 'String Compression',
    slug: 'string-compression',
    difficulty: 'MEDIUM',
    category: 'Strings',
    description: 'Given an array of characters `chars`, compress it using the following algorithm:\n\nBegin with an empty string `s`. For each group of consecutive repeating characters in `chars`:\n- If the group length is `1`, append the character to `s`.\n- Otherwise, append the character followed by the group\'s length.\n\nReturn the new length of the array after in-place compression.',
    constraints: [
      '1 <= chars.length <= 2000',
      'chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.',
    ],
    examples: [
      {
        input: 'chars = ["a","a","b","b","c","c","c"]',
        output: '6',
        explanation: 'The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".',
      },
      {
        input: 'chars = ["a"]',
        output: '1',
      },
    ],
    starterCode: {
      javascript: `function compress(chars) {
  // Your solution here
}`,
      python: `def compress(chars):
    pass`,
      java: `class Solution {
    public int compress(char[] chars) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int compress(vector<char>& chars) {
        return 0;
    }
};`,
      c: `int compress(char* chars, int charsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { chars: ['a', 'a', 'b', 'b', 'c', 'c', 'c'] }, expectedOutput: 6 },
      { input: { chars: ['a'] }, expectedOutput: 1 },
    ],
    hiddenTestCases: [
      { input: { chars: ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'] }, expectedOutput: 4 },
      { input: { chars: ['a', 'b', 'c'] }, expectedOutput: 3 },
    ],
    tags: ['Two Pointers', 'String'],
  },
  {
    title: 'Reverse Words in a String',
    slug: 'reverse-words-in-a-string',
    difficulty: 'MEDIUM',
    category: 'Strings',
    description: 'Given an input string `s`, reverse the order of the words.\n\nA word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.\n\nReturn a string of the words in reverse order concatenated by a single space. Note that `s` may contain leading or trailing spaces or multiple spaces between two words.',
    constraints: [
      '1 <= s.length <= 10^4',
      's contains English letters (upper-case and lower-case), digits, and spaces \' \'.',
      'There is at least one word in s.',
    ],
    examples: [
      {
        input: 's = "the sky is blue"',
        output: '"blue is sky the"',
      },
      {
        input: 's = "  hello world  "',
        output: '"world hello"',
      },
    ],
    starterCode: {
      javascript: `function reverseWords(s) {
  // Your solution here
}`,
      python: `def reverseWords(s):
    pass`,
      java: `class Solution {
    public String reverseWords(String s) {
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string reverseWords(string s) {
        return "";
    }
};`,
      c: `char* reverseWords(char* s) {
    return "";
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'the sky is blue' }, expectedOutput: 'blue is sky the' },
      { input: { s: '  hello world  ' }, expectedOutput: 'world hello' },
    ],
    hiddenTestCases: [
      { input: { s: 'a good   example' }, expectedOutput: 'example good a' },
      { input: { s: 'EPY2giL' }, expectedOutput: 'EPY2giL' },
    ],
    tags: ['Two Pointers', 'String'],
  },
  {
    title: 'Is Subsequence',
    slug: 'is-subsequence',
    difficulty: 'EASY',
    category: 'Strings',
    description: 'Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.\n\nA subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.',
    constraints: [
      '0 <= s.length <= 100',
      '0 <= t.length <= 10^4',
      's and t consist only of lowercase English letters.',
    ],
    examples: [
      {
        input: 's = "abc", t = "ahbgdc"',
        output: 'true',
      },
      {
        input: 's = "axc", t = "ahbgdc"',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function isSubsequence(s, t) {
  // Your solution here
}`,
      python: `def isSubsequence(s, t):
    pass`,
      java: `class Solution {
    public boolean isSubsequence(String s, String t) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isSubsequence(string s, string t) {
        return true;
    }
};`,
      c: `bool isSubsequence(char* s, char* t) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'abc', t: 'ahbgdc' }, expectedOutput: true },
      { input: { s: 'axc', t: 'ahbgdc' }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { s: '', t: 'ahbgdc' }, expectedOutput: true },
      { input: { s: 'b', t: 'c' }, expectedOutput: false },
      { input: { s: 'ace', t: 'abcde' }, expectedOutput: true },
    ],
    tags: ['Two Pointers', 'String', 'Dynamic Programming'],
  },
  {
    title: 'First Unique Character in a String',
    slug: 'first-unique-character-in-a-string',
    difficulty: 'EASY',
    category: 'Strings',
    description: 'Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.',
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of only lowercase English letters.',
    ],
    examples: [
      {
        input: 's = "leetcode"',
        output: '0',
      },
      {
        input: 's = "loveleetcode"',
        output: '2',
      },
      {
        input: 's = "aabb"',
        output: '-1',
      },
    ],
    starterCode: {
      javascript: `function firstUniqChar(s) {
  // Your solution here
}`,
      python: `def firstUniqChar(s):
    pass`,
      java: `class Solution {
    public int firstUniqChar(String s) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int firstUniqChar(string s) {
        return 0;
    }
};`,
      c: `int firstUniqChar(char* s) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'leetcode' }, expectedOutput: 0 },
      { input: { s: 'loveleetcode' }, expectedOutput: 2 },
    ],
    hiddenTestCases: [
      { input: { s: 'aabb' }, expectedOutput: -1 },
      { input: { s: 'dddccdbba' }, expectedOutput: 8 },
      { input: { s: 'z' }, expectedOutput: 0 },
    ],
    tags: ['Hash Table', 'String', 'Queue', 'Counting'],
  },
];
