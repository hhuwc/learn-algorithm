class Solution {
  public boolean isValid(String s) {
    if (s == null || s == "")
      return false;

    LinkedList<Character> list = new LinkedList<>();
    char[] codes = s.toCharArray();
    for (int i = 0; i < codes.length; i++) {
      if (codes[i] == Token.LEFT_BIG_PARANTHESE || codes[i] == Token.LEFT_PARENTHESE
          || codes[i] == Token.LEFT_SQUARE_BRACKET) {
        list.push(codes[i]);
      } else if (codes[i] == Token.RIGHT_BIG_PARANTHESE || codes[i] == Token.RIGHT_PARENTHESE
          || codes[i] == Token.RIGHT_SQUARE_BRACKET) {
        if (list.isEmpty()) {
          return false;
        } else {
          char c = list.pop();
          if (c == Token.LEFT_BIG_PARANTHESE && codes[i] != Token.RIGHT_BIG_PARANTHESE)
            return false;
          if (c == Token.LEFT_PARENTHESE && codes[i] != Token.RIGHT_PARENTHESE)
            return false;
          if (c == Token.LEFT_SQUARE_BRACKET && codes[i] != Token.RIGHT_SQUARE_BRACKET)
            return false;
        }
      }

    }

    // 还有剩余括号
    if (!list.isEmpty()) {
      return false;
    }

    return true;
  }

  private static class Token {

    static final char LEFT_PARENTHESE = '(';
    static final char RIGHT_PARENTHESE = ')';
    static final char LEFT_SQUARE_BRACKET = '[';
    static final char RIGHT_SQUARE_BRACKET = ']';
    static final char LEFT_BIG_PARANTHESE = '{';
    static final char RIGHT_BIG_PARANTHESE = '}';

  }
  //解法1  本问题的核心就在于 括号匹配 我这里用的是 比较烂的匹配方式  

  //解法2  用HashMap 构造成对括号匹配表
}