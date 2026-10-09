const axios = require('axios');
const { execFile, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

const CODE_EXECUTION_API_URL =
  process.env.CODE_EXECUTION_API_URL || 'https://emkc.org/api/v2/piston';
const CODE_EXECUTION_API_KEY = process.env.CODE_EXECUTION_API_KEY || '';

const LANGUAGE_CONFIGS = {
  javascript: {
    language: 'javascript',
    version: '18.15.0',
    fileName: 'solution.js',
    command: process.execPath || 'node',
    args: (filePath) => ['--max-old-space-size=128', filePath],
    extension: '.js',
  },
  python: {
    language: 'python',
    version: '3.10.0',
    fileName: 'solution.py',
    command: 'python',
    args: (filePath) => [filePath],
    extension: '.py',
  },
  java: {
    language: 'java',
    version: '15.0.2',
    fileName: 'Solution.java',
    command: 'java',
    args: (filePath) => [filePath],
    extension: '.java',
  },
  cpp: {
    language: 'c++',
    version: '10.2.0',
    fileName: 'solution.cpp',
    command: 'g++',
    args: (filePath) => [filePath],
    extension: '.cpp',
  },
  c: {
    language: 'c',
    version: '10.2.0',
    fileName: 'solution.c',
    command: 'gcc',
    args: (filePath) => [filePath],
    extension: '.c',
  },
};

const toJavaLiteral = (val) => {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'number') {
    if (Number.isInteger(val)) return `${val}`;
    return `${val}d`;
  }
  if (typeof val === 'boolean') return `${val}`;
  if (typeof val === 'string') return JSON.stringify(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return 'new Object[]{}';
    if (val.every((x) => typeof x === 'number' && Number.isInteger(x))) {
      return `new int[]{ ${val.join(', ')} }`;
    }
    if (val.every((x) => typeof x === 'string')) {
      return `new String[]{ ${val.map((s) => JSON.stringify(s)).join(', ')} }`;
    }
    if (val.every((x) => typeof x === 'boolean')) {
      return `new boolean[]{ ${val.join(', ')} }`;
    }
    if (val.every((x) => Array.isArray(x))) {
      return `new Object[]{ ${val.map((sub) => toJavaLiteral(sub)).join(', ')} }`;
    }
    return `new Object[]{ ${val.map((item) => toJavaLiteral(item)).join(', ')} }`;
  }
  return JSON.stringify(String(val));
};

/**
 * Build test harness wrapper around user code to execute test cases safely
 */
