/**
 * ARRAYS DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'EASY',
    category: 'Arrays',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Your solution here
}`,
      python: `def twoSum(nums, target):
    # Your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your solution here
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your solution here
        return {};
    }
};`,
      c: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Your solution here
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      {
        input: { nums: [2, 7, 11, 15], target: 9 },
        expectedOutput: [0, 1],
        explanation: '2 + 7 = 9 at indices 0 and 1',
      },
      {
        input: { nums: [3, 2, 4], target: 6 },
        expectedOutput: [1, 2],
        explanation: '2 + 4 = 6 at indices 1 and 2',
      },
    ],
    hiddenTestCases: [
      { input: { nums: [3, 3], target: 6 }, expectedOutput: [0, 1] },
      { input: { nums: [-1, -2, -3, -4, -5], target: -8 }, expectedOutput: [2, 4] },
      { input: { nums: [0, 4, 3, 0], target: 0 }, expectedOutput: [0, 3] },
      { input: { nums: [1000000000, 500, 1000000000], target: 2000000000 }, expectedOutput: [0, 2] },
    ],
    tags: ['Array', 'Hash Table'],
  },
  {
    title: 'Best Time to Buy and Sell Stock',
    slug: 'best-time-to-buy-and-sell-stock',
    difficulty: 'EASY',
    category: 'Arrays',
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.',
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4',
    ],
    examples: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.',
      },
      {
        input: 'prices = [7,6,4,3,1]',
        output: '0',
        explanation: 'In this case, no transactions are done and the max profit = 0.',
      },
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Your solution here
}`,
      python: `def maxProfit(prices):
    # Your solution here
    pass`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        return 0;
    }
};`,
      c: `int maxProfit(int* prices, int pricesSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { prices: [7, 1, 5, 3, 6, 4] }, expectedOutput: 5 },
      { input: { prices: [7, 6, 4, 3, 1] }, expectedOutput: 0 },
    ],
    hiddenTestCases: [
      { input: { prices: [1, 2] }, expectedOutput: 1 },
      { input: { prices: [2, 4, 1] }, expectedOutput: 2 },
      { input: { prices: [3, 2, 6, 5, 0, 3] }, expectedOutput: 4 },
      { input: { prices: [1] }, expectedOutput: 0 },
    ],
    tags: ['Array', 'Dynamic Programming'],
  },
  {
    title: 'Maximum Subarray',
    slug: 'maximum-subarray',
    difficulty: 'MEDIUM',
    category: 'Arrays',
    description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum (Kadane's Algorithm).",
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.',
      },
      {
        input: 'nums = [1]',
        output: '1',
      },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Your solution here
}`,
      python: `def maxSubArray(nums):
    # Your solution here
    pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        return 0;
    }
};`,
      c: `int maxSubArray(int* nums, int numsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expectedOutput: 6 },
      { input: { nums: [1] }, expectedOutput: 1 },
    ],
    hiddenTestCases: [
      { input: { nums: [5, 4, -1, 7, 8] }, expectedOutput: 23 },
      { input: { nums: [-1, -2, -3, -4] }, expectedOutput: -1 },
      { input: { nums: [-2, -1] }, expectedOutput: -1 },
      { input: { nums: [1, 2, 3, 4, 5] }, expectedOutput: 15 },
    ],
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
  },
  {
    title: 'Product of Array Except Self',
    slug: 'product-of-array-except-self',
    difficulty: 'MEDIUM',
    category: 'Arrays',
    description: 'Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.',
    constraints: [
      '2 <= nums.length <= 10^5',
      '-30 <= nums[i] <= 30',
      'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.',
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4]',
        output: '[24,12,8,6]',
      },
      {
        input: 'nums = [-1,1,0,-3,3]',
        output: '[0,0,9,0,0]',
      },
    ],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Your solution here
}`,
      python: `def productExceptSelf(nums):
    # Your solution here
    pass`,
      java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        return {};
    }
};`,
      c: `int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: [24, 12, 8, 6] },
      { input: { nums: [-1, 1, 0, -3, 3] }, expectedOutput: [0, 0, 9, 0, 0] },
    ],
    hiddenTestCases: [
      { input: { nums: [2, 3] }, expectedOutput: [3, 2] },
      { input: { nums: [0, 0] }, expectedOutput: [0, 0] },
      { input: { nums: [4, 5, 1, 8, 2] }, expectedOutput: [80, 64, 320, 40, 160] },
    ],
    tags: ['Array', 'Prefix Sum'],
  },
  {
    title: 'Merge Sorted Array',
    slug: 'merge-sorted-array',
    difficulty: 'EASY',
    category: 'Arrays',
    description: 'You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\nMerge `nums1` and `nums2` into a single array sorted in non-decreasing order.',
    constraints: [
      'nums1.length == m + n',
      'nums2.length == n',
      '0 <= m, n <= 200',
      '1 <= m + n <= 200',
    ],
    examples: [
      {
        input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
        output: '[1,2,2,3,5,6]',
      },
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Modify nums1 in-place or return merged array
}`,
      python: `def merge(nums1, m, nums2, n):
    pass`,
      java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
    }
}`,
      cpp: `class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    }
};`,
      c: `void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 }, expectedOutput: [1, 2, 2, 3, 5, 6] },
      { input: { nums1: [1], m: 1, nums2: [], n: 0 }, expectedOutput: [1] },
    ],
    hiddenTestCases: [
      { input: { nums1: [0], m: 0, nums2: [1], n: 1 }, expectedOutput: [1] },
      { input: { nums1: [4, 5, 6, 0, 0, 0], m: 3, nums2: [1, 2, 3], n: 3 }, expectedOutput: [1, 2, 3, 4, 5, 6] },
    ],
    tags: ['Array', 'Two Pointers', 'Sorting'],
  },
  {
    title: 'Move Zeroes',
    slug: 'move-zeroes',
    difficulty: 'EASY',
    category: 'Arrays',
    description: 'Given an integer array `nums`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-2^31 <= nums[i] <= 2^31 - 1',
    ],
    examples: [
      {
        input: 'nums = [0,1,0,3,12]',
        output: '[1,3,12,0,0]',
      },
      {
        input: 'nums = [0]',
        output: '[0]',
      },
    ],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Modify nums in-place
}`,
      python: `def moveZeroes(nums):
    pass`,
      java: `class Solution {
    public void moveZeroes(int[] nums) {
    }
}`,
      cpp: `class Solution {
public:
    void moveZeroes(vector<int>& nums) {
    }
};`,
      c: `void moveZeroes(int* nums, int numsSize) {
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [0, 1, 0, 3, 12] }, expectedOutput: [1, 3, 12, 0, 0] },
      { input: { nums: [0] }, expectedOutput: [0] },
    ],
    hiddenTestCases: [
      { input: { nums: [1, 2, 3] }, expectedOutput: [1, 2, 3] },
      { input: { nums: [0, 0, 1] }, expectedOutput: [1, 0, 0] },
      { input: { nums: [2, 1] }, expectedOutput: [2, 1] },
    ],
    tags: ['Array', 'Two Pointers'],
  },
  {
    title: 'Rotate Array',
    slug: 'rotate-array',
    difficulty: 'MEDIUM',
    category: 'Arrays',
    description: 'Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-2^31 <= nums[i] <= 2^31 - 1',
      '0 <= k <= 10^5',
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5,6,7], k = 3',
        output: '[5,6,7,1,2,3,4]',
      },
      {
        input: 'nums = [-1,-100,3,99], k = 2',
        output: '[3,99,-1,-100]',
      },
    ],
    starterCode: {
      javascript: `function rotate(nums, k) {
  // Rotate nums in-place
}`,
      python: `def rotate(nums, k):
    pass`,
      java: `class Solution {
    public void rotate(int[] nums, int k) {
    }
}`,
      cpp: `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
    }
};`,
      c: `void rotate(int* nums, int numsSize, int k) {
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }, expectedOutput: [5, 6, 7, 1, 2, 3, 4] },
      { input: { nums: [-1, -100, 3, 99], k: 2 }, expectedOutput: [3, 99, -1, -100] },
    ],
    hiddenTestCases: [
      { input: { nums: [1], k: 0 }, expectedOutput: [1] },
      { input: { nums: [1, 2], k: 3 }, expectedOutput: [2, 1] },
      { input: { nums: [1, 2, 3], k: 4 }, expectedOutput: [3, 1, 2] },
    ],
    tags: ['Array', 'Math', 'Two Pointers'],
  },
  {
    title: 'Majority Element',
    slug: 'majority-element',
    difficulty: 'EASY',
    category: 'Arrays',
    description: 'Given an array `nums` of size `n`, return the majority element.\n\nThe majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array (Boyer-Moore Voting Algorithm).',
    constraints: [
      'n == nums.length',
      '1 <= n <= 5 * 10^4',
      '-10^9 <= nums[i] <= 10^9',
    ],
    examples: [
      {
        input: 'nums = [3,2,3]',
        output: '3',
      },
      {
        input: 'nums = [2,2,1,1,1,2,2]',
        output: '2',
      },
    ],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Your solution here
}`,
      python: `def majorityElement(nums):
    pass`,
      java: `class Solution {
    public int majorityElement(int[] nums) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int majorityElement(vector<int>& nums) {
        return 0;
    }
};`,
      c: `int majorityElement(int* nums, int numsSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [3, 2, 3] }, expectedOutput: 3 },
      { input: { nums: [2, 2, 1, 1, 1, 2, 2] }, expectedOutput: 2 },
    ],
    hiddenTestCases: [
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [6, 5, 5] }, expectedOutput: 5 },
      { input: { nums: [8, 8, 7, 7, 7, 8, 8] }, expectedOutput: 8 },
    ],
    tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Counting'],
  },
  {
    title: 'Container With Most Water',
    slug: 'container-with-most-water',
    difficulty: 'MEDIUM',
    category: 'Arrays',
    description: 'You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.',
    constraints: [
      'n == height.length',
      '2 <= n <= 10^5',
      '0 <= height[i] <= 10^4',
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7]',
        output: '49',
        explanation: 'The max area is between index 1 and index 8 with height min(8, 7) * 7 = 49.',
      },
      {
        input: 'height = [1,1]',
        output: '1',
      },
    ],
    starterCode: {
      javascript: `function maxArea(height) {
  // Your solution here
}`,
      python: `def maxArea(height):
    pass`,
      java: `class Solution {
    public int maxArea(int[] height) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxArea(vector<int>& height) {
        return 0;
    }
};`,
      c: `int maxArea(int* height, int heightSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, expectedOutput: 49 },
      { input: { height: [1, 1] }, expectedOutput: 1 },
    ],
    hiddenTestCases: [
      { input: { height: [4, 3, 2, 1, 4] }, expectedOutput: 16 },
      { input: { height: [1, 2, 1] }, expectedOutput: 2 },
      { input: { height: [2, 3, 4, 5, 18, 17, 6] }, expectedOutput: 17 },
    ],
    tags: ['Array', 'Two Pointers', 'Greedy'],
  },
  {
    title: '3Sum',
    slug: '3sum',
    difficulty: 'MEDIUM',
    category: 'Arrays',
    description: 'Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.',
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5',
    ],
    examples: [
      {
        input: 'nums = [-1,0,1,2,-1,-4]',
        output: '[[-1,-1,2],[-1,0,1]]',
      },
      {
        input: 'nums = [0,1,1]',
        output: '[]',
      },
    ],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Your solution here
}`,
      python: `def threeSum(nums):
    pass`,
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        return {};
    }
};`,
      c: `int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { nums: [-1, 0, 1, 2, -1, -4] }, expectedOutput: [[-1, -1, 2], [-1, 0, 1]] },
      { input: { nums: [0, 1, 1] }, expectedOutput: [] },
    ],
    hiddenTestCases: [
      { input: { nums: [0, 0, 0] }, expectedOutput: [[0, 0, 0]] },
      { input: { nums: [-2, 0, 1, 1, 2] }, expectedOutput: [[-2, 0, 2], [-2, 1, 1]] },
      { input: { nums: [-1, 0, 1] }, expectedOutput: [[-1, 0, 1]] },
    ],
    tags: ['Array', 'Two Pointers', 'Sorting'],
  },
];
