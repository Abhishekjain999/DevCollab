const arrays = require('./arrays');
const strings = require('./strings');
const dp = require('./dp');
const graphs = require('./graphs');
const trees = require('./trees');
const hashmap = require('./hashmap');
const slidingWindow = require('./slidingWindow');

const allProblems = [
  ...arrays,
  ...strings,
  ...dp,
  ...graphs,
  ...trees,
  ...hashmap,
  ...slidingWindow,
];

const categoryCounts = {
  Arrays: arrays.length,
  Strings: strings.length,
  'Dynamic Programming': dp.length,
  Graphs: graphs.length,
  Trees: trees.length,
  'HashMap / HashSet': hashmap.length,
  'Sliding Window': slidingWindow.length,
};

module.exports = {
  allProblems,
  categoryCounts,
  arrays,
  strings,
  dp,
  graphs,
  trees,
  hashmap,
  slidingWindow,
};