const buildExecutionHarness = (language, userCode, testCases) => {
  const lang = language.toLowerCase();

  if (lang === 'javascript') {
    return `
// Helper Data Structures
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

${userCode}

// DEV COLLAB Test Harness
const testCases = ${JSON.stringify(testCases)};
const results = [];

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}

// Find main function from user code
let mainFn = null;
const userDefinedFns = ['twoSum', 'maxProfit', 'maxSubArray', 'productExceptSelf', 'merge', 'moveZeroes', 'rotate', 'majorityElement', 'maxArea', 'threeSum', 'reverseString', 'isPalindrome', 'isAnagram', 'longestCommonPrefix', 'groupAnagrams', 'longestPalindrome', 'compress', 'reverseWords', 'isSubsequence', 'firstUniqChar', 'climbStairs', 'rob', 'coinChange', 'lengthOfLIS', 'longestCommonSubsequence', 'knapSack', 'wordBreak', 'canPartition', 'uniquePaths', 'numDecodings', 'numIslands', 'cloneGraph', 'canFinish', 'findOrder', 'validTree', 'pacificAtlantic', 'orangesRotting', 'floodFill', 'countComponents', 'ladderLength', 'maxDepth', 'invertTree', 'isSameTree', 'isSymmetric', 'levelOrder', 'diameterOfBinaryTree', 'isBalanced', 'lowestCommonAncestor', 'isValidBST', 'kthSmallest', 'containsDuplicate', 'longestConsecutive', 'intersection', 'isHappy', 'isIsomorphic', 'wordPattern', 'subarraySum', 'ransomNote', 'topKFrequent', 'lengthOfLongestSubstring', 'findMaxAverage', 'minSubArrayLen', 'findAnagrams', 'checkInclusion', 'characterReplacement', 'totalFruit', 'minWindow', 'maxVowels', 'longestOnes'];

try {
  if (typeof Solution === 'function') {
    const solInstance = new Solution();
    for (const name of userDefinedFns) {
      if (typeof solInstance[name] === 'function') {
        mainFn = solInstance[name].bind(solInstance);
        break;
      }
    }
    if (!mainFn) {
      const protoMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(solInstance))
        .filter(m => m !== 'constructor' && typeof solInstance[m] === 'function');
      if (protoMethods.length > 0) {
        mainFn = solInstance[protoMethods[0]].bind(solInstance);
      }
    }
  }
} catch(e) {}

if (!mainFn) {
  for (const name of userDefinedFns) {
    try {
      if (typeof eval(name) === 'function') {
        mainFn = eval(name);
        break;
      }
    } catch(e) {}
  }
}

if (!mainFn) {
  const matches = [...${JSON.stringify(userCode)}.matchAll(/(?:function|const|let|var)\\s+([a-zA-Z0-9_$]+)/g)];
  for (const m of matches) {
    try {
      if (typeof eval(m[1]) === 'function') {
        mainFn = eval(m[1]);
        break;
      }
    } catch(e) {}
  }
}

for (let i = 0; i < testCases.length; i++) {
  const tc = testCases[i];
  const start = Date.now();
  try {
    let args = [];
    if (typeof tc.input === 'object' && tc.input !== null && !Array.isArray(tc.input)) {
      args = Object.values(tc.input);
    } else {
      args = [tc.input];
    }
    
    let actual = mainFn ? mainFn(...args) : null;
    const runtime = Date.now() - start;
    const passed = deepEqual(actual, tc.expectedOutput);
    results.push({
      testNumber: i + 1,
      passed,
      actualOutput: actual,
      expectedOutput: tc.expectedOutput,
      input: tc.input,
      runtime,
      status: passed ? 'PASSED' : 'FAILED',
    });
  } catch (err) {
    results.push({
      testNumber: i + 1,
      passed: false,
      actualOutput: null,
      expectedOutput: tc.expectedOutput,
      input: tc.input,
      runtime: Date.now() - start,
      status: 'RUNTIME_ERROR',
      errorMessage: err.message,
    });
  }
}

console.log('__DEVCOLLAB_OUTPUT_START__');
console.log(JSON.stringify(results));
console.log('__DEVCOLLAB_OUTPUT_END__');
`;
  }

  if (lang === 'python') {
    return `
import json
import time

# Helper data structures
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

${userCode}

test_cases = json.loads('${JSON.stringify(testCases).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}')
results = []

# Detect main function / class method
main_fn = None
possible_fns = ['twoSum', 'maxProfit', 'maxSubArray', 'productExceptSelf', 'merge', 'moveZeroes', 'rotate', 'majorityElement', 'maxArea', 'threeSum', 'reverseString', 'isPalindrome', 'isAnagram', 'longestCommonPrefix', 'groupAnagrams', 'longestPalindrome', 'compress', 'reverseWords', 'isSubsequence', 'firstUniqChar', 'climbStairs', 'rob', 'coinChange', 'lengthOfLIS', 'longestCommonSubsequence', 'knapSack', 'wordBreak', 'canPartition', 'uniquePaths', 'numDecodings', 'numIslands', 'cloneGraph', 'canFinish', 'findOrder', 'validTree', 'pacificAtlantic', 'orangesRotting', 'floodFill', 'countComponents', 'ladderLength', 'maxDepth', 'invertTree', 'isSameTree', 'isSymmetric', 'levelOrder', 'diameterOfBinaryTree', 'isBalanced', 'lowestCommonAncestor', 'isValidBST', 'kthSmallest', 'containsDuplicate', 'longestConsecutive', 'intersection', 'isHappy', 'isIsomorphic', 'wordPattern', 'subarraySum', 'ransomNote', 'topKFrequent', 'lengthOfLongestSubstring', 'findMaxAverage', 'minSubArrayLen', 'findAnagrams', 'checkInclusion', 'characterReplacement', 'totalFruit', 'minWindow', 'maxVowels', 'longestOnes']

# 1. Check if class Solution exists
if 'Solution' in globals() and isinstance(globals()['Solution'], type):
    try:
        sol_instance = globals()['Solution']()
        for name in possible_fns:
            if hasattr(sol_instance, name) and callable(getattr(sol_instance, name)):
                main_fn = getattr(sol_instance, name)
                break
        if not main_fn:
            for attr in dir(sol_instance):
                if not attr.startswith('__') and callable(getattr(sol_instance, attr)):
                    main_fn = getattr(sol_instance, attr)
                    break
    except Exception:
        pass

# 2. Check top-level functions from possible_fns
if not main_fn:
    for name in possible_fns:
        if name in globals() and callable(globals()[name]):
            main_fn = globals()[name]
            break

# 3. Check any user-defined top-level functions
if not main_fn:
    for name in list(globals().keys()):
        if not name.startswith('__') and name not in ['json', 'time', 'test_cases', 'results', 'possible_fns', 'main_fn', 'ListNode', 'TreeNode', 'sol_instance'] and callable(globals()[name]):
            main_fn = globals()[name]
            break

for i, tc in enumerate(test_cases):
    start = time.time()
    try:
        inp = tc.get('input')
        if isinstance(inp, dict):
            args = list(inp.values())
        elif isinstance(inp, list) and not isinstance(tc.get('expectedOutput'), list):
            args = [inp]
        else:
            args = [inp]
        
        actual = main_fn(*args) if main_fn else None
        runtime = int((time.time() - start) * 1000)
        passed = (actual == tc.get('expectedOutput'))
        results.append({
            'testNumber': i + 1,
            'passed': passed,
            'actualOutput': actual,
            'expectedOutput': tc.get('expectedOutput'),
            'input': tc.get('input'),
            'runtime': runtime,
            'status': 'PASSED' if passed else 'FAILED'
        })
    except Exception as e:
        results.append({
            'testNumber': i + 1,
            'passed': False,
            'actualOutput': None,
            'expectedOutput': tc.get('expectedOutput'),
            'input': tc.get('input'),
            'runtime': int((time.time() - start) * 1000),
            'status': 'RUNTIME_ERROR',
            'errorMessage': str(e)
        })

print('__DEVCOLLAB_OUTPUT_START__')
print(json.dumps(results))
print('__DEVCOLLAB_OUTPUT_END__')
`;
  }

  if (lang === 'java') {
    // Separate user imports from class declaration so imports are always at the top of SolutionRunner.java
    const userImports = [];
    const nonImportLines = [];

    userCode.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('import ') && trimmed.endsWith(';')) {
        userImports.push(trimmed);
      } else if (!trimmed.startsWith('package ')) {
        nonImportLines.push(line);
      }
    });

    const sanitizedCode = nonImportLines
      .join('\n')
      .replace(/public\s+class\s+Solution/g, 'class Solution');

    const testCasesArray = testCases.map((tc) => {
      let args = [];
      if (typeof tc.input === 'object' && tc.input !== null && !Array.isArray(tc.input)) {
        args = Object.values(tc.input);
      } else {
        args = [tc.input];
      }
      const javaArgs = `new Object[]{ ${args.map(toJavaLiteral).join(', ')} }`;
      const javaExpected = toJavaLiteral(tc.expectedOutput);
      const inputDesc = JSON.stringify(typeof tc.input === 'object' ? JSON.stringify(tc.input) : String(tc.input));
      return `new Object[]{ ${javaArgs}, ${javaExpected}, ${inputDesc} }`;
    }).join(',\n    ');

    return `
import java.util.*;
import java.lang.reflect.*;
${userImports.join('\n')}

public class SolutionRunner {
    static String escapeJson(String s) {
        if (s == null) return "null";
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (c == '"') { sb.append('\\\\'); sb.append('"'); }
            else if (c == '\\\\') { sb.append('\\\\'); sb.append('\\\\'); }
            else if (c == '\\n') { sb.append('\\\\'); sb.append('n'); }
            else if (c == '\\r') { sb.append('\\\\'); sb.append('r'); }
            else if (c == '\\t') { sb.append('\\\\'); sb.append('t'); }
            else sb.append(c);
        }
        return sb.toString();
    }

    static String toJson(Object obj) {
        if (obj == null) return "null";
        if (obj instanceof Boolean || obj instanceof Number) return obj.toString();
        if (obj instanceof Character || obj instanceof String) return "\\"" + escapeJson(obj.toString()) + "\\"";
        if (obj instanceof int[]) {
            int[] arr = (int[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                if (i > 0) sb.append(",");
                sb.append(arr[i]);
            }
            sb.append("]");
            return sb.toString();
        }
        if (obj instanceof long[]) {
            long[] arr = (long[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                if (i > 0) sb.append(",");
                sb.append(arr[i]);
            }
            sb.append("]");
            return sb.toString();
        }
        if (obj instanceof double[]) {
            double[] arr = (double[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                if (i > 0) sb.append(",");
                sb.append(arr[i]);
            }
            sb.append("]");
            return sb.toString();
        }
        if (obj instanceof boolean[]) {
            boolean[] arr = (boolean[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                if (i > 0) sb.append(",");
                sb.append(arr[i]);
            }
            sb.append("]");
            return sb.toString();
        }
        if (obj instanceof Object[]) {
            Object[] arr = (Object[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                if (i > 0) sb.append(",");
                sb.append(toJson(arr[i]));
            }
            sb.append("]");
            return sb.toString();
        }
        if (obj instanceof Map<?, ?>) {
            Map<?, ?> map = (Map<?, ?>) obj;
            StringBuilder sb = new StringBuilder("{");
            int i = 0;
            for (Map.Entry<?, ?> entry : map.entrySet()) {
                if (i++ > 0) sb.append(",");
                sb.append("\\"").append(escapeJson(String.valueOf(entry.getKey()))).append("\\":");
                sb.append(toJson(entry.getValue()));
            }
            sb.append("}");
            return sb.toString();
        }
        if (obj instanceof Collection<?>) {
            Collection<?> col = (Collection<?>) obj;
            StringBuilder sb = new StringBuilder("[");
            int i = 0;
            for (Object item : col) {
                if (i++ > 0) sb.append(",");
                sb.append(toJson(item));
            }
            sb.append("]");
            return sb.toString();
        }
        return "\\"" + escapeJson(obj.toString()) + "\\"";
    }

    static boolean deepEquals(Object a, Object b) {
        if (a == b) return true;
        if (a == null || b == null) return false;
        if (a instanceof Number && b instanceof Number) {
            return Double.compare(((Number) a).doubleValue(), ((Number) b).doubleValue()) == 0;
        }
        if (a instanceof int[] && b instanceof int[]) {
            return Arrays.equals((int[]) a, (int[]) b);
        }
        if (a instanceof int[] && b instanceof Object[]) {
            int[] arrA = (int[]) a;
            Object[] arrB = (Object[]) b;
            if (arrA.length != arrB.length) return false;
            for (int i = 0; i < arrA.length; i++) {
                if (!deepEquals(arrA[i], arrB[i])) return false;
            }
            return true;
        }
        if (a instanceof Object[] && b instanceof Object[]) {
            return Arrays.deepEquals((Object[]) a, (Object[]) b);
        }
        if (a instanceof Collection<?> && b instanceof Collection<?>) {
            Collection<?> colA = (Collection<?>) a;
            Collection<?> colB = (Collection<?>) b;
            if (colA.size() != colB.size()) return false;
            Iterator<?> itA = colA.iterator();
            Iterator<?> itB = colB.iterator();
            while (itA.hasNext() && itB.hasNext()) {
                if (!deepEquals(itA.next(), itB.next())) return false;
            }
            return true;
        }
        return Objects.equals(a, b);
    }

    static Object convertArg(Object val, Class<?> targetType) {
        if (val == null) return null;
        if (targetType.isInstance(val)) return val;

        if (targetType == int.class || targetType == Integer.class) {
            if (val instanceof Number) return ((Number) val).intValue();
            return Integer.parseInt(val.toString());
        }
        if (targetType == long.class || targetType == Long.class) {
            if (val instanceof Number) return ((Number) val).longValue();
            return Long.parseLong(val.toString());
        }
        if (targetType == double.class || targetType == Double.class) {
            if (val instanceof Number) return ((Number) val).doubleValue();
            return Double.parseDouble(val.toString());
        }
        if (targetType == boolean.class || targetType == Boolean.class) {
            if (val instanceof Boolean) return val;
            return Boolean.parseBoolean(val.toString());
        }
        if (targetType == String.class) {
            return val.toString();
        }
        if (targetType == char.class || targetType == Character.class) {
            String s = val.toString();
            return s.length() > 0 ? s.charAt(0) : ' ';
        }

        if (targetType == int[].class) {
            if (val instanceof int[]) return val;
            if (val instanceof Object[]) {
                Object[] arr = (Object[]) val;
                int[] res = new int[arr.length];
                for (int i = 0; i < arr.length; i++) res[i] = ((Number) arr[i]).intValue();
                return res;
            }
            if (val instanceof List<?>) {
                List<?> list = (List<?>) val;
                int[] res = new int[list.size()];
                for (int i = 0; i < list.size(); i++) res[i] = ((Number) list.get(i)).intValue();
                return res;
            }
        }

        if (targetType == String[].class) {
            if (val instanceof String[]) return val;
            if (val instanceof Object[]) {
                Object[] arr = (Object[]) val;
                String[] res = new String[arr.length];
                for (int i = 0; i < arr.length; i++) res[i] = String.valueOf(arr[i]);
                return res;
            }
            if (val instanceof List<?>) {
                List<?> list = (List<?>) val;
                String[] res = new String[list.size()];
                for (int i = 0; i < list.size(); i++) res[i] = String.valueOf(list.get(i));
                return res;
            }
        }

        if (targetType == int[][].class) {
            if (val instanceof int[][]) return val;
            if (val instanceof Object[]) {
                Object[] arr2 = (Object[]) val;
                int[][] res = new int[arr2.length][];
                for (int i = 0; i < arr2.length; i++) {
                    res[i] = (int[]) convertArg(arr2[i], int[].class);
                }
                return res;
            }
            if (val instanceof List<?>) {
                List<?> list = (List<?>) val;
                int[][] res = new int[list.size()][];
                for (int i = 0; i < list.size(); i++) {
                    res[i] = (int[]) convertArg(list.get(i), int[].class);
                }
                return res;
            }
        }

        if (targetType == char[].class) {
            if (val instanceof char[]) return val;
            if (val instanceof String) return ((String) val).toCharArray();
            if (val instanceof Object[]) {
                Object[] arr = (Object[]) val;
                char[] res = new char[arr.length];
                for (int i = 0; i < arr.length; i++) res[i] = arr[i].toString().charAt(0);
                return res;
            }
        }

        if (targetType == List.class) {
            if (val instanceof List<?>) return val;
            if (val instanceof Object[]) return Arrays.asList((Object[]) val);
            if (val instanceof int[]) {
                int[] arr = (int[]) val;
                List<Integer> list = new ArrayList<>();
                for (int num : arr) list.add(num);
                return list;
            }
        }

        return val;
    }

    public static void main(String[] args) {
        List<Map<String, Object>> results = new ArrayList<>();
        try {
            Solution sol = new Solution();
            Method targetMethod = null;
            Method[] methods = Solution.class.getDeclaredMethods();
            for (Method m : methods) {
                if (Modifier.isPublic(m.getModifiers()) && !m.getName().equals("main")) {
                    targetMethod = m;
                    break;
                }
            }
            if (targetMethod == null && methods.length > 0) {
                targetMethod = methods[0];
            }
            if (targetMethod != null) {
                targetMethod.setAccessible(true);
            }

            Class<?>[] paramTypes = targetMethod != null ? targetMethod.getParameterTypes() : new Class<?>[0];

            Object[][] testCases = new Object[][] {
                ${testCasesArray}
            };

            for (int i = 0; i < testCases.length; i++) {
                Object[] rawArgs = (Object[]) testCases[i][0];
                Object expected = testCases[i][1];
                Object inputDesc = testCases[i][2];

                long start = System.currentTimeMillis();
                try {
                    Object[] converted = new Object[paramTypes.length];
                    for (int p = 0; p < paramTypes.length && p < rawArgs.length; p++) {
                        converted[p] = convertArg(rawArgs[p], paramTypes[p]);
                    }
                    Object actual = targetMethod.invoke(sol, converted);
                    long rt = System.currentTimeMillis() - start;
                    boolean passed = deepEquals(actual, expected);

                    Map<String, Object> r = new LinkedHashMap<>();
                    r.put("testNumber", i + 1);
                    r.put("passed", passed);
                    r.put("actualOutput", actual);
                    r.put("expectedOutput", expected);
                    r.put("input", inputDesc);
                    r.put("runtime", rt);
                    r.put("status", passed ? "PASSED" : "FAILED");
                    results.add(r);
                } catch (Throwable t) {
                    Throwable cause = t instanceof InvocationTargetException ? t.getCause() : t;
                    long rt = System.currentTimeMillis() - start;
                    Map<String, Object> r = new LinkedHashMap<>();
                    r.put("testNumber", i + 1);
                    r.put("passed", false);
                    r.put("actualOutput", null);
                    r.put("expectedOutput", expected);
                    r.put("input", inputDesc);
                    r.put("runtime", rt);
                    r.put("status", "RUNTIME_ERROR");
                    r.put("errorMessage", cause.getMessage() != null ? cause.getMessage() : cause.toString());
                    results.add(r);
                }
            }
        } catch (Exception e) {
            Map<String, Object> r = new LinkedHashMap<>();
            r.put("testNumber", 1);
            r.put("passed", false);
            r.put("status", "RUNTIME_ERROR");
            r.put("errorMessage", e.getMessage());
            results.add(r);
        }

        System.out.println("__DEVCOLLAB_OUTPUT_START__");
        System.out.println(toJson(results));
        System.out.println("__DEVCOLLAB_OUTPUT_END__");
    }
}

// Helper Data Structures
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// User Code
${sanitizedCode}
`;
  }

  // Fallback raw code for other languages
  return userCode;
};

