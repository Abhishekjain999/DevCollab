/**
 * DYNAMIC PROGRAMMING DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Climbing Stairs',
    slug: 'climbing-stairs',
    difficulty: 'EASY',
    category: 'Dynamic Programming',
    description: 'You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?',
    constraints: [
      '1 <= n <= 45',
    ],
    examples: [
      {
        input: 'n = 2',
        output: '2',
        explanation: 'There are two ways: 1 step + 1 step, or 2 steps.',
      },
      {
        input: 'n = 3',
        output: '3',
        explanation: 'There are three ways: (1+1+1), (1+2), (2+1).',
      },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Your solution here
}`,
      python: `def climbStairs(n):
    pass`,
      java: `class Solution {
    public int climbStairs(int n) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        return 0;
    }
};`,
      c: `int climbStairs(int n) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { n: 2 }, expectedOutput: 2 },
      { input: { n: 3 }, expectedOutput: 3 },
    ],
    hiddenTestCases: [
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 4 }, expectedOutput: 5 },
      { input: { n: 5 }, expectedOutput: 8 },
      { input: { n: 10 }, expectedOutput: 89 },
    ],
    tags: ['Math', 'Dynamic Programming', 'Memoization'],
  },
  {
    title: 'House Robber',
    slug: 'house-robber',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.',
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 400',
    ],
    examples: [
      {
        input: 'nums = [1,2,3,1]',
        output: '4',
        explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4.',
      },
      {
        input: 'nums = [2,7,9,3,1]',
        output: '12',
        explanation: 'Rob house 1 (2), house 3 (9) and house 5 (1). Total amount = 2 + 9 + 1 = 12.',
      },
    ],
    starterCode: {
      javascript: `function rob(nums) {
  // Your solution here
}`,
      python: `def rob(nums):
    pass`,
      java: `class Solution {
    public int rob(int[] nums) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int rob(vector<int>& nums) {
        return 0;
    }
};`,
      c: `int rob(int* nums, int numsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 2, 3, 1] }, expectedOutput: 4 },
      { input: { nums: [2, 7, 9, 3, 1] }, expectedOutput: 12 },
    ],
    hiddenTestCases: [
      { input: { nums: [0] }, expectedOutput: 0 },
      { input: { nums: [2, 1, 1, 2] }, expectedOutput: 4 },
      { input: { nums: [200, 3, 140, 20, 10] }, expectedOutput: 350 },
    ],
    tags: ['Array', 'Dynamic Programming'],
  },
  {
    title: 'Coin Change',
    slug: 'coin-change',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.',
    constraints: [
      '1 <= coins.length <= 12',
      '1 <= coins[i] <= 2^31 - 1',
      '0 <= amount <= 10^4',
    ],
    examples: [
      {
        input: 'coins = [1,2,5], amount = 11',
        output: '3',
        explanation: '11 = 5 + 5 + 1 (3 coins)',
      },
      {
        input: 'coins = [2], amount = 3',
        output: '-1',
      },
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Your solution here
}`,
      python: `def coinChange(coins, amount):
    pass`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        return -1;
    }
}`,
      cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        return -1;
    }
};`,
      c: `int coinChange(int* coins, int coinsSize, int amount) {
    return -1;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { coins: [1, 2, 5], amount: 11 }, expectedOutput: 3 },
      { input: { coins: [2], amount: 3 }, expectedOutput: -1 },
    ],
    hiddenTestCases: [
      { input: { coins: [1], amount: 0 }, expectedOutput: 0 },
      { input: { coins: [1, 3, 4, 5], amount: 7 }, expectedOutput: 2 },
      { input: { coins: [186, 419, 83, 408], amount: 6249 }, expectedOutput: 20 },
    ],
    tags: ['Array', 'Dynamic Programming', 'Breadth-First Search'],
  },
  {
    title: 'Longest Increasing Subsequence',
    slug: 'longest-increasing-subsequence',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'Given an integer array `nums`, return the length of the longest strictly increasing subsequence.\n\nA subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.',
    constraints: [
      '1 <= nums.length <= 2500',
      '-10^4 <= nums[i] <= 10^4',
    ],
    examples: [
      {
        input: 'nums = [10,9,2,5,3,7,101,18]',
        output: '4',
        explanation: 'The longest increasing subsequence is [2,3,7,101], therefore the length is 4.',
      },
      {
        input: 'nums = [0,1,0,3,2,3]',
        output: '4',
      },
    ],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Your solution here
}`,
      python: `def lengthOfLIS(nums):
    pass`,
      java: `class Solution {
    public int lengthOfLIS(int[] nums) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        return 0;
    }
};`,
      c: `int lengthOfLIS(int* nums, int numsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] }, expectedOutput: 4 },
      { input: { nums: [0, 1, 0, 3, 2, 3] }, expectedOutput: 4 },
    ],
    hiddenTestCases: [
      { input: { nums: [7, 7, 7, 7, 7, 7, 7] }, expectedOutput: 1 },
      { input: { nums: [4, 10, 4, 3, 8, 9] }, expectedOutput: 3 },
      { input: { nums: [1, 3, 6, 7, 9, 4, 10, 5, 6] }, expectedOutput: 6 },
    ],
    tags: ['Array', 'Binary Search', 'Dynamic Programming'],
  },
  {
    title: 'Longest Common Subsequence',
    slug: 'longest-common-subsequence',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.',
    constraints: [
      '1 <= text1.length, text2.length <= 1000',
      'text1 and text2 consist of only lowercase English characters.',
    ],
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: '3',
        explanation: 'The longest common subsequence is "ace" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: '3',
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: '0',
      },
    ],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  // Your solution here
}`,
      python: `def longestCommonSubsequence(text1, text2):
    pass`,
      java: `class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        return 0;
    }
};`,
      c: `int longestCommonSubsequence(char* text1, char* text2) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { text1: 'abcde', text2: 'ace' }, expectedOutput: 3 },
      { input: { text1: 'abc', text2: 'abc' }, expectedOutput: 3 },
    ],
    hiddenTestCases: [
      { input: { text1: 'abc', text2: 'def' }, expectedOutput: 0 },
      { input: { text1: 'oxcp', text2: 'pocx' }, expectedOutput: 2 },
      { input: { text1: 'ezupkr', text2: 'ubmrapg' }, expectedOutput: 2 },
    ],
    tags: ['String', 'Dynamic Programming'],
  },
  {
    title: '0/1 Knapsack',
    slug: '0-1-knapsack',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'Given `values` and `weights` of `n` items, put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).',
    constraints: [
      '1 <= n <= 1000',
      '1 <= W <= 1000',
      '1 <= weights[i], values[i] <= 1000',
    ],
    examples: [
      {
        input: 'W = 4, weights = [4, 5, 1], values = [1, 2, 3]',
        output: '3',
      },
      {
        input: 'W = 3, weights = [1, 2, 3], values = [10, 15, 40]',
        output: '40',
      },
    ],
    starterCode: {
      javascript: `function knapSack(W, weights, values) {
  // Your solution here
}`,
      python: `def knapSack(W, weights, values):
    pass`,
      java: `class Solution {
    public int knapSack(int W, int[] weights, int[] values) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int knapSack(int W, vector<int>& weights, vector<int>& values) {
        return 0;
    }
};`,
      c: `int knapSack(int W, int* weights, int* values, int n) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { W: 4, weights: [4, 5, 1], values: [1, 2, 3] }, expectedOutput: 3 },
      { input: { W: 3, weights: [1, 2, 3], values: [10, 15, 40] }, expectedOutput: 40 },
    ],
    hiddenTestCases: [
      { input: { W: 50, weights: [10, 20, 30], values: [60, 100, 120] }, expectedOutput: 220 },
      { input: { W: 10, weights: [5, 4, 6, 3], values: [10, 40, 30, 50] }, expectedOutput: 90 },
    ],
    tags: ['Dynamic Programming'],
  },
  {
    title: 'Word Break',
    slug: 'word-break',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.',
    constraints: [
      '1 <= s.length <= 300',
      '1 <= wordDict.length <= 1000',
      '1 <= wordDict[i].length <= 20',
      's and wordDict[i] consist of only lowercase English letters.',
      'All strings of wordDict are unique.',
    ],
    examples: [
      {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: 'true',
        explanation: 'Return true because "leetcode" can be segmented as "leet code".',
      },
      {
        input: 's = "applepenapple", wordDict = ["apple","pen"]',
        output: 'true',
      },
    ],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
  // Your solution here
}`,
      python: `def wordBreak(s, wordDict):
    pass`,
      java: `class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        return false;
    }
};`,
      c: `bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    return false;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: 'leetcode', wordDict: ['leet', 'code'] }, expectedOutput: true },
      { input: { s: 'applepenapple', wordDict: ['apple', 'pen'] }, expectedOutput: true },
    ],
    hiddenTestCases: [
      { input: { s: 'catsandog', wordDict: ['cats', 'dog', 'sand', 'and', 'cat'] }, expectedOutput: false },
      { input: { s: 'cars', wordDict: ['car', 'ca', 'rs'] }, expectedOutput: true },
    ],
    tags: ['Array', 'Hash Table', 'String', 'Dynamic Programming', 'Trie'],
  },
  {
    title: 'Partition Equal Subset Sum',
    slug: 'partition-equal-subset-sum',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.',
    constraints: [
      '1 <= nums.length <= 200',
      '1 <= nums[i] <= 100',
    ],
    examples: [
      {
        input: 'nums = [1,5,11,5]',
        output: 'true',
        explanation: 'The array can be partitioned as [1, 5, 5] and [11].',
      },
      {
        input: 'nums = [1,2,3,5]',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function canPartition(nums) {
  // Your solution here
}`,
      python: `def canPartition(nums):
    pass`,
      java: `class Solution {
    public boolean canPartition(int[] nums) {
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool canPartition(vector<int>& nums) {
        return false;
    }
};`,
      c: `bool canPartition(int* nums, int numsSize) {
    return false;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 5, 11, 5] }, expectedOutput: true },
      { input: { nums: [1, 2, 3, 5] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { nums: [1, 2, 5] }, expectedOutput: false },
      { input: { nums: [14, 9, 8, 4, 3, 2] }, expectedOutput: true },
      { input: { nums: [1, 1] }, expectedOutput: true },
    ],
    tags: ['Array', 'Dynamic Programming'],
  },
  {
    title: 'Unique Paths',
    slug: 'unique-paths',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'There is a robot on an `m x n` grid. The robot is initially located at the top-left corner `(0, 0)` and tries to move to the bottom-right corner `(m - 1, n - 1)`. The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.',
    constraints: [
      '1 <= m, n <= 100',
    ],
    examples: [
      {
        input: 'm = 3, n = 7',
        output: '28',
      },
      {
        input: 'm = 3, n = 2',
        output: '3',
      },
    ],
    starterCode: {
      javascript: `function uniquePaths(m, n) {
  // Your solution here
}`,
      python: `def uniquePaths(m, n):
    pass`,
      java: `class Solution {
    public int uniquePaths(int m, int n) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int uniquePaths(int m, int n) {
        return 0;
    }
};`,
      c: `int uniquePaths(int m, int n) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { m: 3, n: 7 }, expectedOutput: 28 },
      { input: { m: 3, n: 2 }, expectedOutput: 3 },
    ],
    hiddenTestCases: [
      { input: { m: 1, n: 1 }, expectedOutput: 1 },
      { input: { m: 7, n: 3 }, expectedOutput: 28 },
      { input: { m: 10, n: 10 }, expectedOutput: 48620 },
    ],
    tags: ['Math', 'Dynamic Programming', 'Combinatorics'],
  },
  {
    title: 'Decode Ways',
    slug: 'decode-ways',
    difficulty: 'MEDIUM',
    category: 'Dynamic Programming',
    description: 'A message containing letters from A-Z can be encoded into numbers using the mapping \'A\' -> "1", \'B\' -> "2", ... \'Z\' -> "26".\n\nTo decode an encoded message, all the digits must be grouped then mapped back into letters. Given a string `s` containing only digits, return the number of ways to decode it.',
    constraints: [
      '1 <= s.length <= 100',
      's contains only digits and may contain leading zero(s).',
    ],
    examples: [
      {
        input: 's = "12"',
        output: '2',
        explanation: '"12" could be decoded as "AB" (1 2) or "L" (12).',
      },
      {
        input: 's = "226"',
        output: '3',
        explanation: '"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).',
      },
      {
        input: 's = "06"',
        output: '0',
      },
    ],
    starterCode: {
      javascript: `function numDecodings(s) {
  // Your solution here
}`,
      python: `def numDecodings(s):
    pass`,
      java: `class Solution {
    public int numDecodings(String s) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int numDecodings(string s) {
        return 0;
    }
};`,
      c: `int numDecodings(char* s) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { s: '12' }, expectedOutput: 2 },
      { input: { s: '226' }, expectedOutput: 3 },
    ],
    hiddenTestCases: [
      { input: { s: '06' }, expectedOutput: 0 },
      { input: { s: '10' }, expectedOutput: 1 },
      { input: { s: '27' }, expectedOutput: 1 },
      { input: { s: '2101' }, expectedOutput: 1 },
    ],
    tags: ['String', 'Dynamic Programming'],
  },
];
