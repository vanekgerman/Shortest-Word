function findShortestWordLength(str) {
  var words = str.split(' ');
  var shortestLength = Infinity;

  for (var i = 0; i < words.length; i++) {
    var wordLength = words[i].length;
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }

  return shortestLength;
}
