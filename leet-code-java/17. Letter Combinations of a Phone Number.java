class Solution {

  public static final String[] letterMap = { " ", // 0
      "", // 1
      "abc", // 2
      "def", // 3
      "ghi", // 4
      "jkl", // 5
      "mno", // 6
      "pqrs", // 7
      "tuv", // 8
      "wxyz" // 9
  };
  public static final char ZERO = '0';

  public List<String> combine(String digits, int start, int end) {

    if (start > end || end >= digits.length())
      return null;

    char c = digits.charAt(start);
    String s = letterMap[c - ZERO];
    String[] ss = s.split("");
    List<String> listFirst = new ArrayList<>();
    listFirst.addAll(Arrays.asList(ss));

    if (start == end) {
      return listFirst;
    } else {

      List<String> listRemain = combine(digits, start + 1, end);
      List<String> results = new ArrayList<>();

      for (String s1 : listFirst) {
        for (String s2 : listRemain) {
          results.add(s1 + s2);
        }
      }
      return results;
    }
  }

  public List<String> letterCombinations(String digits) {
    if (digits.length() == 0)
      return new ArrayList<String>();
    return combine(digits, 0, digits.length() - 1);
  }
}