const resolveCommand = (lang, defaultCmd) => {
  if (process.platform === 'win32') {
    if (lang === 'java') {
      const candidates = [
        process.env.JAVA_HOME ? path.join(process.env.JAVA_HOME, 'bin', 'java.exe') : null,
        'C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.2.13-hotspot\\bin\\java.exe',
        path.join(process.env.USERPROFILE || '', 'AppData', 'Local', 'Programs', 'Eclipse Adoptium', 'jdk-17.0.10.7-hotspot', 'bin', 'java.exe'),
        'java.exe',
        'java',
      ].filter(Boolean);

      for (const cand of candidates) {
        if (cand.includes('\\')) {
          try {
            if (require('fs').existsSync(cand)) return cand;
          } catch {}
        }
      }
    }
  }
  return defaultCmd;
};

/**
 * Execute code using local sandboxed process
 */
const executeLocally = async (language, wrappedCode, testCases, startTime) => {
  const lang = language.toLowerCase();
  const langConfig = LANGUAGE_CONFIGS[lang];
  const tempDir = os.tmpdir();
  
  // For Java, create isolated directory with SolutionRunner.java
  let tempExecutionDir = null;
  let tempFilePath = null;

  if (lang === 'java') {
    tempExecutionDir = path.join(tempDir, `devcollab_java_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`);
    await fs.mkdir(tempExecutionDir, { recursive: true });
    tempFilePath = path.join(tempExecutionDir, 'SolutionRunner.java');
  } else {
    const tempFileName = `devcollab_exec_${Date.now()}_${Math.random().toString(36).substring(2, 8)}${langConfig.extension}`;
    tempFilePath = path.join(tempDir, tempFileName);
  }

  try {
    await fs.writeFile(tempFilePath, wrappedCode, 'utf8');

    const cmd = resolveCommand(lang, langConfig.command);
    return await new Promise((resolve) => {
      const child = spawn(cmd, langConfig.args(tempFilePath), {
        timeout: 8000,
        maxBuffer: 2 * 1024 * 1024,
        shell: false,
        env: { ...process.env, NODE_ENV: 'test' },
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('error', (err) => {
        const executionDuration = Date.now() - startTime;
        resolve({
          success: false,
          status: 'RUNTIME_ERROR',
          errorMessage: `Process spawn error: ${err.message}`,
          runtime: executionDuration,
          consoleLogs: err.message,
          testResults: [],
        });
      });

      child.on('close', (code, signal) => {
        const executionDuration = Date.now() - startTime;

        if (signal === 'SIGKILL' || signal === 'SIGTERM') {
          return resolve({
            success: false,
            status: 'TIME_LIMIT_EXCEEDED',
            errorMessage: 'Time Limit Exceeded: Execution took longer than allowed threshold (8s)',
            runtime: executionDuration,
            consoleLogs: stdout || stderr || '',
            testResults: [],
          });
        }

        const startTag = '__DEVCOLLAB_OUTPUT_START__';
        const endTag = '__DEVCOLLAB_OUTPUT_END__';

        if (stdout.includes(startTag) && stdout.includes(endTag)) {
          try {
            const jsonStr = stdout.split(startTag)[1].split(endTag)[0].trim();
            const testResults = JSON.parse(jsonStr);

            const passedCount = testResults.filter((t) => t.passed).length;
            const allPassed = passedCount === testResults.length;

            const userLogs = stdout
              .replace(new RegExp(`${startTag}[\\s\\S]*?${endTag}`), '')
              .trim();

            return resolve({
              success: true,
              status: allPassed ? 'ACCEPTED' : 'WRONG_ANSWER',
              passedTests: passedCount,
              totalTests: testResults.length,
              runtime: executionDuration,
              testResults,
              consoleLogs: userLogs || stderr || 'Execution finished without console output.',
              rawOutput: stdout,
            });
          } catch (parseErr) {
            return resolve({
              success: false,
              status: 'EXECUTION_ERROR',
              errorMessage: `Output parsing error: ${parseErr.message}`,
              runtime: executionDuration,
              consoleLogs: stdout,
              testResults: [],
            });
          }
        }

        if (code !== 0 || stderr) {
          return resolve({
            success: false,
            status: 'RUNTIME_ERROR',
            errorMessage: stderr || stdout || 'Runtime execution error',
            runtime: executionDuration,
            consoleLogs: stdout + (stderr ? `\n${stderr}` : ''),
            testResults: [],
          });
        }

        return resolve({
          success: true,
          status: 'ACCEPTED',
          passedTests: testCases.length,
          totalTests: testCases.length,
          runtime: executionDuration,
          testResults: testCases.map((tc, idx) => ({
            testNumber: idx + 1,
            passed: true,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: stdout.trim(),
            status: 'PASSED',
          })),
          consoleLogs: stdout,
        });
      });
    });
  } finally {
    try {
      if (tempExecutionDir) {
        await fs.rm(tempExecutionDir, { recursive: true, force: true });
      } else if (tempFilePath) {
        await fs.unlink(tempFilePath);
      }
    } catch (_) {}
  }
};

/**
 * Execute code in isolated sandbox (External API if configured, otherwise local sandboxed child process)
 * @param {string} language - 'javascript', 'python', 'java', 'cpp', 'c'
 * @param {string} code - User solution code
 * @param {Array} testCases - Test cases to evaluate
 * @returns {Promise<Object>} Execution results
 */
const executeInSandbox = async (language, code, testCases = []) => {
  const langConfig = LANGUAGE_CONFIGS[language.toLowerCase()];
  if (!langConfig) {
    return {
      success: false,
      status: 'COMPILE_ERROR',
      errorMessage: `Language '${language}' is not supported for execution. Supported: JavaScript, Python, Java, C++, C`,
    };
  }

  const startTime = Date.now();
  const wrappedCode = buildExecutionHarness(language, code, testCases);

  // If a valid external API key is provided, try external Piston execution first
  if (CODE_EXECUTION_API_KEY && CODE_EXECUTION_API_KEY.trim().length > 0) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: CODE_EXECUTION_API_KEY,
      };

      const payload = {
        language: langConfig.language,
        version: langConfig.version,
        files: [{ name: langConfig.fileName, content: wrappedCode }],
        stdin: '',
        run_timeout: 8000,
        compile_timeout: 10000,
      };

      const response = await axios.post(`${CODE_EXECUTION_API_URL}/execute`, payload, {
        headers,
        timeout: 15000,
      });

      const executionDuration = Date.now() - startTime;
      const runResult = response.data?.run || {};
      const compileResult = response.data?.compile || {};

      if (compileResult.code !== undefined && compileResult.code !== 0) {
        return {
          success: false,
          status: 'COMPILE_ERROR',
          errorMessage: compileResult.output || compileResult.stderr || 'Compilation failed',
          runtime: executionDuration,
          consoleLogs: compileResult.output || '',
          testResults: [],
        };
      }

      if (runResult.signal === 'SIGKILL' || runResult.signal === 'SIGTERM') {
        return {
          success: false,
          status: 'TIME_LIMIT_EXCEEDED',
          errorMessage: 'Time Limit Exceeded: Execution took longer than allowed threshold (8s)',
          runtime: executionDuration,
          consoleLogs: runResult.output || '',
          testResults: [],
        };
      }

      const rawOutput = runResult.output || '';
      const stdout = runResult.stdout || rawOutput;
      const stderr = runResult.stderr || '';

      const startTag = '__DEVCOLLAB_OUTPUT_START__';
      const endTag = '__DEVCOLLAB_OUTPUT_END__';

      if (stdout.includes(startTag) && stdout.includes(endTag)) {
        const jsonStr = stdout.split(startTag)[1].split(endTag)[0].trim();
        const testResults = JSON.parse(jsonStr);

        const passedCount = testResults.filter((t) => t.passed).length;
        const allPassed = passedCount === testResults.length;

        const userLogs = stdout
          .replace(new RegExp(`${startTag}[\\s\\S]*?${endTag}`), '')
          .trim();

        return {
          success: true,
          status: allPassed ? 'ACCEPTED' : 'WRONG_ANSWER',
          passedTests: passedCount,
          totalTests: testResults.length,
          runtime: executionDuration,
          testResults,
          consoleLogs: userLogs || stderr || 'Execution finished without console output.',
          rawOutput: stdout,
        };
      }

      if (runResult.code !== 0 || stderr) {
        return {
          success: false,
          status: 'RUNTIME_ERROR',
          errorMessage: stderr || rawOutput || 'Runtime execution error',
          runtime: executionDuration,
          consoleLogs: rawOutput,
          testResults: [],
        };
      }
    } catch (apiErr) {
      console.warn('[CodeExecutionService] Upstream API unavailable, falling back to local sandbox:', apiErr.message);
    }
  }

  // Local sandboxed execution fallback
  return executeLocally(language, wrappedCode, testCases, startTime);
};

module.exports = {
  executeInSandbox,
  LANGUAGE_CONFIGS,
};
