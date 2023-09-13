function HasBalancedBrackets(string) {
  const stack = [];
  const openBrackets = { "(": true, "[": true, "{": true };
  const closedBrackets = { ")": "(", "]": "[", "}": "{" };
  for (let i = 0; i < string.length; i++) {
    if (openBrackets[string[i]]) {
      stack.push(string[i]);
    } else if (closedBrackets[string[i]]) {
      if (stack.pop() !== closedBrackets[string[i]]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = HasBalancedBrackets;
