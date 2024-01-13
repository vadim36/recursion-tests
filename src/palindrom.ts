function isPalindrom(word:string, index:number = 0):boolean {
  if (typeof word !== 'string') return false;
  if (index === Math.floor(word.length / 2)) return true;
  if (word[index] !== word[word.length - index - 1]) return false;
  return isPalindrom(word, index + 1);
}

module.exports = isPalindrom;