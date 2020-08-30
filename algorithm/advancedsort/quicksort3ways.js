
const swap = (arr, a, b) => {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
const partion = (arr, l, r) => {
  /*  let index = Math.floor(Math.random() * (r - l + 1) + l);
   //console.log(index);
   swap(index,l); */
  let v = arr[l];
  let lt = l;
  let gt = r + 1;

  for (let i = l + 1; i < gt;) {
    if (arr[i] == v) {
      i++;
    } else if (arr[i] > v) {
      swap(arr, gt - 1, i);
      gt--;
    } else {
      swap(arr, lt + 1, i);
      lt++;
      i++;
    }
  }

  swap(arr, l, lt);
  lt--;
  return [lt, gt];
}

export const quicksort = (arr, l, r) => {
  if (l >= r) {
    return;
  }
  let [lt, gt] = partion(arr, l, r);
  quicksort(arr, l, lt);
  quicksort(arr, gt, r);
}
