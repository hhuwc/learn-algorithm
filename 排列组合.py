# 排列 是讲究顺序的，不同的顺序算作不同的结果，比如 从m个玩具中挑选给n个孩子, 每人一个玩具
def permutation(array, n):
    res = []
    used = [False for _ in array]

    def _permutation(temp):
        if len(temp) == n:
            res.append(temp)
            return

        for index, value in enumerate(array):
            if not used[index]:
                used[index] = True
                _permutation([*temp, value])
                used[index] = False

    _permutation([])
    return res


# 组合 不讲究顺序 从m个玩具中挑选n个玩具给1个孩子
def combination(array, n):
    res = []

    def _combination(temp, start):
        if len(temp) == n:
            res.append(temp)
            return

        for index in range(start, len(array)):
            _combination([*temp, array[index]], index + 1)

    _combination([], 0)

    return res


array = [1, 2, 3, 4]

res = permutation(array, 2)

print('permutation', res)

res = combination(array, 2)

print('combination', res)
