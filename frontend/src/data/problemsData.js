// Auto-generated curated 70+ DSA problem bank fallback data
export const initialProblems = [
  {
    "_id": "two-sum",
    "title": "Two Sum",
    "slug": "two-sum",
    "difficulty": "EASY",
    "category": "Arrays",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]",
        "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    "starterCode": {
      "javascript": "function twoSum(nums, target) {\n  // Your solution here\n}",
      "python": "def twoSum(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your solution here\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Your solution here\n        return {};\n    }\n};",
      "c": "int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    // Your solution here\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            2,
            7,
            11,
            15
          ],
          "target": 9
        },
        "expectedOutput": [
          0,
          1
        ],
        "explanation": "2 + 7 = 9 at indices 0 and 1"
      },
      {
        "input": {
          "nums": [
            3,
            2,
            4
          ],
          "target": 6
        },
        "expectedOutput": [
          1,
          2
        ],
        "explanation": "2 + 4 = 6 at indices 1 and 2"
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            3,
            3
          ],
          "target": 6
        },
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": {
          "nums": [
            -1,
            -2,
            -3,
            -4,
            -5
          ],
          "target": -8
        },
        "expectedOutput": [
          2,
          4
        ]
      },
      {
        "input": {
          "nums": [
            0,
            4,
            3,
            0
          ],
          "target": 0
        },
        "expectedOutput": [
          0,
          3
        ]
      },
      {
        "input": {
          "nums": [
            1000000000,
            500,
            1000000000
          ],
          "target": 2000000000
        },
        "expectedOutput": [
          0,
          2
        ]
      }
    ],
    "tags": [
      "Array",
      "Hash Table"
    ],
    "createdAt": "2026-10-09T10:10:07.399Z"
  },
  {
    "_id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "EASY",
    "category": "Arrays",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and the max profit = 0."
      }
    ],
    "starterCode": {
      "javascript": "function maxProfit(prices) {\n  // Your solution here\n}",
      "python": "def maxProfit(prices):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        return 0;\n    }\n};",
      "c": "int maxProfit(int* prices, int pricesSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "prices": [
            7,
            1,
            5,
            3,
            6,
            4
          ]
        },
        "expectedOutput": 5
      },
      {
        "input": {
          "prices": [
            7,
            6,
            4,
            3,
            1
          ]
        },
        "expectedOutput": 0
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "prices": [
            1,
            2
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "prices": [
            2,
            4,
            1
          ]
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "prices": [
            3,
            2,
            6,
            5,
            0,
            3
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "prices": [
            1
          ]
        },
        "expectedOutput": 0
      }
    ],
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "maximum-subarray",
    "title": "Maximum Subarray",
    "slug": "maximum-subarray",
    "difficulty": "MEDIUM",
    "category": "Arrays",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum (Kadane's Algorithm).",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1"
      }
    ],
    "starterCode": {
      "javascript": "function maxSubArray(nums) {\n  // Your solution here\n}",
      "python": "def maxSubArray(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        return 0;\n    }\n};",
      "c": "int maxSubArray(int* nums, int numsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            -2,
            1,
            -3,
            4,
            -1,
            2,
            1,
            -5,
            4
          ]
        },
        "expectedOutput": 6
      },
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": 1
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            5,
            4,
            -1,
            7,
            8
          ]
        },
        "expectedOutput": 23
      },
      {
        "input": {
          "nums": [
            -1,
            -2,
            -3,
            -4
          ]
        },
        "expectedOutput": -1
      },
      {
        "input": {
          "nums": [
            -2,
            -1
          ]
        },
        "expectedOutput": -1
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": 15
      }
    ],
    "tags": [
      "Array",
      "Divide and Conquer",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self",
    "difficulty": "MEDIUM",
    "category": "Arrays",
    "description": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]"
      },
      {
        "input": "nums = [-1,1,0,-3,3]",
        "output": "[0,0,9,0,0]"
      }
    ],
    "starterCode": {
      "javascript": "function productExceptSelf(nums) {\n  // Your solution here\n}",
      "python": "def productExceptSelf(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        return {};\n    }\n};",
      "c": "int* productExceptSelf(int* nums, int numsSize, int* returnSize) {\n    *returnSize = numsSize;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            4
          ]
        },
        "expectedOutput": [
          24,
          12,
          8,
          6
        ]
      },
      {
        "input": {
          "nums": [
            -1,
            1,
            0,
            -3,
            3
          ]
        },
        "expectedOutput": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            2,
            3
          ]
        },
        "expectedOutput": [
          3,
          2
        ]
      },
      {
        "input": {
          "nums": [
            0,
            0
          ]
        },
        "expectedOutput": [
          0,
          0
        ]
      },
      {
        "input": {
          "nums": [
            4,
            5,
            1,
            8,
            2
          ]
        },
        "expectedOutput": [
          80,
          64,
          320,
          40,
          160
        ]
      }
    ],
    "tags": [
      "Array",
      "Prefix Sum"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "merge-sorted-array",
    "title": "Merge Sorted Array",
    "slug": "merge-sorted-array",
    "difficulty": "EASY",
    "category": "Arrays",
    "description": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\nMerge `nums1` and `nums2` into a single array sorted in non-decreasing order.",
    "constraints": [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 <= m, n <= 200",
      "1 <= m + n <= 200"
    ],
    "examples": [
      {
        "input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        "output": "[1,2,2,3,5,6]"
      }
    ],
    "starterCode": {
      "javascript": "function merge(nums1, m, nums2, n) {\n  // Modify nums1 in-place or return merged array\n}",
      "python": "def merge(nums1, m, nums2, n):\n    pass",
      "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n    }\n};",
      "c": "void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums1": [
            1,
            2,
            3,
            0,
            0,
            0
          ],
          "m": 3,
          "nums2": [
            2,
            5,
            6
          ],
          "n": 3
        },
        "expectedOutput": [
          1,
          2,
          2,
          3,
          5,
          6
        ]
      },
      {
        "input": {
          "nums1": [
            1
          ],
          "m": 1,
          "nums2": [],
          "n": 0
        },
        "expectedOutput": [
          1
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums1": [
            0
          ],
          "m": 0,
          "nums2": [
            1
          ],
          "n": 1
        },
        "expectedOutput": [
          1
        ]
      },
      {
        "input": {
          "nums1": [
            4,
            5,
            6,
            0,
            0,
            0
          ],
          "m": 3,
          "nums2": [
            1,
            2,
            3
          ],
          "n": 3
        },
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      }
    ],
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "move-zeroes",
    "title": "Move Zeroes",
    "slug": "move-zeroes",
    "difficulty": "EASY",
    "category": "Arrays",
    "description": "Given an integer array `nums`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]"
      },
      {
        "input": "nums = [0]",
        "output": "[0]"
      }
    ],
    "starterCode": {
      "javascript": "function moveZeroes(nums) {\n  // Modify nums in-place\n}",
      "python": "def moveZeroes(nums):\n    pass",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n    }\n};",
      "c": "void moveZeroes(int* nums, int numsSize) {\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            0,
            1,
            0,
            3,
            12
          ]
        },
        "expectedOutput": [
          1,
          3,
          12,
          0,
          0
        ]
      },
      {
        "input": {
          "nums": [
            0
          ]
        },
        "expectedOutput": [
          0
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": [
          1,
          2,
          3
        ]
      },
      {
        "input": {
          "nums": [
            0,
            0,
            1
          ]
        },
        "expectedOutput": [
          1,
          0,
          0
        ]
      },
      {
        "input": {
          "nums": [
            2,
            1
          ]
        },
        "expectedOutput": [
          2,
          1
        ]
      }
    ],
    "tags": [
      "Array",
      "Two Pointers"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "rotate-array",
    "title": "Rotate Array",
    "slug": "rotate-array",
    "difficulty": "MEDIUM",
    "category": "Arrays",
    "description": "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-2^31 <= nums[i] <= 2^31 - 1",
      "0 <= k <= 10^5"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]"
      },
      {
        "input": "nums = [-1,-100,3,99], k = 2",
        "output": "[3,99,-1,-100]"
      }
    ],
    "starterCode": {
      "javascript": "function rotate(nums, k) {\n  // Rotate nums in-place\n}",
      "python": "def rotate(nums, k):\n    pass",
      "java": "class Solution {\n    public void rotate(int[] nums, int k) {\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n    }\n};",
      "c": "void rotate(int* nums, int numsSize, int k) {\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "k": 3
        },
        "expectedOutput": [
          5,
          6,
          7,
          1,
          2,
          3,
          4
        ]
      },
      {
        "input": {
          "nums": [
            -1,
            -100,
            3,
            99
          ],
          "k": 2
        },
        "expectedOutput": [
          3,
          99,
          -1,
          -100
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            1
          ],
          "k": 0
        },
        "expectedOutput": [
          1
        ]
      },
      {
        "input": {
          "nums": [
            1,
            2
          ],
          "k": 3
        },
        "expectedOutput": [
          2,
          1
        ]
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3
          ],
          "k": 4
        },
        "expectedOutput": [
          3,
          1,
          2
        ]
      }
    ],
    "tags": [
      "Array",
      "Math",
      "Two Pointers"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "majority-element",
    "title": "Majority Element",
    "slug": "majority-element",
    "difficulty": "EASY",
    "category": "Arrays",
    "description": "Given an array `nums` of size `n`, return the majority element.\n\nThe majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array (Boyer-Moore Voting Algorithm).",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 5 * 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [3,2,3]",
        "output": "3"
      },
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2"
      }
    ],
    "starterCode": {
      "javascript": "function majorityElement(nums) {\n  // Your solution here\n}",
      "python": "def majorityElement(nums):\n    pass",
      "java": "class Solution {\n    public int majorityElement(int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        return 0;\n    }\n};",
      "c": "int majorityElement(int* nums, int numsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            3,
            2,
            3
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "nums": [
            2,
            2,
            1,
            1,
            1,
            2,
            2
          ]
        },
        "expectedOutput": 2
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "nums": [
            6,
            5,
            5
          ]
        },
        "expectedOutput": 5
      },
      {
        "input": {
          "nums": [
            8,
            8,
            7,
            7,
            7,
            8,
            8
          ]
        },
        "expectedOutput": 8
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Counting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "container-with-most-water",
    "title": "Container With Most Water",
    "slug": "container-with-most-water",
    "difficulty": "MEDIUM",
    "category": "Arrays",
    "description": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.",
    "constraints": [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "The max area is between index 1 and index 8 with height min(8, 7) * 7 = 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1"
      }
    ],
    "starterCode": {
      "javascript": "function maxArea(height) {\n  // Your solution here\n}",
      "python": "def maxArea(height):\n    pass",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        return 0;\n    }\n};",
      "c": "int maxArea(int* height, int heightSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "height": [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        },
        "expectedOutput": 49
      },
      {
        "input": {
          "height": [
            1,
            1
          ]
        },
        "expectedOutput": 1
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "height": [
            4,
            3,
            2,
            1,
            4
          ]
        },
        "expectedOutput": 16
      },
      {
        "input": {
          "height": [
            1,
            2,
            1
          ]
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "height": [
            2,
            3,
            4,
            5,
            18,
            17,
            6
          ]
        },
        "expectedOutput": 17
      }
    ],
    "tags": [
      "Array",
      "Two Pointers",
      "Greedy"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "3sum",
    "title": "3Sum",
    "slug": "3sum",
    "difficulty": "MEDIUM",
    "category": "Arrays",
    "description": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]"
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]"
      }
    ],
    "starterCode": {
      "javascript": "function threeSum(nums) {\n  // Your solution here\n}",
      "python": "def threeSum(nums):\n    pass",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        return {};\n    }\n};",
      "c": "int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        },
        "expectedOutput": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "input": {
          "nums": [
            0,
            1,
            1
          ]
        },
        "expectedOutput": []
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            0,
            0,
            0
          ]
        },
        "expectedOutput": [
          [
            0,
            0,
            0
          ]
        ]
      },
      {
        "input": {
          "nums": [
            -2,
            0,
            1,
            1,
            2
          ]
        },
        "expectedOutput": [
          [
            -2,
            0,
            2
          ],
          [
            -2,
            1,
            1
          ]
        ]
      },
      {
        "input": {
          "nums": [
            -1,
            0,
            1
          ]
        },
        "expectedOutput": [
          [
            -1,
            0,
            1
          ]
        ]
      }
    ],
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "reverse-string",
    "title": "Reverse String",
    "slug": "reverse-string",
    "difficulty": "EASY",
    "category": "Strings",
    "description": "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with `O(1)` extra memory.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character."
    ],
    "examples": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]"
      },
      {
        "input": "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]"
      }
    ],
    "starterCode": {
      "javascript": "function reverseString(s) {\n  // Modify s in-place\n}",
      "python": "def reverseString(s):\n    pass",
      "java": "class Solution {\n    public void reverseString(char[] s) {\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n    }\n};",
      "c": "void reverseString(char* s, int sSize) {\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": [
            "h",
            "e",
            "l",
            "l",
            "o"
          ]
        },
        "expectedOutput": [
          "o",
          "l",
          "l",
          "e",
          "h"
        ]
      },
      {
        "input": {
          "s": [
            "H",
            "a",
            "n",
            "n",
            "a",
            "h"
          ]
        },
        "expectedOutput": [
          "h",
          "a",
          "n",
          "n",
          "a",
          "H"
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": [
            "a"
          ]
        },
        "expectedOutput": [
          "a"
        ]
      },
      {
        "input": {
          "s": [
            "A",
            " ",
            "b"
          ]
        },
        "expectedOutput": [
          "b",
          " ",
          "A"
        ]
      },
      {
        "input": {
          "s": [
            "1",
            "2",
            "3",
            "4"
          ]
        },
        "expectedOutput": [
          "4",
          "3",
          "2",
          "1"
        ]
      }
    ],
    "tags": [
      "Two Pointers",
      "String"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "valid-palindrome",
    "title": "Valid Palindrome",
    "slug": "valid-palindrome",
    "difficulty": "EASY",
    "category": "Strings",
    "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      }
    ],
    "starterCode": {
      "javascript": "function isPalindrome(s) {\n  // Your solution here\n}",
      "python": "def isPalindrome(s):\n    pass",
      "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        return true;\n    }\n};",
      "c": "bool isPalindrome(char* s) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "A man, a plan, a canal: Panama"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "race a car"
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": " "
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "0P"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "s": "ab_a"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": ".,"
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Two Pointers",
      "String"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "valid-anagram",
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "difficulty": "EASY",
    "category": "Strings",
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isAnagram(s, t) {\n  // Your solution here\n}",
      "python": "def isAnagram(s, t):\n    pass",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        return true;\n    }\n};",
      "c": "bool isAnagram(char* s, char* t) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "anagram",
          "t": "nagaram"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "rat",
          "t": "car"
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "a",
          "t": "ab"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "s": "listen",
          "t": "silent"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "aacc",
          "t": "ccac"
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-common-prefix",
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "difficulty": "EASY",
    "category": "Strings",
    "description": "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `\"\"`.",
    "constraints": [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200",
      "strs[i] consists of only lowercase English letters."
    ],
    "examples": [
      {
        "input": "strs = [\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\""
      },
      {
        "input": "strs = [\"dog\",\"racecar\",\"car\"]",
        "output": "\"\"",
        "explanation": "There is no common prefix among the input strings."
      }
    ],
    "starterCode": {
      "javascript": "function longestCommonPrefix(strs) {\n  // Your solution here\n}",
      "python": "def longestCommonPrefix(strs):\n    pass",
      "java": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        return \"\";\n    }\n};",
      "c": "char* longestCommonPrefix(char** strs, int strsSize) {\n    return \"\";\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "strs": [
            "flower",
            "flow",
            "flight"
          ]
        },
        "expectedOutput": "fl"
      },
      {
        "input": {
          "strs": [
            "dog",
            "racecar",
            "car"
          ]
        },
        "expectedOutput": ""
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "strs": [
            "a"
          ]
        },
        "expectedOutput": "a"
      },
      {
        "input": {
          "strs": [
            "cir",
            "car"
          ]
        },
        "expectedOutput": "c"
      },
      {
        "input": {
          "strs": [
            "",
            "b"
          ]
        },
        "expectedOutput": ""
      },
      {
        "input": {
          "strs": [
            "interspecies",
            "interstellar",
            "interstate"
          ]
        },
        "expectedOutput": "inters"
      }
    ],
    "tags": [
      "String",
      "Trie"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "group-anagrams",
    "title": "Group Anagrams",
    "slug": "group-anagrams",
    "difficulty": "MEDIUM",
    "category": "Strings",
    "description": "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.",
    "constraints": [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100",
      "strs[i] consists of lowercase English letters."
    ],
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
      },
      {
        "input": "strs = [\"\"]",
        "output": "[[\"\"]]"
      },
      {
        "input": "strs = [\"a\"]",
        "output": "[[\"a\"]]"
      }
    ],
    "starterCode": {
      "javascript": "function groupAnagrams(strs) {\n  // Your solution here\n}",
      "python": "def groupAnagrams(strs):\n    pass",
      "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        return {};\n    }\n};",
      "c": "char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "strs": [
            "eat",
            "tea",
            "tan",
            "ate",
            "nat",
            "bat"
          ]
        },
        "expectedOutput": [
          [
            "eat",
            "tea",
            "ate"
          ],
          [
            "tan",
            "nat"
          ],
          [
            "bat"
          ]
        ]
      },
      {
        "input": {
          "strs": [
            ""
          ]
        },
        "expectedOutput": [
          [
            ""
          ]
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "strs": [
            "a"
          ]
        },
        "expectedOutput": [
          [
            "a"
          ]
        ]
      },
      {
        "input": {
          "strs": [
            "ab",
            "ba",
            "abc",
            "cba",
            "bca"
          ]
        },
        "expectedOutput": [
          [
            "ab",
            "ba"
          ],
          [
            "abc",
            "cba",
            "bca"
          ]
        ]
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring",
    "difficulty": "MEDIUM",
    "category": "Strings",
    "description": "Given a string `s`, return the longest palindromic substring in `s`.",
    "constraints": [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters."
    ],
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "\"aba\" is also a valid answer."
      },
      {
        "input": "s = \"cbbd\"",
        "output": "\"bb\""
      }
    ],
    "starterCode": {
      "javascript": "function longestPalindrome(s) {\n  // Your solution here\n}",
      "python": "def longestPalindrome(s):\n    pass",
      "java": "class Solution {\n    public String longestPalindrome(String s) {\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        return \"\";\n    }\n};",
      "c": "char* longestPalindrome(char* s) {\n    return \"\";\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "babad"
        },
        "expectedOutput": "bab"
      },
      {
        "input": {
          "s": "cbbd"
        },
        "expectedOutput": "bb"
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "a"
        },
        "expectedOutput": "a"
      },
      {
        "input": {
          "s": "ac"
        },
        "expectedOutput": "a"
      },
      {
        "input": {
          "s": "racecar"
        },
        "expectedOutput": "racecar"
      },
      {
        "input": {
          "s": "abbcccbbb"
        },
        "expectedOutput": "bbcccbb"
      }
    ],
    "tags": [
      "String",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "string-compression",
    "title": "String Compression",
    "slug": "string-compression",
    "difficulty": "MEDIUM",
    "category": "Strings",
    "description": "Given an array of characters `chars`, compress it using the following algorithm:\n\nBegin with an empty string `s`. For each group of consecutive repeating characters in `chars`:\n- If the group length is `1`, append the character to `s`.\n- Otherwise, append the character followed by the group's length.\n\nReturn the new length of the array after in-place compression.",
    "constraints": [
      "1 <= chars.length <= 2000",
      "chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol."
    ],
    "examples": [
      {
        "input": "chars = [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
        "output": "6",
        "explanation": "The groups are \"aa\", \"bb\", and \"ccc\". This compresses to \"a2b2c3\"."
      },
      {
        "input": "chars = [\"a\"]",
        "output": "1"
      }
    ],
    "starterCode": {
      "javascript": "function compress(chars) {\n  // Your solution here\n}",
      "python": "def compress(chars):\n    pass",
      "java": "class Solution {\n    public int compress(char[] chars) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int compress(vector<char>& chars) {\n        return 0;\n    }\n};",
      "c": "int compress(char* chars, int charsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "chars": [
            "a",
            "a",
            "b",
            "b",
            "c",
            "c",
            "c"
          ]
        },
        "expectedOutput": 6
      },
      {
        "input": {
          "chars": [
            "a"
          ]
        },
        "expectedOutput": 1
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "chars": [
            "a",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b"
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "chars": [
            "a",
            "b",
            "c"
          ]
        },
        "expectedOutput": 3
      }
    ],
    "tags": [
      "Two Pointers",
      "String"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "reverse-words-in-a-string",
    "title": "Reverse Words in a String",
    "slug": "reverse-words-in-a-string",
    "difficulty": "MEDIUM",
    "category": "Strings",
    "description": "Given an input string `s`, reverse the order of the words.\n\nA word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.\n\nReturn a string of the words in reverse order concatenated by a single space. Note that `s` may contain leading or trailing spaces or multiple spaces between two words.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "s contains English letters (upper-case and lower-case), digits, and spaces ' '.",
      "There is at least one word in s."
    ],
    "examples": [
      {
        "input": "s = \"the sky is blue\"",
        "output": "\"blue is sky the\""
      },
      {
        "input": "s = \"  hello world  \"",
        "output": "\"world hello\""
      }
    ],
    "starterCode": {
      "javascript": "function reverseWords(s) {\n  // Your solution here\n}",
      "python": "def reverseWords(s):\n    pass",
      "java": "class Solution {\n    public String reverseWords(String s) {\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string reverseWords(string s) {\n        return \"\";\n    }\n};",
      "c": "char* reverseWords(char* s) {\n    return \"\";\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "the sky is blue"
        },
        "expectedOutput": "blue is sky the"
      },
      {
        "input": {
          "s": "  hello world  "
        },
        "expectedOutput": "world hello"
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "a good   example"
        },
        "expectedOutput": "example good a"
      },
      {
        "input": {
          "s": "EPY2giL"
        },
        "expectedOutput": "EPY2giL"
      }
    ],
    "tags": [
      "Two Pointers",
      "String"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "is-subsequence",
    "title": "Is Subsequence",
    "slug": "is-subsequence",
    "difficulty": "EASY",
    "category": "Strings",
    "description": "Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.\n\nA subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.",
    "constraints": [
      "0 <= s.length <= 100",
      "0 <= t.length <= 10^4",
      "s and t consist only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"abc\", t = \"ahbgdc\"",
        "output": "true"
      },
      {
        "input": "s = \"axc\", t = \"ahbgdc\"",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isSubsequence(s, t) {\n  // Your solution here\n}",
      "python": "def isSubsequence(s, t):\n    pass",
      "java": "class Solution {\n    public boolean isSubsequence(String s, String t) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        return true;\n    }\n};",
      "c": "bool isSubsequence(char* s, char* t) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "abc",
          "t": "ahbgdc"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "axc",
          "t": "ahbgdc"
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "",
          "t": "ahbgdc"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "b",
          "t": "c"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "s": "ace",
          "t": "abcde"
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "first-unique-character-in-a-string",
    "title": "First Unique Character in a String",
    "slug": "first-unique-character-in-a-string",
    "difficulty": "EASY",
    "category": "Strings",
    "description": "Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of only lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"leetcode\"",
        "output": "0"
      },
      {
        "input": "s = \"loveleetcode\"",
        "output": "2"
      },
      {
        "input": "s = \"aabb\"",
        "output": "-1"
      }
    ],
    "starterCode": {
      "javascript": "function firstUniqChar(s) {\n  // Your solution here\n}",
      "python": "def firstUniqChar(s):\n    pass",
      "java": "class Solution {\n    public int firstUniqChar(String s) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int firstUniqChar(string s) {\n        return 0;\n    }\n};",
      "c": "int firstUniqChar(char* s) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "leetcode"
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "s": "loveleetcode"
        },
        "expectedOutput": 2
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "aabb"
        },
        "expectedOutput": -1
      },
      {
        "input": {
          "s": "dddccdbba"
        },
        "expectedOutput": 8
      },
      {
        "input": {
          "s": "z"
        },
        "expectedOutput": 0
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Queue",
      "Counting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "climbing-stairs",
    "title": "Climbing Stairs",
    "slug": "climbing-stairs",
    "difficulty": "EASY",
    "category": "Dynamic Programming",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 <= n <= 45"
    ],
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "There are two ways: 1 step + 1 step, or 2 steps."
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "There are three ways: (1+1+1), (1+2), (2+1)."
      }
    ],
    "starterCode": {
      "javascript": "function climbStairs(n) {\n  // Your solution here\n}",
      "python": "def climbStairs(n):\n    pass",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        return 0;\n    }\n};",
      "c": "int climbStairs(int n) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "n": 2
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "n": 3
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "n": 1
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "n": 4
        },
        "expectedOutput": 5
      },
      {
        "input": {
          "n": 5
        },
        "expectedOutput": 8
      },
      {
        "input": {
          "n": 10
        },
        "expectedOutput": 89
      }
    ],
    "tags": [
      "Math",
      "Dynamic Programming",
      "Memoization"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "house-robber",
    "title": "House Robber",
    "slug": "house-robber",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4."
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob house 1 (2), house 3 (9) and house 5 (1). Total amount = 2 + 9 + 1 = 12."
      }
    ],
    "starterCode": {
      "javascript": "function rob(nums) {\n  // Your solution here\n}",
      "python": "def rob(nums):\n    pass",
      "java": "class Solution {\n    public int rob(int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        return 0;\n    }\n};",
      "c": "int rob(int* nums, int numsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            1
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "nums": [
            2,
            7,
            9,
            3,
            1
          ]
        },
        "expectedOutput": 12
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            0
          ]
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "nums": [
            2,
            1,
            1,
            2
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "nums": [
            200,
            3,
            140,
            20,
            10
          ]
        },
        "expectedOutput": 350
      }
    ],
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "coin-change",
    "title": "Coin Change",
    "slug": "coin-change",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1"
      }
    ],
    "starterCode": {
      "javascript": "function coinChange(coins, amount) {\n  // Your solution here\n}",
      "python": "def coinChange(coins, amount):\n    pass",
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        return -1;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        return -1;\n    }\n};",
      "c": "int coinChange(int* coins, int coinsSize, int amount) {\n    return -1;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "coins": [
            1,
            2,
            5
          ],
          "amount": 11
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "coins": [
            2
          ],
          "amount": 3
        },
        "expectedOutput": -1
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "coins": [
            1
          ],
          "amount": 0
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "coins": [
            1,
            3,
            4,
            5
          ],
          "amount": 7
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "coins": [
            186,
            419,
            83,
            408
          ],
          "amount": 6249
        },
        "expectedOutput": 20
      }
    ],
    "tags": [
      "Array",
      "Dynamic Programming",
      "Breadth-First Search"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.\n\nA subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.",
    "constraints": [
      "1 <= nums.length <= 2500",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2,3,7,101], therefore the length is 4."
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4"
      }
    ],
    "starterCode": {
      "javascript": "function lengthOfLIS(nums) {\n  // Your solution here\n}",
      "python": "def lengthOfLIS(nums):\n    pass",
      "java": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        return 0;\n    }\n};",
      "c": "int lengthOfLIS(int* nums, int numsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            10,
            9,
            2,
            5,
            3,
            7,
            101,
            18
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "nums": [
            0,
            1,
            0,
            3,
            2,
            3
          ]
        },
        "expectedOutput": 4
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "nums": [
            4,
            10,
            4,
            3,
            8,
            9
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "nums": [
            1,
            3,
            6,
            7,
            9,
            4,
            10,
            5,
            6
          ]
        },
        "expectedOutput": 6
      }
    ],
    "tags": [
      "Array",
      "Binary Search",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "text1 and text2 consist of only lowercase English characters."
    ],
    "examples": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3",
        "explanation": "The longest common subsequence is \"ace\" and its length is 3."
      },
      {
        "input": "text1 = \"abc\", text2 = \"abc\"",
        "output": "3"
      },
      {
        "input": "text1 = \"abc\", text2 = \"def\"",
        "output": "0"
      }
    ],
    "starterCode": {
      "javascript": "function longestCommonSubsequence(text1, text2) {\n  // Your solution here\n}",
      "python": "def longestCommonSubsequence(text1, text2):\n    pass",
      "java": "class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        return 0;\n    }\n};",
      "c": "int longestCommonSubsequence(char* text1, char* text2) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "text1": "abcde",
          "text2": "ace"
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "text1": "abc",
          "text2": "abc"
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "text1": "abc",
          "text2": "def"
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "text1": "oxcp",
          "text2": "pocx"
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "text1": "ezupkr",
          "text2": "ubmrapg"
        },
        "expectedOutput": 2
      }
    ],
    "tags": [
      "String",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "0-1-knapsack",
    "title": "0/1 Knapsack",
    "slug": "0-1-knapsack",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "Given `values` and `weights` of `n` items, put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).",
    "constraints": [
      "1 <= n <= 1000",
      "1 <= W <= 1000",
      "1 <= weights[i], values[i] <= 1000"
    ],
    "examples": [
      {
        "input": "W = 4, weights = [4, 5, 1], values = [1, 2, 3]",
        "output": "3"
      },
      {
        "input": "W = 3, weights = [1, 2, 3], values = [10, 15, 40]",
        "output": "40"
      }
    ],
    "starterCode": {
      "javascript": "function knapSack(W, weights, values) {\n  // Your solution here\n}",
      "python": "def knapSack(W, weights, values):\n    pass",
      "java": "class Solution {\n    public int knapSack(int W, int[] weights, int[] values) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int knapSack(int W, vector<int>& weights, vector<int>& values) {\n        return 0;\n    }\n};",
      "c": "int knapSack(int W, int* weights, int* values, int n) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "W": 4,
          "weights": [
            4,
            5,
            1
          ],
          "values": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "W": 3,
          "weights": [
            1,
            2,
            3
          ],
          "values": [
            10,
            15,
            40
          ]
        },
        "expectedOutput": 40
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "W": 50,
          "weights": [
            10,
            20,
            30
          ],
          "values": [
            60,
            100,
            120
          ]
        },
        "expectedOutput": 220
      },
      {
        "input": {
          "W": 10,
          "weights": [
            5,
            4,
            6,
            3
          ],
          "values": [
            10,
            40,
            30,
            50
          ]
        },
        "expectedOutput": 90
      }
    ],
    "tags": [
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "word-break",
    "title": "Word Break",
    "slug": "word-break",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
    "constraints": [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20",
      "s and wordDict[i] consist of only lowercase English letters.",
      "All strings of wordDict are unique."
    ],
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": "Return true because \"leetcode\" can be segmented as \"leet code\"."
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
        "output": "true"
      }
    ],
    "starterCode": {
      "javascript": "function wordBreak(s, wordDict) {\n  // Your solution here\n}",
      "python": "def wordBreak(s, wordDict):\n    pass",
      "java": "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        return false;\n    }\n};",
      "c": "bool wordBreak(char* s, char** wordDict, int wordDictSize) {\n    return false;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "leetcode",
          "wordDict": [
            "leet",
            "code"
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "applepenapple",
          "wordDict": [
            "apple",
            "pen"
          ]
        },
        "expectedOutput": true
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "catsandog",
          "wordDict": [
            "cats",
            "dog",
            "sand",
            "and",
            "cat"
          ]
        },
        "expectedOutput": false
      },
      {
        "input": {
          "s": "cars",
          "wordDict": [
            "car",
            "ca",
            "rs"
          ]
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Trie"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "slug": "partition-equal-subset-sum",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.",
    "constraints": [
      "1 <= nums.length <= 200",
      "1 <= nums[i] <= 100"
    ],
    "examples": [
      {
        "input": "nums = [1,5,11,5]",
        "output": "true",
        "explanation": "The array can be partitioned as [1, 5, 5] and [11]."
      },
      {
        "input": "nums = [1,2,3,5]",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function canPartition(nums) {\n  // Your solution here\n}",
      "python": "def canPartition(nums):\n    pass",
      "java": "class Solution {\n    public boolean canPartition(int[] nums) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        return false;\n    }\n};",
      "c": "bool canPartition(int* nums, int numsSize) {\n    return false;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            5,
            11,
            5
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            5
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            5
          ]
        },
        "expectedOutput": false
      },
      {
        "input": {
          "nums": [
            14,
            9,
            8,
            4,
            3,
            2
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "nums": [
            1,
            1
          ]
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "unique-paths",
    "title": "Unique Paths",
    "slug": "unique-paths",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner `(0, 0)` and tries to move to the bottom-right corner `(m - 1, n - 1)`. The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "examples": [
      {
        "input": "m = 3, n = 7",
        "output": "28"
      },
      {
        "input": "m = 3, n = 2",
        "output": "3"
      }
    ],
    "starterCode": {
      "javascript": "function uniquePaths(m, n) {\n  // Your solution here\n}",
      "python": "def uniquePaths(m, n):\n    pass",
      "java": "class Solution {\n    public int uniquePaths(int m, int n) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        return 0;\n    }\n};",
      "c": "int uniquePaths(int m, int n) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "m": 3,
          "n": 7
        },
        "expectedOutput": 28
      },
      {
        "input": {
          "m": 3,
          "n": 2
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "m": 1,
          "n": 1
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "m": 7,
          "n": 3
        },
        "expectedOutput": 28
      },
      {
        "input": {
          "m": 10,
          "n": 10
        },
        "expectedOutput": 48620
      }
    ],
    "tags": [
      "Math",
      "Dynamic Programming",
      "Combinatorics"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "decode-ways",
    "title": "Decode Ways",
    "slug": "decode-ways",
    "difficulty": "MEDIUM",
    "category": "Dynamic Programming",
    "description": "A message containing letters from A-Z can be encoded into numbers using the mapping 'A' -> \"1\", 'B' -> \"2\", ... 'Z' -> \"26\".\n\nTo decode an encoded message, all the digits must be grouped then mapped back into letters. Given a string `s` containing only digits, return the number of ways to decode it.",
    "constraints": [
      "1 <= s.length <= 100",
      "s contains only digits and may contain leading zero(s)."
    ],
    "examples": [
      {
        "input": "s = \"12\"",
        "output": "2",
        "explanation": "\"12\" could be decoded as \"AB\" (1 2) or \"L\" (12)."
      },
      {
        "input": "s = \"226\"",
        "output": "3",
        "explanation": "\"226\" could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2 6)."
      },
      {
        "input": "s = \"06\"",
        "output": "0"
      }
    ],
    "starterCode": {
      "javascript": "function numDecodings(s) {\n  // Your solution here\n}",
      "python": "def numDecodings(s):\n    pass",
      "java": "class Solution {\n    public int numDecodings(String s) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numDecodings(string s) {\n        return 0;\n    }\n};",
      "c": "int numDecodings(char* s) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "12"
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "s": "226"
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "06"
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "s": "10"
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "s": "27"
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "s": "2101"
        },
        "expectedOutput": 1
      }
    ],
    "tags": [
      "String",
      "Dynamic Programming"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "number-of-islands",
    "title": "Number of Islands",
    "slug": "number-of-islands",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'."
    ],
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1"
      },
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3"
      }
    ],
    "starterCode": {
      "javascript": "function numIslands(grid) {\n  // Your solution here\n}",
      "python": "def numIslands(grid):\n    pass",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        return 0;\n    }\n};",
      "c": "int numIslands(char** grid, int gridSize, int* gridColSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "grid": [
            [
              "1",
              "1",
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ]
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "grid": [
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "1",
              "1"
            ]
          ]
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "grid": [
            [
              "1"
            ]
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "grid": [
            [
              "0"
            ]
          ]
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "grid": [
            [
              "1",
              "0",
              "1"
            ],
            [
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "0",
              "1"
            ]
          ]
        },
        "expectedOutput": 5
      }
    ],
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Matrix"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "clone-graph",
    "title": "Clone Graph",
    "slug": "clone-graph",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.\n\nEach node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.",
    "constraints": [
      "The number of nodes in the graph is in the range [0, 100].",
      "1 <= Node.val <= 100",
      "Node.val is unique for each node.",
      "There are no repeated edges and no self-loops in the graph.",
      "The Graph is connected and all nodes can be visited starting from the given node."
    ],
    "examples": [
      {
        "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]"
      },
      {
        "input": "adjList = [[]]",
        "output": "[[]]"
      }
    ],
    "starterCode": {
      "javascript": "function cloneGraph(node) {\n  // Your solution here\n}",
      "python": "def cloneGraph(node):\n    pass",
      "java": "class Solution {\n    public Node cloneGraph(Node node) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    Node* cloneGraph(Node* node) {\n        return nullptr;\n    }\n};",
      "c": "struct Node* cloneGraph(struct Node* s) {\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "adjList": [
            [
              2,
              4
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              1,
              3
            ]
          ]
        },
        "expectedOutput": [
          [
            2,
            4
          ],
          [
            1,
            3
          ],
          [
            2,
            4
          ],
          [
            1,
            3
          ]
        ]
      },
      {
        "input": {
          "adjList": [
            []
          ]
        },
        "expectedOutput": [
          []
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "adjList": []
        },
        "expectedOutput": []
      },
      {
        "input": {
          "adjList": [
            [
              2
            ],
            [
              1
            ]
          ]
        },
        "expectedOutput": [
          [
            2
          ],
          [
            1
          ]
        ]
      }
    ],
    "tags": [
      "Hash Table",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "course-schedule",
    "title": "Course Schedule",
    "slug": "course-schedule",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you must take course `b_i` first if you want to take course `a_i`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "0 <= a_i, b_i < numCourses",
      "All the pairs prerequisites[i] are unique."
    ],
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true",
        "explanation": "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible."
      },
      {
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "output": "false",
        "explanation": "To take course 1 you should have finished course 0, and to take course 0 you should have finished course 1. So it is impossible."
      }
    ],
    "starterCode": {
      "javascript": "function canFinish(numCourses, prerequisites) {\n  // Your solution here\n}",
      "python": "def canFinish(numCourses, prerequisites):\n    pass",
      "java": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        return true;\n    }\n};",
      "c": "bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ]
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "numCourses": 1,
          "prerequisites": []
        },
        "expectedOutput": true
      },
      {
        "input": {
          "numCourses": 3,
          "prerequisites": [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ]
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "numCourses": 4,
          "prerequisites": [
            [
              2,
              0
            ],
            [
              1,
              0
            ],
            [
              3,
              1
            ],
            [
              3,
              2
            ],
            [
              1,
              3
            ]
          ]
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph",
      "Topological Sort"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "course-schedule-ii",
    "title": "Course Schedule II",
    "slug": "course-schedule-ii",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.\n\nReturn the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= numCourses * (numCourses - 1)",
      "prerequisites[i].length == 2",
      "0 <= a_i, b_i < numCourses",
      "a_i != b_i",
      "All the pairs [a_i, b_i] are distinct."
    ],
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "[0,1]"
      },
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,2,1,3]"
      }
    ],
    "starterCode": {
      "javascript": "function findOrder(numCourses, prerequisites) {\n  // Your solution here\n}",
      "python": "def findOrder(numCourses, prerequisites):\n    pass",
      "java": "class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n        return {};\n    }\n};",
      "c": "int* findOrder(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ]
          ]
        },
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": {
          "numCourses": 4,
          "prerequisites": [
            [
              1,
              0
            ],
            [
              2,
              0
            ],
            [
              3,
              1
            ],
            [
              3,
              2
            ]
          ]
        },
        "expectedOutput": [
          0,
          1,
          2,
          3
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "numCourses": 1,
          "prerequisites": []
        },
        "expectedOutput": [
          0
        ]
      },
      {
        "input": {
          "numCourses": 2,
          "prerequisites": [
            [
              0,
              1
            ],
            [
              1,
              0
            ]
          ]
        },
        "expectedOutput": []
      }
    ],
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph",
      "Topological Sort"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "slug": "graph-valid-tree",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "You have a graph of `n` nodes labeled from `0` to `n - 1`. You are given an integer n and a list of `edges` where `edges[i] = [a_i, b_i]` indicates that there is an undirected edge between nodes `a_i` and `b_i` in the graph.\n\nReturn `true` if the edges of the given graph make up a valid tree, and `false` otherwise.",
    "constraints": [
      "1 <= n <= 2000",
      "0 <= edges.length <= 5000",
      "edges[i].length == 2",
      "0 <= a_i, b_i < n",
      "a_i != b_i",
      "There are no self-loops or repeated edges."
    ],
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        "output": "true"
      },
      {
        "input": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function validTree(n, edges) {\n  // Your solution here\n}",
      "python": "def validTree(n, edges):\n    pass",
      "java": "class Solution {\n    public boolean validTree(int n, int[][] edges) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool validTree(int n, vector<vector<int>>& edges) {\n        return true;\n    }\n};",
      "c": "bool validTree(int n, int** edges, int edgesSize, int* edgesColSize) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              1,
              4
            ]
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ]
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "n": 1,
          "edges": []
        },
        "expectedOutput": true
      },
      {
        "input": {
          "n": 4,
          "edges": [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ]
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Graph"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "slug": "pacific-atlantic-water-flow",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.\n\nWater can only flow in four directions (up, down, left, or right) to an adjacent cell with an equal or lower height. Return a 2D list of grid coordinates `result` where `result[i] = [r_i, c_i]` denotes that rain water can flow from cell `(r_i, c_i)` to both the Pacific and Atlantic oceans.",
    "constraints": [
      "m == heights.length",
      "n == heights[r].length",
      "1 <= m, n <= 200",
      "0 <= heights[r][c] <= 10^5"
    ],
    "examples": [
      {
        "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]"
      }
    ],
    "starterCode": {
      "javascript": "function pacificAtlantic(heights) {\n  // Your solution here\n}",
      "python": "def pacificAtlantic(heights):\n    pass",
      "java": "class Solution {\n    public List<List<Integer>> pacificAtlantic(int[][] heights) {\n        return new ArrayList<>();\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {\n        return {};\n    }\n};",
      "c": "int** pacificAtlantic(int** heights, int heightsSize, int* heightsColSize, int* returnSize, int** returnColumnSizes) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "heights": [
            [
              1,
              2,
              2,
              3,
              5
            ],
            [
              3,
              2,
              3,
              4,
              4
            ],
            [
              2,
              4,
              5,
              3,
              1
            ],
            [
              6,
              7,
              1,
              4,
              5
            ],
            [
              5,
              1,
              1,
              2,
              4
            ]
          ]
        },
        "expectedOutput": [
          [
            0,
            4
          ],
          [
            1,
            3
          ],
          [
            1,
            4
          ],
          [
            2,
            2
          ],
          [
            3,
            0
          ],
          [
            3,
            1
          ],
          [
            4,
            0
          ]
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "heights": [
            [
              1
            ]
          ]
        },
        "expectedOutput": [
          [
            0,
            0
          ]
        ]
      },
      {
        "input": {
          "heights": [
            [
              2,
              1
            ],
            [
              1,
              2
            ]
          ]
        },
        "expectedOutput": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ]
        ]
      }
    ],
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "rotting-oranges",
    "title": "Rotting Oranges",
    "slug": "rotting-oranges",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "You are given an `m x n` grid where each cell can have one of three values:\n- `0` representing an empty cell,\n- `1` representing a fresh orange, or\n- `2` representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 10",
      "grid[i][j] is 0, 1, or 2."
    ],
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4"
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1"
      },
      {
        "input": "grid = [[0,2]]",
        "output": "0"
      }
    ],
    "starterCode": {
      "javascript": "function orangesRotting(grid) {\n  // Your solution here\n}",
      "python": "def orangesRotting(grid):\n    pass",
      "java": "class Solution {\n    public int orangesRotting(int[][] grid) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int orangesRotting(vector<vector<int>>& grid) {\n        return 0;\n    }\n};",
      "c": "int orangesRotting(int** grid, int gridSize, int* gridColSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "grid": [
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "grid": [
            [
              2,
              1,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        "expectedOutput": -1
      },
      {
        "input": {
          "grid": [
            [
              0,
              2
            ]
          ]
        },
        "expectedOutput": 0
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "grid": [
            [
              1
            ]
          ]
        },
        "expectedOutput": -1
      },
      {
        "input": {
          "grid": [
            [
              2,
              2
            ],
            [
              1,
              1
            ],
            [
              0,
              0
            ],
            [
              2,
              0
            ]
          ]
        },
        "expectedOutput": 1
      }
    ],
    "tags": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "flood-fill",
    "title": "Flood Fill",
    "slug": "flood-fill",
    "difficulty": "EASY",
    "category": "Graphs",
    "description": "An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.\n\nYou are also given three integers `sr`, `sc`, and `color`. You should perform a flood fill on the image starting from the pixel `image[sr][sc]`.\n\nReturn the modified image after performing the flood fill.",
    "constraints": [
      "m == image.length",
      "n == image[i].length",
      "1 <= m, n <= 50",
      "0 <= image[i][j], color < 2^16",
      "0 <= sr < m",
      "0 <= sc < n"
    ],
    "examples": [
      {
        "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        "output": "[[2,2,2],[2,2,0],[2,0,1]]"
      },
      {
        "input": "image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0",
        "output": "[[0,0,0],[0,0,0]]"
      }
    ],
    "starterCode": {
      "javascript": "function floodFill(image, sr, sc, color) {\n  // Your solution here\n}",
      "python": "def floodFill(image, sr, sc, color):\n    pass",
      "java": "class Solution {\n    public int[][] floodFill(int[][] image, int sr, int sc, int color) {\n        return image;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {\n        return image;\n    }\n};",
      "c": "int** floodFill(int** image, int imageSize, int* imageColSize, int sr, int sc, int color, int* returnSize, int** returnColumnSizes) {\n    *returnSize = imageSize;\n    return image;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "image": [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              0,
              1
            ]
          ],
          "sr": 1,
          "sc": 1,
          "color": 2
        },
        "expectedOutput": [
          [
            2,
            2,
            2
          ],
          [
            2,
            2,
            0
          ],
          [
            2,
            0,
            1
          ]
        ]
      },
      {
        "input": {
          "image": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ],
          "sr": 0,
          "sc": 0,
          "color": 0
        },
        "expectedOutput": [
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            0
          ]
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "image": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              1
            ]
          ],
          "sr": 1,
          "sc": 1,
          "color": 1
        },
        "expectedOutput": [
          [
            0,
            0,
            0
          ],
          [
            0,
            1,
            1
          ]
        ]
      }
    ],
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "number-of-connected-components",
    "title": "Number of Connected Components in an Undirected Graph",
    "slug": "number-of-connected-components",
    "difficulty": "MEDIUM",
    "category": "Graphs",
    "description": "You have a graph of `n` nodes. You are given an integer `n` and an array `edges` where `edges[i] = [a_i, b_i]` indicates that there is an edge between `a_i` and `b_i` in the graph.\n\nReturn the number of connected components in the graph.",
    "constraints": [
      "1 <= n <= 2000",
      "1 <= edges.length <= 5000",
      "edges[i].length == 2",
      "0 <= a_i <= b_i < n",
      "a_i != b_i",
      "There are no repeated edges."
    ],
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
        "output": "2"
      },
      {
        "input": "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        "output": "1"
      }
    ],
    "starterCode": {
      "javascript": "function countComponents(n, edges) {\n  // Your solution here\n}",
      "python": "def countComponents(n, edges):\n    pass",
      "java": "class Solution {\n    public int countComponents(int n, int[][] edges) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countComponents(int n, vector<vector<int>>& edges) {\n        return 0;\n    }\n};",
      "c": "int countComponents(int n, int** edges, int edgesSize, int* edgesColSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              3,
              4
            ]
          ]
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ]
          ]
        },
        "expectedOutput": 1
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "n": 4,
          "edges": []
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "n": 3,
          "edges": [
            [
              0,
              1
            ],
            [
              0,
              2
            ]
          ]
        },
        "expectedOutput": 1
      }
    ],
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Graph"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "word-ladder",
    "title": "Word Ladder",
    "slug": "word-ladder",
    "difficulty": "HARD",
    "category": "Graphs",
    "description": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:\n- Every adjacent pair of words differs by a single letter.\n- Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.\n- `sk == endWord`\n\nGiven two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.",
    "constraints": [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
      "beginWord != endWord",
      "All the words in wordList are unique."
    ],
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\", which is 5 words long."
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": "The endWord \"cog\" is not in wordList, therefore there is no valid transformation sequence."
      }
    ],
    "starterCode": {
      "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  // Your solution here\n}",
      "python": "def ladderLength(beginWord, endWord, wordList):\n    pass",
      "java": "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        return 0;\n    }\n};",
      "c": "int ladderLength(char* beginWord, char* endWord, char** wordList, int wordListSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "beginWord": "hit",
          "endWord": "cog",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        },
        "expectedOutput": 5
      },
      {
        "input": {
          "beginWord": "hit",
          "endWord": "cog",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        },
        "expectedOutput": 0
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "beginWord": "a",
          "endWord": "c",
          "wordList": [
            "a",
            "b",
            "c"
          ]
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "beginWord": "hot",
          "endWord": "dog",
          "wordList": [
            "hot",
            "dog"
          ]
        },
        "expectedOutput": 0
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Breadth-First Search"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "slug": "maximum-depth-of-binary-tree",
    "difficulty": "EASY",
    "category": "Trees",
    "description": "Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2"
      }
    ],
    "starterCode": {
      "javascript": "function maxDepth(root) {\n  // Your solution here\n}",
      "python": "def maxDepth(root):\n    pass",
      "java": "class Solution {\n    public int maxDepth(TreeNode root) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        return 0;\n    }\n};",
      "c": "int maxDepth(struct TreeNode* root) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            3,
            9,
            20,
            null,
            null,
            15,
            7
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "root": [
            1,
            null,
            2
          ]
        },
        "expectedOutput": 2
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": []
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "root": [
            0
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "root": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": 3
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "slug": "invert-binary-tree",
    "difficulty": "EASY",
    "category": "Trees",
    "description": "Given the `root` of a binary tree, invert the tree, and return its root.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]"
      },
      {
        "input": "root = [2,1,3]",
        "output": "[2,3,1]"
      }
    ],
    "starterCode": {
      "javascript": "function invertTree(root) {\n  // Your solution here\n}",
      "python": "def invertTree(root):\n    pass",
      "java": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        return root;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        return root;\n    }\n};",
      "c": "struct TreeNode* invertTree(struct TreeNode* root) {\n    return root;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            4,
            2,
            7,
            1,
            3,
            6,
            9
          ]
        },
        "expectedOutput": [
          4,
          7,
          2,
          9,
          6,
          3,
          1
        ]
      },
      {
        "input": {
          "root": [
            2,
            1,
            3
          ]
        },
        "expectedOutput": [
          2,
          3,
          1
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": []
        },
        "expectedOutput": []
      },
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": [
          1
        ]
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "same-tree",
    "title": "Same Tree",
    "slug": "same-tree",
    "difficulty": "EASY",
    "category": "Trees",
    "description": "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.\n\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
    "constraints": [
      "The number of nodes in both trees is in the range [0, 100].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "examples": [
      {
        "input": "p = [1,2,3], q = [1,2,3]",
        "output": "true"
      },
      {
        "input": "p = [1,2], q = [1,null,2]",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isSameTree(p, q) {\n  // Your solution here\n}",
      "python": "def isSameTree(p, q):\n    pass",
      "java": "class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        return true;\n    }\n};",
      "c": "bool isSameTree(struct TreeNode* p, struct TreeNode* q) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "p": [
            1,
            2,
            3
          ],
          "q": [
            1,
            2,
            3
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "p": [
            1,
            2
          ],
          "q": [
            1,
            null,
            2
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "p": [],
          "q": []
        },
        "expectedOutput": true
      },
      {
        "input": {
          "p": [
            1,
            2,
            1
          ],
          "q": [
            1,
            1,
            2
          ]
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "symmetric-tree",
    "title": "Symmetric Tree",
    "slug": "symmetric-tree",
    "difficulty": "EASY",
    "category": "Trees",
    "description": "Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 1000].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "root = [1,2,2,3,4,4,3]",
        "output": "true"
      },
      {
        "input": "root = [1,2,2,null,3,null,3]",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isSymmetric(root) {\n  // Your solution here\n}",
      "python": "def isSymmetric(root):\n    pass",
      "java": "class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        return true;\n    }\n};",
      "c": "bool isSymmetric(struct TreeNode* root) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            1,
            2,
            2,
            3,
            4,
            4,
            3
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            2,
            null,
            3,
            null,
            3
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            2,
            2,
            null,
            2
          ]
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "slug": "binary-tree-level-order-traversal",
    "difficulty": "MEDIUM",
    "category": "Trees",
    "description": "Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000"
    ],
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "starterCode": {
      "javascript": "function levelOrder(root) {\n  // Your solution here\n}",
      "python": "def levelOrder(root):\n    pass",
      "java": "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        return new ArrayList<>();\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        return {};\n    }\n};",
      "c": "int** levelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            3,
            9,
            20,
            null,
            null,
            15,
            7
          ]
        },
        "expectedOutput": [
          [
            3
          ],
          [
            9,
            20
          ],
          [
            15,
            7
          ]
        ]
      },
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": [
          [
            1
          ]
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": []
        },
        "expectedOutput": []
      },
      {
        "input": {
          "root": [
            1,
            2,
            3,
            4,
            null,
            null,
            5
          ]
        },
        "expectedOutput": [
          [
            1
          ],
          [
            2,
            3
          ],
          [
            4,
            5
          ]
        ]
      }
    ],
    "tags": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "slug": "diameter-of-binary-tree",
    "difficulty": "EASY",
    "category": "Trees",
    "description": "Given the `root` of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3",
        "explanation": "3 is the length of the path [4,2,1,3] or [5,2,1,3]."
      },
      {
        "input": "root = [1,2]",
        "output": "1"
      }
    ],
    "starterCode": {
      "javascript": "function diameterOfBinaryTree(root) {\n  // Your solution here\n}",
      "python": "def diameterOfBinaryTree(root):\n    pass",
      "java": "class Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        return 0;\n    }\n};",
      "c": "int diameterOfBinaryTree(struct TreeNode* root) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "root": [
            1,
            2
          ]
        },
        "expectedOutput": 1
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "root": [
            1,
            2,
            3,
            4,
            null,
            null,
            null,
            5
          ]
        },
        "expectedOutput": 3
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "balanced-binary-tree",
    "title": "Balanced Binary Tree",
    "slug": "balanced-binary-tree",
    "difficulty": "EASY",
    "category": "Trees",
    "description": "Given a binary tree, determine if it is height-balanced.\n\nA height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 5000].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "true"
      },
      {
        "input": "root = [1,2,2,3,3,null,null,4,4]",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isBalanced(root) {\n  // Your solution here\n}",
      "python": "def isBalanced(root):\n    pass",
      "java": "class Solution {\n    public boolean isBalanced(TreeNode root) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isBalanced(TreeNode* root) {\n        return true;\n    }\n};",
      "c": "bool isBalanced(struct TreeNode* root) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            3,
            9,
            20,
            null,
            null,
            15,
            7
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "root": [
            1,
            2,
            2,
            3,
            3,
            null,
            null,
            4,
            4
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": []
        },
        "expectedOutput": true
      },
      {
        "input": {
          "root": [
            1
          ]
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "difficulty": "MEDIUM",
    "category": "Trees",
    "description": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia: \"The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).\"",
    "constraints": [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "-10^9 <= Node.val <= 10^9",
      "All Node.val are unique.",
      "p != q",
      "p and q will exist in the BST."
    ],
    "examples": [
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "output": "6",
        "explanation": "The LCA of nodes 2 and 8 is 6."
      },
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "output": "2",
        "explanation": "The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition."
      }
    ],
    "starterCode": {
      "javascript": "function lowestCommonAncestor(root, p, q) {\n  // Your solution here\n}",
      "python": "def lowestCommonAncestor(root, p, q):\n    pass",
      "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        return root;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        return root;\n    }\n};",
      "c": "struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {\n    return root;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            6,
            2,
            8,
            0,
            4,
            7,
            9,
            null,
            null,
            3,
            5
          ],
          "p": 2,
          "q": 8
        },
        "expectedOutput": 6
      },
      {
        "input": {
          "root": [
            6,
            2,
            8,
            0,
            4,
            7,
            9,
            null,
            null,
            3,
            5
          ],
          "p": 2,
          "q": 4
        },
        "expectedOutput": 2
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": [
            2,
            1
          ],
          "p": 2,
          "q": 1
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "root": [
            5,
            3,
            6,
            2,
            4,
            null,
            null,
            1
          ],
          "p": 1,
          "q": 4
        },
        "expectedOutput": 3
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "slug": "validate-binary-search-tree",
    "difficulty": "MEDIUM",
    "category": "Trees",
    "description": "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys strictly less than the node's key.\n- The right subtree of a node contains only nodes with keys strictly greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true"
      },
      {
        "input": "root = [5,1,4,null,null,3,6]",
        "output": "false",
        "explanation": "The root node's value is 5 but its right child's value is 4."
      }
    ],
    "starterCode": {
      "javascript": "function isValidBST(root) {\n  // Your solution here\n}",
      "python": "def isValidBST(root):\n    pass",
      "java": "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        return true;\n    }\n};",
      "c": "bool isValidBST(struct TreeNode* root) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            2,
            1,
            3
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "root": [
            5,
            1,
            4,
            null,
            null,
            3,
            6
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": [
            2,
            2,
            2
          ]
        },
        "expectedOutput": false
      },
      {
        "input": {
          "root": [
            10,
            5,
            15,
            null,
            null,
            6,
            20
          ]
        },
        "expectedOutput": false
      },
      {
        "input": {
          "root": [
            2147483647
          ]
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element in a BST",
    "slug": "kth-smallest-element-in-a-bst",
    "difficulty": "MEDIUM",
    "category": "Trees",
    "description": "Given the `root` of a binary search tree, and an integer `k`, return the `k-th` smallest value (1-indexed) of all the values of the nodes in the tree.",
    "constraints": [
      "The number of nodes in the tree is n.",
      "1 <= k <= n <= 10^4",
      "0 <= Node.val <= 10^4"
    ],
    "examples": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1"
      },
      {
        "input": "root = [5,3,6,2,4,null,null,1], k = 3",
        "output": "3"
      }
    ],
    "starterCode": {
      "javascript": "function kthSmallest(root, k) {\n  // Your solution here\n}",
      "python": "def kthSmallest(root, k):\n    pass",
      "java": "class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        return 0;\n    }\n};",
      "c": "int kthSmallest(struct TreeNode* root, int k) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "root": [
            3,
            1,
            4,
            null,
            2
          ],
          "k": 1
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "root": [
            5,
            3,
            6,
            2,
            4,
            null,
            null,
            1
          ],
          "k": 3
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "root": [
            1
          ],
          "k": 1
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "root": [
            4,
            2,
            5,
            1,
            3
          ],
          "k": 4
        },
        "expectedOutput": 4
      }
    ],
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "contains-duplicate",
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "difficulty": "EASY",
    "category": "HashMap / HashSet",
    "description": "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true"
      },
      {
        "input": "nums = [1,2,3,4]",
        "output": "false"
      },
      {
        "input": "nums = [1,1,1,3,3,4,3,2,4,2]",
        "output": "true"
      }
    ],
    "starterCode": {
      "javascript": "function containsDuplicate(nums) {\n  // Your solution here\n}",
      "python": "def containsDuplicate(nums):\n    pass",
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        return false;\n    }\n};",
      "c": "bool containsDuplicate(int* nums, int numsSize) {\n    return false;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            1
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3,
            4
          ]
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            1
          ]
        },
        "expectedOutput": false
      },
      {
        "input": {
          "nums": [
            0,
            0
          ]
        },
        "expectedOutput": true
      },
      {
        "input": {
          "nums": [
            1,
            5,
            -2,
            -4,
            0
          ]
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "slug": "longest-consecutive-sequence",
    "difficulty": "MEDIUM",
    "category": "HashMap / HashSet",
    "description": "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.\n\nYou must write an algorithm that runs in `O(n)` time using a HashSet.",
    "constraints": [
      "0 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [100,4,200,1,3,2]",
        "output": "4",
        "explanation": "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4."
      },
      {
        "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
        "output": "9"
      }
    ],
    "starterCode": {
      "javascript": "function longestConsecutive(nums) {\n  // Your solution here\n}",
      "python": "def longestConsecutive(nums):\n    pass",
      "java": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        return 0;\n    }\n};",
      "c": "int longestConsecutive(int* nums, int numsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            100,
            4,
            200,
            1,
            3,
            2
          ]
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "nums": [
            0,
            3,
            7,
            2,
            5,
            8,
            4,
            6,
            0,
            1
          ]
        },
        "expectedOutput": 9
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": []
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "nums": [
            1,
            2,
            0,
            1
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "nums": [
            9,
            1,
            4,
            7,
            3,
            -1,
            0,
            5,
            8,
            -1,
            6
          ]
        },
        "expectedOutput": 7
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Union Find"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "intersection-of-two-arrays",
    "title": "Intersection of Two Arrays",
    "slug": "intersection-of-two-arrays",
    "difficulty": "EASY",
    "category": "HashMap / HashSet",
    "description": "Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.",
    "constraints": [
      "1 <= nums1.length, nums2.length <= 1000",
      "0 <= nums1[i], nums2[i] <= 1000"
    ],
    "examples": [
      {
        "input": "nums1 = [1,2,2,1], nums2 = [2,2]",
        "output": "[2]"
      },
      {
        "input": "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        "output": "[9,4]",
        "explanation": "[4,9] is also accepted."
      }
    ],
    "starterCode": {
      "javascript": "function intersection(nums1, nums2) {\n  // Your solution here\n}",
      "python": "def intersection(nums1, nums2):\n    pass",
      "java": "class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        return {};\n    }\n};",
      "c": "int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums1": [
            1,
            2,
            2,
            1
          ],
          "nums2": [
            2,
            2
          ]
        },
        "expectedOutput": [
          2
        ]
      },
      {
        "input": {
          "nums1": [
            4,
            9,
            5
          ],
          "nums2": [
            9,
            4,
            9,
            8,
            4
          ]
        },
        "expectedOutput": [
          4,
          9
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums1": [
            1
          ],
          "nums2": [
            1
          ]
        },
        "expectedOutput": [
          1
        ]
      },
      {
        "input": {
          "nums1": [
            1,
            2,
            3
          ],
          "nums2": [
            4,
            5,
            6
          ]
        },
        "expectedOutput": []
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "happy-number",
    "title": "Happy Number",
    "slug": "happy-number",
    "difficulty": "EASY",
    "category": "HashMap / HashSet",
    "description": "Write an algorithm to determine if a number `n` is happy.\n\nA happy number is a number defined by the following process:\n- Starting with any positive integer, replace the number by the sum of the squares of its digits.\n- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n- Those numbers for which this process ends in 1 are happy.\n\nReturn `true` if `n` is a happy number, and `false` if not.",
    "constraints": [
      "1 <= n <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "n = 19",
        "output": "true",
        "explanation": "1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0^2 + 0^2 = 1"
      },
      {
        "input": "n = 2",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isHappy(n) {\n  // Your solution here\n}",
      "python": "def isHappy(n):\n    pass",
      "java": "class Solution {\n    public boolean isHappy(int n) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isHappy(int n) {\n        return true;\n    }\n};",
      "c": "bool isHappy(int n) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "n": 19
        },
        "expectedOutput": true
      },
      {
        "input": {
          "n": 2
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "n": 1
        },
        "expectedOutput": true
      },
      {
        "input": {
          "n": 7
        },
        "expectedOutput": true
      },
      {
        "input": {
          "n": 1111111
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Hash Table",
      "Math",
      "Two Pointers"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "isomorphic-strings",
    "title": "Isomorphic Strings",
    "slug": "isomorphic-strings",
    "difficulty": "EASY",
    "category": "HashMap / HashSet",
    "description": "Given two strings `s` and `t`, determine if they are isomorphic.\n\nTwo strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.\n\nAll occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
    "constraints": [
      "1 <= s.length <= 5 * 10^4",
      "t.length == s.length",
      "s and t consist of any valid ascii character."
    ],
    "examples": [
      {
        "input": "s = \"egg\", t = \"add\"",
        "output": "true"
      },
      {
        "input": "s = \"foo\", t = \"bar\"",
        "output": "false"
      },
      {
        "input": "s = \"paper\", t = \"title\"",
        "output": "true"
      }
    ],
    "starterCode": {
      "javascript": "function isIsomorphic(s, t) {\n  // Your solution here\n}",
      "python": "def isIsomorphic(s, t):\n    pass",
      "java": "class Solution {\n    public boolean isIsomorphic(String s, String t) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        return true;\n    }\n};",
      "c": "bool isIsomorphic(char* s, char* t) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "egg",
          "t": "add"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s": "foo",
          "t": "bar"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "s": "paper",
          "t": "title"
        },
        "expectedOutput": true
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "badc",
          "t": "baba"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "s": "a",
          "t": "a"
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Hash Table",
      "String"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "word-pattern",
    "title": "Word Pattern",
    "slug": "word-pattern",
    "difficulty": "EASY",
    "category": "HashMap / HashSet",
    "description": "Given a `pattern` and a string `s`, find if `s` follows the same pattern.\n\nHere follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.",
    "constraints": [
      "1 <= pattern.length <= 300",
      "pattern contains only lower-case English letters.",
      "1 <= s.length <= 3000",
      "s contains only lowercase English letters and spaces ' '.",
      "s does not contain any leading or trailing spaces.",
      "All the words in s are separated by a single space."
    ],
    "examples": [
      {
        "input": "pattern = \"abba\", s = \"dog cat cat dog\"",
        "output": "true"
      },
      {
        "input": "pattern = \"abba\", s = \"dog cat cat fish\"",
        "output": "false"
      },
      {
        "input": "pattern = \"aaaa\", s = \"dog cat cat dog\"",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function wordPattern(pattern, s) {\n  // Your solution here\n}",
      "python": "def wordPattern(pattern, s):\n    pass",
      "java": "class Solution {\n    public boolean wordPattern(String pattern, String s) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordPattern(string pattern, string s) {\n        return true;\n    }\n};",
      "c": "bool wordPattern(char* pattern, char* s) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "pattern": "abba",
          "s": "dog cat cat dog"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "pattern": "abba",
          "s": "dog cat cat fish"
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "pattern": "abba",
          "s": "dog dog dog dog"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "pattern": "aaa",
          "s": "aa aa aa aa"
        },
        "expectedOutput": false
      }
    ],
    "tags": [
      "Hash Table",
      "String"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k",
    "difficulty": "MEDIUM",
    "category": "HashMap / HashSet",
    "description": "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000",
      "-10^7 <= k <= 10^7"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1], k = 2",
        "output": "2"
      },
      {
        "input": "nums = [1,2,3], k = 3",
        "output": "2"
      }
    ],
    "starterCode": {
      "javascript": "function subarraySum(nums, k) {\n  // Your solution here\n}",
      "python": "def subarraySum(nums, k):\n    pass",
      "java": "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        return 0;\n    }\n};",
      "c": "int subarraySum(int* nums, int numsSize, int k) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            1,
            1
          ],
          "k": 2
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "nums": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": 2
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            1
          ],
          "k": 0
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "nums": [
            -1,
            -1,
            1
          ],
          "k": 0
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "nums": [
            3,
            4,
            7,
            2,
            -3,
            1,
            4,
            2
          ],
          "k": 7
        },
        "expectedOutput": 4
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "ransom-note",
    "title": "Ransom Note",
    "slug": "ransom-note",
    "difficulty": "EASY",
    "category": "HashMap / HashSet",
    "description": "Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.\n\nEach letter in `magazine` can only be used once in `ransomNote`.",
    "constraints": [
      "1 <= ransomNote.length, magazine.length <= 10^5",
      "ransomNote and magazine consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "ransomNote = \"a\", magazine = \"b\"",
        "output": "false"
      },
      {
        "input": "ransomNote = \"aa\", magazine = \"ab\"",
        "output": "false"
      },
      {
        "input": "ransomNote = \"aa\", magazine = \"aab\"",
        "output": "true"
      }
    ],
    "starterCode": {
      "javascript": "function canConstruct(ransomNote, magazine) {\n  // Your solution here\n}",
      "python": "def canConstruct(ransomNote, magazine):\n    pass",
      "java": "class Solution {\n    public boolean canConstruct(String ransomNote, String magazine) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canConstruct(string ransomNote, string magazine) {\n        return true;\n    }\n};",
      "c": "bool canConstruct(char* ransomNote, char* magazine) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "ransomNote": "a",
          "magazine": "b"
        },
        "expectedOutput": false
      },
      {
        "input": {
          "ransomNote": "aa",
          "magazine": "aab"
        },
        "expectedOutput": true
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "ransomNote": "bg",
          "magazine": "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcffa"
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements",
    "difficulty": "MEDIUM",
    "category": "HashMap / HashSet",
    "description": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "k is in the range [1, the number of unique elements in the array].",
      "It is guaranteed that the answer is unique."
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]"
      }
    ],
    "starterCode": {
      "javascript": "function topKFrequent(nums, k) {\n  // Your solution here\n}",
      "python": "def topKFrequent(nums, k):\n    pass",
      "java": "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        return {};\n    }\n};",
      "c": "int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = k;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            1,
            1,
            2,
            2,
            3
          ],
          "k": 2
        },
        "expectedOutput": [
          1,
          2
        ]
      },
      {
        "input": {
          "nums": [
            1
          ],
          "k": 1
        },
        "expectedOutput": [
          1
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            4,
            1,
            -1,
            2,
            -1,
            2,
            3
          ],
          "k": 2
        },
        "expectedOutput": [
          -1,
          2
        ]
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Sorting",
      "Heap (Priority Queue)",
      "Bucket Sort"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "insert-delete-getrandom-o1",
    "title": "Insert Delete GetRandom O(1)",
    "slug": "insert-delete-getrandom-o1",
    "difficulty": "MEDIUM",
    "category": "HashMap / HashSet",
    "description": "Implement the `RandomizedSet` class:\n- `RandomizedSet()` Initializes the RandomizedSet object.\n- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.\n- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.\n- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.\n\nYou must implement the functions of the class such that each function works in average `O(1)` time complexity.",
    "constraints": [
      "-2^31 <= val <= 2^31 - 1",
      "At most 2 * 10^5 calls will be made to insert, remove, and getRandom.",
      "There will be at least one element in the data structure when getRandom is called."
    ],
    "examples": [
      {
        "input": "[\"RandomizedSet\", \"insert\", \"remove\", \"insert\", \"getRandom\", \"remove\", \"insert\", \"getRandom\"]\n[[], [1], [2], [2], [], [1], [2], []]",
        "output": "[null, true, false, true, 2, true, false, 2]"
      }
    ],
    "starterCode": {
      "javascript": "var RandomizedSet = function() {\n    this.map = new Map();\n    this.list = [];\n};\n\nRandomizedSet.prototype.insert = function(val) {\n    if (this.map.has(val)) return false;\n    this.map.set(val, this.list.length);\n    this.list.push(val);\n    return true;\n};\n\nRandomizedSet.prototype.remove = function(val) {\n    if (!this.map.has(val)) return false;\n    const idx = this.map.get(val);\n    const lastVal = this.list[this.list.length - 1];\n    this.list[idx] = lastVal;\n    this.map.set(lastVal, idx);\n    this.list.pop();\n    this.map.delete(val);\n    return true;\n};\n\nRandomizedSet.prototype.getRandom = function() {\n    return this.list[Math.floor(Math.random() * this.list.length)];\n};",
      "python": "import random\n\nclass RandomizedSet:\n    def __init__(self):\n        self.map = {}\n        self.list = []\n\n    def insert(self, val: int) -> bool:\n        if val in self.map: return False\n        self.map[val] = len(self.list)\n        self.list.append(val)\n        return True\n\n    def remove(self, val: int) -> bool:\n        if val not in self.map: return False\n        idx = self.map[val]\n        last = self.list[-1]\n        self.list[idx] = last\n        self.map[last] = idx\n        self.list.pop()\n        del self.map[val]\n        return True\n\n    def getRandom(self) -> int:\n        return random.choice(self.list)"
    },
    "supportedLanguages": [
      "javascript",
      "python"
    ],
    "visibleTestCases": [
      {
        "input": {
          "operations": [
            "insert",
            "remove",
            "insert"
          ],
          "values": [
            [
              1
            ],
            [
              2
            ],
            [
              2
            ]
          ]
        },
        "expectedOutput": [
          true,
          false,
          true
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "operations": [
            "insert",
            "remove",
            "remove"
          ],
          "values": [
            [
              0
            ],
            [
              0
            ],
            [
              0
            ]
          ]
        },
        "expectedOutput": [
          true,
          true,
          false
        ]
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Math",
      "Design",
      "Randomized"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "Given a string `s`, find the length of the longest substring without repeating characters.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1."
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "The answer is \"wke\", with the length of 3."
      }
    ],
    "starterCode": {
      "javascript": "function lengthOfLongestSubstring(s) {\n  // Your solution here\n}",
      "python": "def lengthOfLongestSubstring(s):\n    pass",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        return 0;\n    }\n};",
      "c": "int lengthOfLongestSubstring(char* s) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "abcabcbb"
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "s": "bbbbb"
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "s": "pwwkew"
        },
        "expectedOutput": 3
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": ""
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "s": " "
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "s": "au"
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "s": "dvdf"
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "s": "tmmzuxt"
        },
        "expectedOutput": 5
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "maximum-average-subarray-i",
    "title": "Maximum Average Subarray I",
    "slug": "maximum-average-subarray-i",
    "difficulty": "EASY",
    "category": "Sliding Window",
    "description": "You are given an integer array `nums` consisting of `n` elements, and an integer `k`.\n\nFind a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value.",
    "constraints": [
      "n == nums.length",
      "1 <= k <= n <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "nums = [1,12,-5,-6,50,3], k = 4",
        "output": "12.75",
        "explanation": "Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75"
      },
      {
        "input": "nums = [5], k = 1",
        "output": "5.0"
      }
    ],
    "starterCode": {
      "javascript": "function findMaxAverage(nums, k) {\n  // Your solution here\n}",
      "python": "def findMaxAverage(nums, k):\n    pass",
      "java": "class Solution {\n    public double findMaxAverage(int[] nums, int k) {\n        return 0.0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    double findMaxAverage(vector<int>& nums, int k) {\n        return 0.0;\n    }\n};",
      "c": "double findMaxAverage(int* nums, int numsSize, int k) {\n    return 0.0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            12,
            -5,
            -6,
            50,
            3
          ],
          "k": 4
        },
        "expectedOutput": 12.75
      },
      {
        "input": {
          "nums": [
            5
          ],
          "k": 1
        },
        "expectedOutput": 5
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            0,
            4,
            0,
            3,
            2
          ],
          "k": 1
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "nums": [
            -1
          ],
          "k": 1
        },
        "expectedOutput": -1
      }
    ],
    "tags": [
      "Array",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "minimum-size-subarray-sum",
    "title": "Minimum Size Subarray Sum",
    "slug": "minimum-size-subarray-sum",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.",
    "constraints": [
      "1 <= target <= 10^9",
      "1 <= nums.length <= 10^5",
      "1 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "target = 7, nums = [2,3,1,2,4,3]",
        "output": "2",
        "explanation": "The subarray [4,3] has the minimal length under the problem constraint."
      },
      {
        "input": "target = 4, nums = [1,4,4]",
        "output": "1"
      },
      {
        "input": "target = 11, nums = [1,1,1,1,1,1,1,1]",
        "output": "0"
      }
    ],
    "starterCode": {
      "javascript": "function minSubArrayLen(target, nums) {\n  // Your solution here\n}",
      "python": "def minSubArrayLen(target, nums):\n    pass",
      "java": "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        return 0;\n    }\n};",
      "c": "int minSubArrayLen(int target, int* nums, int numsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "target": 7,
          "nums": [
            2,
            3,
            1,
            2,
            4,
            3
          ]
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "target": 4,
          "nums": [
            1,
            4,
            4
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "target": 11,
          "nums": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
        },
        "expectedOutput": 0
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "target": 6,
          "nums": [
            10,
            2,
            3
          ]
        },
        "expectedOutput": 1
      },
      {
        "input": {
          "target": 15,
          "nums": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expectedOutput": 5
      }
    ],
    "tags": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "find-all-anagrams-in-a-string",
    "title": "Find All Anagrams in a String",
    "slug": "find-all-anagrams-in-a-string",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in any order.",
    "constraints": [
      "1 <= s.length, p.length <= 3 * 10^4",
      "s and p consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"cbaebabacd\", p = \"abc\"",
        "output": "[0,6]",
        "explanation": "The substring with start index = 0 is \"cba\", which is an anagram of \"abc\". The substring with start index = 6 is \"bac\", which is an anagram of \"abc\"."
      },
      {
        "input": "s = \"abab\", p = \"ab\"",
        "output": "[0,1,2]"
      }
    ],
    "starterCode": {
      "javascript": "function findAnagrams(s, p) {\n  // Your solution here\n}",
      "python": "def findAnagrams(s, p):\n    pass",
      "java": "class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        return new ArrayList<>();\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        return {};\n    }\n};",
      "c": "int* findAnagrams(char* s, char* p, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "cbaebabacd",
          "p": "abc"
        },
        "expectedOutput": [
          0,
          6
        ]
      },
      {
        "input": {
          "s": "abab",
          "p": "ab"
        },
        "expectedOutput": [
          0,
          1,
          2
        ]
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "a",
          "p": "a"
        },
        "expectedOutput": [
          0
        ]
      },
      {
        "input": {
          "s": "aa",
          "p": "bb"
        },
        "expectedOutput": []
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "permutation-in-string",
    "title": "Permutation in String",
    "slug": "permutation-in-string",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.\n\nIn other words, return `true` if one of `s1`'s permutations is the substring of `s2`.",
    "constraints": [
      "1 <= s1.length, s2.length <= 10^4",
      "s1 and s2 consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "output": "true",
        "explanation": "s2 contains one permutation of s1 (\"ba\")."
      },
      {
        "input": "s1 = \"ab\", s2 = \"eidboaoo\"",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function checkInclusion(s1, s2) {\n  // Your solution here\n}",
      "python": "def checkInclusion(s1, s2):\n    pass",
      "java": "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        return true;\n    }\n};",
      "c": "bool checkInclusion(char* s1, char* s2) {\n    return true;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s1": "ab",
          "s2": "eidbaooo"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s1": "ab",
          "s2": "eidboaoo"
        },
        "expectedOutput": false
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s1": "a",
          "s2": "a"
        },
        "expectedOutput": true
      },
      {
        "input": {
          "s1": "adc",
          "s2": "dcda"
        },
        "expectedOutput": true
      }
    ],
    "tags": [
      "Hash Table",
      "Two Pointers",
      "String",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of only uppercase English letters.",
      "0 <= k <= s.length"
    ],
    "examples": [
      {
        "input": "s = \"ABAB\", k = 2",
        "output": "4",
        "explanation": "Replace the two 'A's with two 'B's or vice versa."
      },
      {
        "input": "s = \"AABABBA\", k = 1",
        "output": "4",
        "explanation": "Replace the one 'A' in the middle with 'B' and form \"AABBBBA\". The substring \"BBBB\" has length 4."
      }
    ],
    "starterCode": {
      "javascript": "function characterReplacement(s, k) {\n  // Your solution here\n}",
      "python": "def characterReplacement(s, k):\n    pass",
      "java": "class Solution {\n    public int characterReplacement(String s, int k) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        return 0;\n    }\n};",
      "c": "int characterReplacement(char* s, int k) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "ABAB",
          "k": 2
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "s": "AABABBA",
          "k": 1
        },
        "expectedOutput": 4
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "AAAA",
          "k": 2
        },
        "expectedOutput": 4
      },
      {
        "input": {
          "s": "ABBB",
          "k": 2
        },
        "expectedOutput": 4
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "fruit-into-baskets",
    "title": "Fruit Into Baskets",
    "slug": "fruit-into-baskets",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the type of fruit the `i-th` tree produces.\n\nYou want to collect as much fruit as possible. However, the owner has some strict rules:\n- You only have two baskets, and each basket can only hold a single type of fruit.\n- Starting from any tree, you must pick exactly one fruit from every tree while moving to the right.\n- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.\n\nReturn the maximum number of fruits you can pick.",
    "constraints": [
      "1 <= fruits.length <= 10^5",
      "0 <= fruits[i] < fruits.length"
    ],
    "examples": [
      {
        "input": "fruits = [1,2,1]",
        "output": "3"
      },
      {
        "input": "fruits = [0,1,2,2]",
        "output": "3",
        "explanation": "We can pick from trees [1,2,2]."
      },
      {
        "input": "fruits = [1,2,3,2,2]",
        "output": "4",
        "explanation": "We can pick from trees [2,3,2,2]."
      }
    ],
    "starterCode": {
      "javascript": "function totalFruit(fruits) {\n  // Your solution here\n}",
      "python": "def totalFruit(fruits):\n    pass",
      "java": "class Solution {\n    public int totalFruit(int[] fruits) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        return 0;\n    }\n};",
      "c": "int totalFruit(int* fruits, int fruitsSize) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "fruits": [
            1,
            2,
            1
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "fruits": [
            0,
            1,
            2,
            2
          ]
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "fruits": [
            1,
            2,
            3,
            2,
            2
          ]
        },
        "expectedOutput": 4
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "fruits": [
            3,
            3,
            3,
            1,
            2,
            1,
            1,
            2,
            3,
            3,
            4
          ]
        },
        "expectedOutput": 5
      }
    ],
    "tags": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring",
    "difficulty": "HARD",
    "category": "Sliding Window",
    "description": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.",
    "constraints": [
      "m == s.length",
      "n == t.length",
      "1 <= m, n <= 10^5",
      "s and t consist of uppercase and lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t."
      },
      {
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\""
      },
      {
        "input": "s = \"a\", t = \"aa\"",
        "output": "\"\"",
        "explanation": "Both 'a's from t must be included in the window."
      }
    ],
    "starterCode": {
      "javascript": "function minWindow(s, t) {\n  // Your solution here\n}",
      "python": "def minWindow(s, t):\n    pass",
      "java": "class Solution {\n    public String minWindow(String s, String t) {\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        return \"\";\n    }\n};",
      "c": "char* minWindow(char* s, char* t) {\n    return \"\";\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "ADOBECODEBANC",
          "t": "ABC"
        },
        "expectedOutput": "BANC"
      },
      {
        "input": {
          "s": "a",
          "t": "a"
        },
        "expectedOutput": "a"
      },
      {
        "input": {
          "s": "a",
          "t": "aa"
        },
        "expectedOutput": ""
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "ab",
          "t": "b"
        },
        "expectedOutput": "b"
      },
      {
        "input": {
          "s": "bba",
          "t": "ab"
        },
        "expectedOutput": "ba"
      }
    ],
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "maximum-number-of-vowels-in-a-substring",
    "title": "Maximum Number of Vowels in a Substring of Given Length",
    "slug": "maximum-number-of-vowels-in-a-substring",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "Given a string `s` and an integer `k`, return the maximum number of vowel letters in any substring of `s` with length `k`.\n\nVowel letters in English are 'a', 'e', 'i', 'o', and 'u'.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of lowercase English letters.",
      "1 <= k <= s.length"
    ],
    "examples": [
      {
        "input": "s = \"abciiidef\", k = 3",
        "output": "3",
        "explanation": "The substring \"iii\" contains 3 vowel letters."
      },
      {
        "input": "s = \"aeiou\", k = 2",
        "output": "2"
      },
      {
        "input": "s = \"leetcode\", k = 3",
        "output": "2"
      }
    ],
    "starterCode": {
      "javascript": "function maxVowels(s, k) {\n  // Your solution here\n}",
      "python": "def maxVowels(s, k):\n    pass",
      "java": "class Solution {\n    public int maxVowels(String s, int k) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxVowels(string s, int k) {\n        return 0;\n    }\n};",
      "c": "int maxVowels(char* s, int k) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "s": "abciiidef",
          "k": 3
        },
        "expectedOutput": 3
      },
      {
        "input": {
          "s": "aeiou",
          "k": 2
        },
        "expectedOutput": 2
      },
      {
        "input": {
          "s": "leetcode",
          "k": 3
        },
        "expectedOutput": 2
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "s": "rhythms",
          "k": 4
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "s": "tryhard",
          "k": 4
        },
        "expectedOutput": 1
      }
    ],
    "tags": [
      "String",
      "Sliding Window"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  },
  {
    "_id": "max-consecutive-ones-iii",
    "title": "Max Consecutive Ones III",
    "slug": "max-consecutive-ones-iii",
    "difficulty": "MEDIUM",
    "category": "Sliding Window",
    "description": "Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`'s in the array if you can flip at most `k` `0`'s.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "nums[i] is either 0 or 1.",
      "0 <= k <= nums.length"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
        "output": "6",
        "explanation": "[1,1,1,0,0,1,1,1,1,1,1] bolded numbers were flipped from 0 to 1."
      },
      {
        "input": "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
        "output": "10"
      }
    ],
    "starterCode": {
      "javascript": "function longestOnes(nums, k) {\n  // Your solution here\n}",
      "python": "def longestOnes(nums, k):\n    pass",
      "java": "class Solution {\n    public int longestOnes(int[] nums, int k) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        return 0;\n    }\n};",
      "c": "int longestOnes(int* nums, int numsSize, int k) {\n    return 0;\n}"
    },
    "supportedLanguages": [
      "javascript",
      "python",
      "java",
      "cpp",
      "c"
    ],
    "visibleTestCases": [
      {
        "input": {
          "nums": [
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            0
          ],
          "k": 2
        },
        "expectedOutput": 6
      },
      {
        "input": {
          "nums": [
            0,
            0,
            1,
            1,
            0,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            1
          ],
          "k": 3
        },
        "expectedOutput": 10
      }
    ],
    "hiddenTestCases": [
      {
        "input": {
          "nums": [
            0,
            0,
            0,
            0
          ],
          "k": 0
        },
        "expectedOutput": 0
      },
      {
        "input": {
          "nums": [
            1,
            1,
            1,
            1
          ],
          "k": 0
        },
        "expectedOutput": 4
      }
    ],
    "tags": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "createdAt": "2026-10-09T10:10:07.400Z"
  }
];

export const categoryCounts = {
  "Arrays": 10,
  "Strings": 10,
  "Dynamic Programming": 10,
  "Graphs": 10,
  "Trees": 10,
  "HashMap / HashSet": 10,
  "Sliding Window": 10
};

export default initialProblems;
