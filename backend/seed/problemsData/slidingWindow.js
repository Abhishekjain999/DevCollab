/**
 * SLIDING WINDOW DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.',
    ],
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: '3',
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Your solution here
}`,
      python: `def lengthOfLongestSubstring(s):
    pass`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        return 0;
    }
};`,
      c: `int lengthOfLongestSubstring(char* s) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'abcabcbb' }, expectedOutput: 3 },
      { input: { s: 'bbbbb' }, expectedOutput: 1 },
      { input: { s: 'pwwkew' }, expectedOutput: 3 },
    ],
    hiddenTestCases: [
      { input: { s: '' }, expectedOutput: 0 },
      { input: { s: ' ' }, expectedOutput: 1 },
      { input: { s: 'au' }, expectedOutput: 2 },
      { input: { s: 'dvdf' }, expectedOutput: 3 },
      { input: { s: 'tmmzuxt' }, expectedOutput: 5 },
    ],
    tags: ['Hash Table', 'String', 'Sliding Window'],
  },
  {
    title: 'Maximum Average Subarray I',
    slug: 'maximum-average-subarray-i',
    difficulty: 'EASY',
    category: 'Sliding Window',
    description: 'You are given an integer array `nums` consisting of `n` elements, and an integer `k`.\n\nFind a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value.',
    constraints: [
      'n == nums.length',
      '1 <= k <= n <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    examples: [
      {
        input: 'nums = [1,12,-5,-6,50,3], k = 4',
        output: '12.75',
        explanation: 'Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75',
      },
      {
        input: 'nums = [5], k = 1',
        output: '5.0',
      },
    ],
    starterCode: {
      javascript: `function findMaxAverage(nums, k) {
  // Your solution here
}`,
      python: `def findMaxAverage(nums, k):
    pass`,
      java: `class Solution {
    public double findMaxAverage(int[] nums, int k) {
        return 0.0;
    }
}`,
      cpp: `class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        return 0.0;
    }
};`,
      c: `double findMaxAverage(int* nums, int numsSize, int k) {
    return 0.0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 12, -5, -6, 50, 3], k: 4 }, expectedOutput: 12.75 },
      { input: { nums: [5], k: 1 }, expectedOutput: 5.0 },
    ],
    hiddenTestCases: [
      { input: { nums: [0, 4, 0, 3, 2], k: 1 }, expectedOutput: 4.0 },
      { input: { nums: [-1], k: 1 }, expectedOutput: -1.0 },
    ],
    tags: ['Array', 'Sliding Window'],
  },
  {
    title: 'Minimum Size Subarray Sum',
    slug: 'minimum-size-subarray-sum',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.',
    constraints: [
      '1 <= target <= 10^9',
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^4',
    ],
    examples: [
      {
        input: 'target = 7, nums = [2,3,1,2,4,3]',
        output: '2',
        explanation: 'The subarray [4,3] has the minimal length under the problem constraint.',
      },
      {
        input: 'target = 4, nums = [1,4,4]',
        output: '1',
      },
      {
        input: 'target = 11, nums = [1,1,1,1,1,1,1,1]',
        output: '0',
      },
    ],
    starterCode: {
      javascript: `function minSubArrayLen(target, nums) {
  // Your solution here
}`,
      python: `def minSubArrayLen(target, nums):
    pass`,
      java: `class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        return 0;
    }
};`,
      c: `int minSubArrayLen(int target, int* nums, int numsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { target: 7, nums: [2, 3, 1, 2, 4, 3] }, expectedOutput: 2 },
      { input: { target: 4, nums: [1, 4, 4] }, expectedOutput: 1 },
      { input: { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1] }, expectedOutput: 0 },
    ],
    hiddenTestCases: [
      { input: { target: 6, nums: [10, 2, 3] }, expectedOutput: 1 },
      { input: { target: 15, nums: [1, 2, 3, 4, 5] }, expectedOutput: 5 },
    ],
    tags: ['Array', 'Binary Search', 'Sliding Window', 'Prefix Sum'],
  },
  {
    title: 'Find All Anagrams in a String',
    slug: 'find-all-anagrams-in-a-string',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'Given two strings `s` and `p`, return an array of all the start indices of `p`\'s anagrams in `s`. You may return the answer in any order.',
    constraints: [
      '1 <= s.length, p.length <= 3 * 10^4',
      's and p consist of lowercase English letters.',
    ],
    examples: [
      {
        input: 's = "cbaebabacd", p = "abc"',
        output: '[0,6]',
        explanation: 'The substring with start index = 0 is "cba", which is an anagram of "abc". The substring with start index = 6 is "bac", which is an anagram of "abc".',
      },
      {
        input: 's = "abab", p = "ab"',
        output: '[0,1,2]',
      },
    ],
    starterCode: {
      javascript: `function findAnagrams(s, p) {
  // Your solution here
}`,
      python: `def findAnagrams(s, p):
    pass`,
      java: `class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        return {};
    }
};`,
      c: `int* findAnagrams(char* s, char* p, int* returnSize) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'cbaebabacd', p: 'abc' }, expectedOutput: [0, 6] },
      { input: { s: 'abab', p: 'ab' }, expectedOutput: [0, 1, 2] },
    ],
    hiddenTestCases: [
      { input: { s: 'a', p: 'a' }, expectedOutput: [0] },
      { input: { s: 'aa', p: 'bb' }, expectedOutput: [] },
    ],
    tags: ['Hash Table', 'String', 'Sliding Window'],
  },
  {
    title: 'Permutation in String',
    slug: 'permutation-in-string',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.\n\nIn other words, return `true` if one of `s1`\'s permutations is the substring of `s2`.',
    constraints: [
      '1 <= s1.length, s2.length <= 10^4',
      's1 and s2 consist of lowercase English letters.',
    ],
    examples: [
      {
        input: 's1 = "ab", s2 = "eidbaooo"',
        output: 'true',
        explanation: 's2 contains one permutation of s1 ("ba").',
      },
      {
        input: 's1 = "ab", s2 = "eidboaoo"',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function checkInclusion(s1, s2) {
  // Your solution here
}`,
      python: `def checkInclusion(s1, s2):
    pass`,
      java: `class Solution {
    public boolean checkInclusion(String s1, String s2) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        return true;
    }
};`,
      c: `bool checkInclusion(char* s1, char* s2) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s1: 'ab', s2: 'eidbaooo' }, expectedOutput: true },
      { input: { s1: 'ab', s2: 'eidboaoo' }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { s1: 'a', s2: 'a' }, expectedOutput: true },
      { input: { s1: 'adc', s2: 'dcda' }, expectedOutput: true },
    ],
    tags: ['Hash Table', 'Two Pointers', 'String', 'Sliding Window'],
  },
  {
    title: 'Longest Repeating Character Replacement',
    slug: 'longest-repeating-character-replacement',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.',
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of only uppercase English letters.',
      '0 <= k <= s.length',
    ],
    examples: [
      {
        input: 's = "ABAB", k = 2',
        output: '4',
        explanation: 'Replace the two \'A\'s with two \'B\'s or vice versa.',
      },
      {
        input: 's = "AABABBA", k = 1',
        output: '4',
        explanation: 'Replace the one \'A\' in the middle with \'B\' and form "AABBBBA". The substring "BBBB" has length 4.',
      },
    ],
    starterCode: {
      javascript: `function characterReplacement(s, k) {
  // Your solution here
}`,
      python: `def characterReplacement(s, k):
    pass`,
      java: `class Solution {
    public int characterReplacement(String s, int k) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int characterReplacement(string s, int k) {
        return 0;
    }
};`,
      c: `int characterReplacement(char* s, int k) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'ABAB', k: 2 }, expectedOutput: 4 },
      { input: { s: 'AABABBA', k: 1 }, expectedOutput: 4 },
    ],
    hiddenTestCases: [
      { input: { s: 'AAAA', k: 2 }, expectedOutput: 4 },
      { input: { s: 'ABBB', k: 2 }, expectedOutput: 4 },
    ],
    tags: ['Hash Table', 'String', 'Sliding Window'],
  },
  {
    title: 'Fruit Into Baskets',
    slug: 'fruit-into-baskets',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the type of fruit the `i-th` tree produces.\n\nYou want to collect as much fruit as possible. However, the owner has some strict rules:\n- You only have two baskets, and each basket can only hold a single type of fruit.\n- Starting from any tree, you must pick exactly one fruit from every tree while moving to the right.\n- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.\n\nReturn the maximum number of fruits you can pick.',
    constraints: [
      '1 <= fruits.length <= 10^5',
      '0 <= fruits[i] < fruits.length',
    ],
    examples: [
      {
        input: 'fruits = [1,2,1]',
        output: '3',
      },
      {
        input: 'fruits = [0,1,2,2]',
        output: '3',
        explanation: 'We can pick from trees [1,2,2].',
      },
      {
        input: 'fruits = [1,2,3,2,2]',
        output: '4',
        explanation: 'We can pick from trees [2,3,2,2].',
      },
    ],
    starterCode: {
      javascript: `function totalFruit(fruits) {
  // Your solution here
}`,
      python: `def totalFruit(fruits):
    pass`,
      java: `class Solution {
    public int totalFruit(int[] fruits) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        return 0;
    }
};`,
      c: `int totalFruit(int* fruits, int fruitsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { fruits: [1, 2, 1] }, expectedOutput: 3 },
      { input: { fruits: [0, 1, 2, 2] }, expectedOutput: 3 },
      { input: { fruits: [1, 2, 3, 2, 2] }, expectedOutput: 4 },
    ],
    hiddenTestCases: [
      { input: { fruits: [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4] }, expectedOutput: 5 },
    ],
    tags: ['Array', 'Hash Table', 'Sliding Window'],
  },
  {
    title: 'Minimum Window Substring',
    slug: 'minimum-window-substring',
    difficulty: 'HARD',
    category: 'Sliding Window',
    description: 'Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.',
    constraints: [
      'm == s.length',
      'n == t.length',
      '1 <= m, n <= 10^5',
      's and t consist of uppercase and lowercase English letters.',
    ],
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: 'The minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
        explanation: 'Both \'a\'s from t must be included in the window.',
      },
    ],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Your solution here
}`,
      python: `def minWindow(s, t):
    pass`,
      java: `class Solution {
    public String minWindow(String s, String t) {
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string minWindow(string s, string t) {
        return "";
    }
};`,
      c: `char* minWindow(char* s, char* t) {
    return "";
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'ADOBECODEBANC', t: 'ABC' }, expectedOutput: 'BANC' },
      { input: { s: 'a', t: 'a' }, expectedOutput: 'a' },
      { input: { s: 'a', t: 'aa' }, expectedOutput: '' },
    ],
    hiddenTestCases: [
      { input: { s: 'ab', t: 'b' }, expectedOutput: 'b' },
      { input: { s: 'bba', t: 'ab' }, expectedOutput: 'ba' },
    ],
    tags: ['Hash Table', 'String', 'Sliding Window'],
  },
  {
    title: 'Maximum Number of Vowels in a Substring of Given Length',
    slug: 'maximum-number-of-vowels-in-a-substring',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'Given a string `s` and an integer `k`, return the maximum number of vowel letters in any substring of `s` with length `k`.\n\nVowel letters in English are \'a\', \'e\', \'i\', \'o\', and \'u\'.',
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of lowercase English letters.',
      '1 <= k <= s.length',
    ],
    examples: [
      {
        input: 's = "abciiidef", k = 3',
        output: '3',
        explanation: 'The substring "iii" contains 3 vowel letters.',
      },
      {
        input: 's = "aeiou", k = 2',
        output: '2',
      },
      {
        input: 's = "leetcode", k = 3',
        output: '2',
      },
    ],
    starterCode: {
      javascript: `function maxVowels(s, k) {
  // Your solution here
}`,
      python: `def maxVowels(s, k):
    pass`,
      java: `class Solution {
    public int maxVowels(String s, int k) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxVowels(string s, int k) {
        return 0;
    }
};`,
      c: `int maxVowels(char* s, int k) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'abciiidef', k: 3 }, expectedOutput: 3 },
      { input: { s: 'aeiou', k: 2 }, expectedOutput: 2 },
      { input: { s: 'leetcode', k: 3 }, expectedOutput: 2 },
    ],
    hiddenTestCases: [
      { input: { s: 'rhythms', k: 4 }, expectedOutput: 0 },
      { input: { s: 'tryhard', k: 4 }, expectedOutput: 1 },
    ],
    tags: ['String', 'Sliding Window'],
  },
  {
    title: 'Max Consecutive Ones III',
    slug: 'max-consecutive-ones-iii',
    difficulty: 'MEDIUM',
    category: 'Sliding Window',
    description: 'Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`\'s in the array if you can flip at most `k` `0`\'s.',
    constraints: [
      '1 <= nums.length <= 10^5',
      'nums[i] is either 0 or 1.',
      '0 <= k <= nums.length',
    ],
    examples: [
      {
        input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2',
        output: '6',
        explanation: '[1,1,1,0,0,1,1,1,1,1,1] bolded numbers were flipped from 0 to 1.',
      },
      {
        input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3',
        output: '10',
      },
    ],
    starterCode: {
      javascript: `function longestOnes(nums, k) {
  // Your solution here
}`,
      python: `def longestOnes(nums, k):
    pass`,
      java: `class Solution {
    public int longestOnes(int[] nums, int k) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        return 0;
    }
};`,
      c: `int longestOnes(int* nums, int numsSize, int k) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 }, expectedOutput: 6 },
      { input: { nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3 }, expectedOutput: 10 },
    ],
    hiddenTestCases: [
      { input: { nums: [0, 0, 0, 0], k: 0 }, expectedOutput: 0 },
      { input: { nums: [1, 1, 1, 1], k: 0 }, expectedOutput: 4 },
    ],
    tags: ['Array', 'Binary Search', 'Sliding Window', 'Prefix Sum'],
  },
];
