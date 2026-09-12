/**
 * HASHMAP / HASHSET DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Contains Duplicate',
    slug: 'contains-duplicate',
    difficulty: 'EASY',
    category: 'HashMap / HashSet',
    description: 'Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
    ],
    examples: [
      {
        input: 'nums = [1,2,3,1]',
        output: 'true',
      },
      {
        input: 'nums = [1,2,3,4]',
        output: 'false',
      },
      {
        input: 'nums = [1,1,1,3,3,4,3,2,4,2]',
        output: 'true',
      },
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Your solution here
}`,
      python: `def containsDuplicate(nums):
    pass`,
      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        return false;
    }
};`,
      c: `bool containsDuplicate(int* nums, int numsSize) {
    return false;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 2, 3, 1] }, expectedOutput: true },
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { nums: [1] }, expectedOutput: false },
      { input: { nums: [0, 0] }, expectedOutput: true },
      { input: { nums: [1, 5, -2, -4, 0] }, expectedOutput: false },
    ],
    tags: ['Array', 'Hash Table', 'Sorting'],
  },
  {
    title: 'Longest Consecutive Sequence',
    slug: 'longest-consecutive-sequence',
    difficulty: 'MEDIUM',
    category: 'HashMap / HashSet',
    description: 'Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.\n\nYou must write an algorithm that runs in `O(n)` time using a HashSet.',
    constraints: [
      '0 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
    ],
    examples: [
      {
        input: 'nums = [100,4,200,1,3,2]',
        output: '4',
        explanation: 'The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.',
      },
      {
        input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
        output: '9',
      },
    ],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Your solution here
}`,
      python: `def longestConsecutive(nums):
    pass`,
      java: `class Solution {
    public int longestConsecutive(int[] nums) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        return 0;
    }
};`,
      c: `int longestConsecutive(int* nums, int numsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [100, 4, 200, 1, 3, 2] }, expectedOutput: 4 },
      { input: { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] }, expectedOutput: 9 },
    ],
    hiddenTestCases: [
      { input: { nums: [] }, expectedOutput: 0 },
      { input: { nums: [1, 2, 0, 1] }, expectedOutput: 3 },
      { input: { nums: [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6] }, expectedOutput: 7 },
    ],
    tags: ['Array', 'Hash Table', 'Union Find'],
  },
  {
    title: 'Intersection of Two Arrays',
    slug: 'intersection-of-two-arrays',
    difficulty: 'EASY',
    category: 'HashMap / HashSet',
    description: 'Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.',
    constraints: [
      '1 <= nums1.length, nums2.length <= 1000',
      '0 <= nums1[i], nums2[i] <= 1000',
    ],
    examples: [
      {
        input: 'nums1 = [1,2,2,1], nums2 = [2,2]',
        output: '[2]',
      },
      {
        input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]',
        output: '[9,4]',
        explanation: '[4,9] is also accepted.',
      },
    ],
    starterCode: {
      javascript: `function intersection(nums1, nums2) {
  // Your solution here
}`,
      python: `def intersection(nums1, nums2):
    pass`,
      java: `class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        return {};
    }
};`,
      c: `int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums1: [1, 2, 2, 1], nums2: [2, 2] }, expectedOutput: [2] },
      { input: { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] }, expectedOutput: [4, 9] },
    ],
    hiddenTestCases: [
      { input: { nums1: [1], nums2: [1] }, expectedOutput: [1] },
      { input: { nums1: [1, 2, 3], nums2: [4, 5, 6] }, expectedOutput: [] },
    ],
    tags: ['Array', 'Hash Table', 'Two Pointers', 'Binary Search', 'Sorting'],
  },
  {
    title: 'Happy Number',
    slug: 'happy-number',
    difficulty: 'EASY',
    category: 'HashMap / HashSet',
    description: 'Write an algorithm to determine if a number `n` is happy.\n\nA happy number is a number defined by the following process:\n- Starting with any positive integer, replace the number by the sum of the squares of its digits.\n- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n- Those numbers for which this process ends in 1 are happy.\n\nReturn `true` if `n` is a happy number, and `false` if not.',
    constraints: [
      '1 <= n <= 2^31 - 1',
    ],
    examples: [
      {
        input: 'n = 19',
        output: 'true',
        explanation: '1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0^2 + 0^2 = 1',
      },
      {
        input: 'n = 2',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function isHappy(n) {
  // Your solution here
}`,
      python: `def isHappy(n):
    pass`,
      java: `class Solution {
    public boolean isHappy(int n) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isHappy(int n) {
        return true;
    }
};`,
      c: `bool isHappy(int n) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { n: 19 }, expectedOutput: true },
      { input: { n: 2 }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 7 }, expectedOutput: true },
      { input: { n: 1111111 }, expectedOutput: true },
    ],
    tags: ['Hash Table', 'Math', 'Two Pointers'],
  },
  {
    title: 'Isomorphic Strings',
    slug: 'isomorphic-strings',
    difficulty: 'EASY',
    category: 'HashMap / HashSet',
    description: 'Given two strings `s` and `t`, determine if they are isomorphic.\n\nTwo strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.\n\nAll occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.',
    constraints: [
      '1 <= s.length <= 5 * 10^4',
      't.length == s.length',
      's and t consist of any valid ascii character.',
    ],
    examples: [
      {
        input: 's = "egg", t = "add"',
        output: 'true',
      },
      {
        input: 's = "foo", t = "bar"',
        output: 'false',
      },
      {
        input: 's = "paper", t = "title"',
        output: 'true',
      },
    ],
    starterCode: {
      javascript: `function isIsomorphic(s, t) {
  // Your solution here
}`,
      python: `def isIsomorphic(s, t):
    pass`,
      java: `class Solution {
    public boolean isIsomorphic(String s, String t) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isIsomorphic(string s, string t) {
        return true;
    }
};`,
      c: `bool isIsomorphic(char* s, char* t) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'egg', t: 'add' }, expectedOutput: true },
      { input: { s: 'foo', t: 'bar' }, expectedOutput: false },
      { input: { s: 'paper', t: 'title' }, expectedOutput: true },
    ],
    hiddenTestCases: [
      { input: { s: 'badc', t: 'baba' }, expectedOutput: false },
      { input: { s: 'a', t: 'a' }, expectedOutput: true },
    ],
    tags: ['Hash Table', 'String'],
  },
  {
    title: 'Word Pattern',
    slug: 'word-pattern',
    difficulty: 'EASY',
    category: 'HashMap / HashSet',
    description: 'Given a `pattern` and a string `s`, find if `s` follows the same pattern.\n\nHere follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.',
    constraints: [
      '1 <= pattern.length <= 300',
      'pattern contains only lower-case English letters.',
      '1 <= s.length <= 3000',
      's contains only lowercase English letters and spaces \' \'.',
      's does not contain any leading or trailing spaces.',
      'All the words in s are separated by a single space.',
    ],
    examples: [
      {
        input: 'pattern = "abba", s = "dog cat cat dog"',
        output: 'true',
      },
      {
        input: 'pattern = "abba", s = "dog cat cat fish"',
        output: 'false',
      },
      {
        input: 'pattern = "aaaa", s = "dog cat cat dog"',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function wordPattern(pattern, s) {
  // Your solution here
}`,
      python: `def wordPattern(pattern, s):
    pass`,
      java: `class Solution {
    public boolean wordPattern(String pattern, String s) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool wordPattern(string pattern, string s) {
        return true;
    }
};`,
      c: `bool wordPattern(char* pattern, char* s) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { pattern: 'abba', s: 'dog cat cat dog' }, expectedOutput: true },
      { input: { pattern: 'abba', s: 'dog cat cat fish' }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { pattern: 'abba', s: 'dog dog dog dog' }, expectedOutput: false },
      { input: { pattern: 'aaa', s: 'aa aa aa aa' }, expectedOutput: false },
    ],
    tags: ['Hash Table', 'String'],
  },
  {
    title: 'Subarray Sum Equals K',
    slug: 'subarray-sum-equals-k',
    difficulty: 'MEDIUM',
    category: 'HashMap / HashSet',
    description: 'Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.\n\nA subarray is a contiguous non-empty sequence of elements within an array.',
    constraints: [
      '1 <= nums.length <= 2 * 10^4',
      '-1000 <= nums[i] <= 1000',
      '-10^7 <= k <= 10^7',
    ],
    examples: [
      {
        input: 'nums = [1,1,1], k = 2',
        output: '2',
      },
      {
        input: 'nums = [1,2,3], k = 3',
        output: '2',
      },
    ],
    starterCode: {
      javascript: `function subarraySum(nums, k) {
  // Your solution here
}`,
      python: `def subarraySum(nums, k):
    pass`,
      java: `class Solution {
    public int subarraySum(int[] nums, int k) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        return 0;
    }
};`,
      c: `int subarraySum(int* nums, int numsSize, int k) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 1, 1], k: 2 }, expectedOutput: 2 },
      { input: { nums: [1, 2, 3], k: 3 }, expectedOutput: 2 },
    ],
    hiddenTestCases: [
      { input: { nums: [1], k: 0 }, expectedOutput: 0 },
      { input: { nums: [-1, -1, 1], k: 0 }, expectedOutput: 1 },
      { input: { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7 }, expectedOutput: 4 },
    ],
    tags: ['Array', 'Hash Table', 'Prefix Sum'],
  },
  {
    title: 'Ransom Note',
    slug: 'ransom-note',
    difficulty: 'EASY',
    category: 'HashMap / HashSet',
    description: 'Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.\n\nEach letter in `magazine` can only be used once in `ransomNote`.',
    constraints: [
      '1 <= ransomNote.length, magazine.length <= 10^5',
      'ransomNote and magazine consist of lowercase English letters.',
    ],
    examples: [
      {
        input: 'ransomNote = "a", magazine = "b"',
        output: 'false',
      },
      {
        input: 'ransomNote = "aa", magazine = "ab"',
        output: 'false',
      },
      {
        input: 'ransomNote = "aa", magazine = "aab"',
        output: 'true',
      },
    ],
    starterCode: {
      javascript: `function canConstruct(ransomNote, magazine) {
  // Your solution here
}`,
      python: `def canConstruct(ransomNote, magazine):
    pass`,
      java: `class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        return true;
    }
};`,
      c: `bool canConstruct(char* ransomNote, char* magazine) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { ransomNote: 'a', magazine: 'b' }, expectedOutput: false },
      { input: { ransomNote: 'aa', magazine: 'aab' }, expectedOutput: true },
    ],
    hiddenTestCases: [
      { input: { ransomNote: 'bg', magazine: 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcffa' }, expectedOutput: true },
    ],
    tags: ['Hash Table', 'String', 'Counting'],
  },
  {
    title: 'Top K Frequent Elements',
    slug: 'top-k-frequent-elements',
    difficulty: 'MEDIUM',
    category: 'HashMap / HashSet',
    description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      'k is in the range [1, the number of unique elements in the array].',
      'It is guaranteed that the answer is unique.',
    ],
    examples: [
      {
        input: 'nums = [1,1,1,2,2,3], k = 2',
        output: '[1,2]',
      },
      {
        input: 'nums = [1], k = 1',
        output: '[1]',
      },
    ],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Your solution here
}`,
      python: `def topKFrequent(nums, k):
    pass`,
      java: `class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        return {};
    }
};`,
      c: `int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {
    *returnSize = k;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expectedOutput: [1, 2] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] },
    ],
    hiddenTestCases: [
      { input: { nums: [4, 1, -1, 2, -1, 2, 3], k: 2 }, expectedOutput: [-1, 2] },
    ],
    tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Sorting', 'Heap (Priority Queue)', 'Bucket Sort'],
  },
  {
    title: 'Insert Delete GetRandom O(1)',
    slug: 'insert-delete-getrandom-o1',
    difficulty: 'MEDIUM',
    category: 'HashMap / HashSet',
    description: 'Implement the `RandomizedSet` class:\n- `RandomizedSet()` Initializes the RandomizedSet object.\n- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.\n- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.\n- `int getRandom()` Returns a random element from the current set of elements (it\'s guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.\n\nYou must implement the functions of the class such that each function works in average `O(1)` time complexity.',
    constraints: [
      '-2^31 <= val <= 2^31 - 1',
      'At most 2 * 10^5 calls will be made to insert, remove, and getRandom.',
      'There will be at least one element in the data structure when getRandom is called.',
    ],
    examples: [
      {
        input: '["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]\n[[], [1], [2], [2], [], [1], [2], []]',
        output: '[null, true, false, true, 2, true, false, 2]',
      },
    ],
    starterCode: {
      javascript: `var RandomizedSet = function() {
    this.map = new Map();
    this.list = [];
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    const lastVal = this.list[this.list.length - 1];
    this.list[idx] = lastVal;
    this.map.set(lastVal, idx);
    this.list.pop();
    this.map.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    return this.list[Math.floor(Math.random() * this.list.length)];
};`,
      python: `import random

class RandomizedSet:
    def __init__(self):
        self.map = {}
        self.list = []

    def insert(self, val: int) -> bool:
        if val in self.map: return False
        self.map[val] = len(self.list)
        self.list.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.map: return False
        idx = self.map[val]
        last = self.list[-1]
        self.list[idx] = last
        self.map[last] = idx
        self.list.pop()
        del self.map[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.list)`,
    },
    supportedLanguages: ['javascript', 'python'],
    visibleTestCases: [
      { input: { operations: ['insert', 'remove', 'insert'], values: [[1], [2], [2]] }, expectedOutput: [true, false, true] },
    ],
    hiddenTestCases: [
      { input: { operations: ['insert', 'remove', 'remove'], values: [[0], [0], [0]] }, expectedOutput: [true, true, false] },
    ],
    tags: ['Array', 'Hash Table', 'Math', 'Design', 'Randomized'],
  },
];
