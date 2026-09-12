/**
 * TREES DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Maximum Depth of Binary Tree',
    slug: 'maximum-depth-of-binary-tree',
    difficulty: 'EASY',
    category: 'Trees',
    description: 'Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    constraints: [
      'The number of nodes in the tree is in the range [0, 10^4].',
      '-100 <= Node.val <= 100',
    ],
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '3',
      },
      {
        input: 'root = [1,null,2]',
        output: '2',
      },
    ],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Your solution here
}`,
      python: `def maxDepth(root):
    pass`,
      java: `class Solution {
    public int maxDepth(TreeNode root) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxDepth(TreeNode* root) {
        return 0;
    }
};`,
      c: `int maxDepth(struct TreeNode* root) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expectedOutput: 3 },
      { input: { root: [1, null, 2] }, expectedOutput: 2 },
    ],
    hiddenTestCases: [
      { input: { root: [] }, expectedOutput: 0 },
      { input: { root: [0] }, expectedOutput: 1 },
      { input: { root: [1, 2, 3, 4, 5] }, expectedOutput: 3 },
    ],
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
  },
  {
    title: 'Invert Binary Tree',
    slug: 'invert-binary-tree',
    difficulty: 'EASY',
    category: 'Trees',
    description: 'Given the `root` of a binary tree, invert the tree, and return its root.',
    constraints: [
      'The number of nodes in the tree is in the range [0, 100].',
      '-100 <= Node.val <= 100',
    ],
    examples: [
      {
        input: 'root = [4,2,7,1,3,6,9]',
        output: '[4,7,2,9,6,3,1]',
      },
      {
        input: 'root = [2,1,3]',
        output: '[2,3,1]',
      },
    ],
    starterCode: {
      javascript: `function invertTree(root) {
  // Your solution here
}`,
      python: `def invertTree(root):
    pass`,
      java: `class Solution {
    public TreeNode invertTree(TreeNode root) {
        return root;
    }
}`,
      cpp: `class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        return root;
    }
};`,
      c: `struct TreeNode* invertTree(struct TreeNode* root) {
    return root;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [4, 2, 7, 1, 3, 6, 9] }, expectedOutput: [4, 7, 2, 9, 6, 3, 1] },
      { input: { root: [2, 1, 3] }, expectedOutput: [2, 3, 1] },
    ],
    hiddenTestCases: [
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1] }, expectedOutput: [1] },
    ],
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
  },
  {
    title: 'Same Tree',
    slug: 'same-tree',
    difficulty: 'EASY',
    category: 'Trees',
    description: 'Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.\n\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
    constraints: [
      'The number of nodes in both trees is in the range [0, 100].',
      '-10^4 <= Node.val <= 10^4',
    ],
    examples: [
      {
        input: 'p = [1,2,3], q = [1,2,3]',
        output: 'true',
      },
      {
        input: 'p = [1,2], q = [1,null,2]',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function isSameTree(p, q) {
  // Your solution here
}`,
      python: `def isSameTree(p, q):
    pass`,
      java: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        return true;
    }
};`,
      c: `bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { p: [1, 2, 3], q: [1, 2, 3] }, expectedOutput: true },
      { input: { p: [1, 2], q: [1, null, 2] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { p: [], q: [] }, expectedOutput: true },
      { input: { p: [1, 2, 1], q: [1, 1, 2] }, expectedOutput: false },
    ],
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
  },
  {
    title: 'Symmetric Tree',
    slug: 'symmetric-tree',
    difficulty: 'EASY',
    category: 'Trees',
    description: 'Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    constraints: [
      'The number of nodes in the tree is in the range [1, 1000].',
      '-100 <= Node.val <= 100',
    ],
    examples: [
      {
        input: 'root = [1,2,2,3,4,4,3]',
        output: 'true',
      },
      {
        input: 'root = [1,2,2,null,3,null,3]',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function isSymmetric(root) {
  // Your solution here
}`,
      python: `def isSymmetric(root):
    pass`,
      java: `class Solution {
    public boolean isSymmetric(TreeNode root) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return true;
    }
};`,
      c: `bool isSymmetric(struct TreeNode* root) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [1, 2, 2, 3, 4, 4, 3] }, expectedOutput: true },
      { input: { root: [1, 2, 2, null, 3, null, 3] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { root: [1] }, expectedOutput: true },
      { input: { root: [1, 2, 2, 2, null, 2] }, expectedOutput: false },
    ],
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
  },
  {
    title: 'Binary Tree Level Order Traversal',
    slug: 'binary-tree-level-order-traversal',
    difficulty: 'MEDIUM',
    category: 'Trees',
    description: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values (i.e., from left to right, level by level).',
    constraints: [
      'The number of nodes in the tree is in the range [0, 2000].',
      '-1000 <= Node.val <= 1000',
    ],
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '[[3],[9,20],[15,7]]',
      },
      {
        input: 'root = [1]',
        output: '[[1]]',
      },
      {
        input: 'root = []',
        output: '[]',
      },
    ],
    starterCode: {
      javascript: `function levelOrder(root) {
  // Your solution here
}`,
      python: `def levelOrder(root):
    pass`,
      java: `class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        return {};
    }
};`,
      c: `int** levelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expectedOutput: [[3], [9, 20], [15, 7]] },
      { input: { root: [1] }, expectedOutput: [[1]] },
    ],
    hiddenTestCases: [
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1, 2, 3, 4, null, null, 5] }, expectedOutput: [[1], [2, 3], [4, 5]] },
    ],
    tags: ['Tree', 'Breadth-First Search', 'Binary Tree'],
  },
  {
    title: 'Diameter of Binary Tree',
    slug: 'diameter-of-binary-tree',
    difficulty: 'EASY',
    category: 'Trees',
    description: 'Given the `root` of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.',
    constraints: [
      'The number of nodes in the tree is in the range [1, 10^4].',
      '-100 <= Node.val <= 100',
    ],
    examples: [
      {
        input: 'root = [1,2,3,4,5]',
        output: '3',
        explanation: '3 is the length of the path [4,2,1,3] or [5,2,1,3].',
      },
      {
        input: 'root = [1,2]',
        output: '1',
      },
    ],
    starterCode: {
      javascript: `function diameterOfBinaryTree(root) {
  // Your solution here
}`,
      python: `def diameterOfBinaryTree(root):
    pass`,
      java: `class Solution {
    public int diameterOfBinaryTree(TreeNode root) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        return 0;
    }
};`,
      c: `int diameterOfBinaryTree(struct TreeNode* root) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [1, 2, 3, 4, 5] }, expectedOutput: 3 },
      { input: { root: [1, 2] }, expectedOutput: 1 },
    ],
    hiddenTestCases: [
      { input: { root: [1] }, expectedOutput: 0 },
      { input: { root: [1, 2, 3, 4, null, null, null, 5] }, expectedOutput: 3 },
    ],
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
  },
  {
    title: 'Balanced Binary Tree',
    slug: 'balanced-binary-tree',
    difficulty: 'EASY',
    category: 'Trees',
    description: 'Given a binary tree, determine if it is height-balanced.\n\nA height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.',
    constraints: [
      'The number of nodes in the tree is in the range [0, 5000].',
      '-10^4 <= Node.val <= 10^4',
    ],
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: 'true',
      },
      {
        input: 'root = [1,2,2,3,3,null,null,4,4]',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function isBalanced(root) {
  // Your solution here
}`,
      python: `def isBalanced(root):
    pass`,
      java: `class Solution {
    public boolean isBalanced(TreeNode root) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return true;
    }
};`,
      c: `bool isBalanced(struct TreeNode* root) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expectedOutput: true },
      { input: { root: [1, 2, 2, 3, 3, null, null, 4, 4] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { root: [] }, expectedOutput: true },
      { input: { root: [1] }, expectedOutput: true },
    ],
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
  },
  {
    title: 'Lowest Common Ancestor of a Binary Search Tree',
    slug: 'lowest-common-ancestor-of-a-binary-search-tree',
    difficulty: 'MEDIUM',
    category: 'Trees',
    description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself)."',
    constraints: [
      'The number of nodes in the tree is in the range [2, 10^5].',
      '-10^9 <= Node.val <= 10^9',
      'All Node.val are unique.',
      'p != q',
      'p and q will exist in the BST.',
    ],
    examples: [
      {
        input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8',
        output: '6',
        explanation: 'The LCA of nodes 2 and 8 is 6.',
      },
      {
        input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4',
        output: '2',
        explanation: 'The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.',
      },
    ],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {
  // Your solution here
}`,
      python: `def lowestCommonAncestor(root, p, q):
    pass`,
      java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        return root;
    }
}`,
      cpp: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        return root;
    }
};`,
      c: `struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    return root;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p: 2, q: 8 }, expectedOutput: 6 },
      { input: { root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p: 2, q: 4 }, expectedOutput: 2 },
    ],
    hiddenTestCases: [
      { input: { root: [2, 1], p: 2, q: 1 }, expectedOutput: 2 },
      { input: { root: [5, 3, 6, 2, 4, null, null, 1], p: 1, q: 4 }, expectedOutput: 3 },
    ],
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
  },
  {
    title: 'Validate Binary Search Tree',
    slug: 'validate-binary-search-tree',
    difficulty: 'MEDIUM',
    category: 'Trees',
    description: 'Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys strictly less than the node\'s key.\n- The right subtree of a node contains only nodes with keys strictly greater than the node\'s key.\n- Both the left and right subtrees must also be binary search trees.',
    constraints: [
      'The number of nodes in the tree is in the range [1, 10^4].',
      '-2^31 <= Node.val <= 2^31 - 1',
    ],
    examples: [
      {
        input: 'root = [2,1,3]',
        output: 'true',
      },
      {
        input: 'root = [5,1,4,null,null,3,6]',
        output: 'false',
        explanation: 'The root node\'s value is 5 but its right child\'s value is 4.',
      },
    ],
    starterCode: {
      javascript: `function isValidBST(root) {
  // Your solution here
}`,
      python: `def isValidBST(root):
    pass`,
      java: `class Solution {
    public boolean isValidBST(TreeNode root) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return true;
    }
};`,
      c: `bool isValidBST(struct TreeNode* root) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [2, 1, 3] }, expectedOutput: true },
      { input: { root: [5, 1, 4, null, null, 3, 6] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { root: [2, 2, 2] }, expectedOutput: false },
      { input: { root: [10, 5, 15, null, null, 6, 20] }, expectedOutput: false },
      { input: { root: [2147483647] }, expectedOutput: true },
    ],
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
  },
  {
    title: 'Kth Smallest Element in a BST',
    slug: 'kth-smallest-element-in-a-bst',
    difficulty: 'MEDIUM',
    category: 'Trees',
    description: 'Given the `root` of a binary search tree, and an integer `k`, return the `k-th` smallest value (1-indexed) of all the values of the nodes in the tree.',
    constraints: [
      'The number of nodes in the tree is n.',
      '1 <= k <= n <= 10^4',
      '0 <= Node.val <= 10^4',
    ],
    examples: [
      {
        input: 'root = [3,1,4,null,2], k = 1',
        output: '1',
      },
      {
        input: 'root = [5,3,6,2,4,null,null,1], k = 3',
        output: '3',
      },
    ],
    starterCode: {
      javascript: `function kthSmallest(root, k) {
  // Your solution here
}`,
      python: `def kthSmallest(root, k):
    pass`,
      java: `class Solution {
    public int kthSmallest(TreeNode root, int k) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        return 0;
    }
};`,
      c: `int kthSmallest(struct TreeNode* root, int k) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { root: [3, 1, 4, null, 2], k: 1 }, expectedOutput: 1 },
      { input: { root: [5, 3, 6, 2, 4, null, null, 1], k: 3 }, expectedOutput: 3 },
    ],
    hiddenTestCases: [
      { input: { root: [1], k: 1 }, expectedOutput: 1 },
      { input: { root: [4, 2, 5, 1, 3], k: 4 }, expectedOutput: 4 },
    ],
    tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
  },
];
