/*
    https://www.algoexpert.io/questions/Three%20Number%20Sort
    Space O(n)
    Time O(n + m)
*/
function threeNumberSort(array, order) {
  let map = {};

  for (let o of order) {
    map[o] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    let n = array[i];
    map[n]++;
  }

  let orderIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let num = order[orderIndex];

    array[i] = num;

    map[num]--;

    if (map[num] === 0) {
      orderIndex++;
    }

    if (map[num] < 0) {
      orderIndex++;
      i--;
    }
  }

  return array;
}

/*
    Space O(1)
    Time O(n)
*/
function threeNumberSort(array, order) {
  let orderIndex = order.length - 1;
  let indices = [0, array.length - 1];

  sort(...indices);

  orderIndex--;
  sort(...indices);

  orderIndex--;
  sort(...indices);

  return array;

  function sort(l, r) {
    let left = l;
    let right = r;

    while (left < right) {
      let orderNum = order[orderIndex];

      if (array[right] === orderNum) {
        right--;
        continue;
      }

      if (array[left] === orderNum) {
        array[left] = array[right];
        array[right] = orderNum;
        left++;
        right--;
      } else {
        left++;
      }
    }

    if (order[orderIndex] === array[right]) {
      right--;
    }

    indices = [0, right];
  }
}
