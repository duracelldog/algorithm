function 새로운퀵정렬() {
  const array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

  const quick_sort = (array) => {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[0];
    const tail = array.filter(val => val !== pivot);

    const left_side = tail.filter(val => val <= pivot);
    const right_side = tail.filter(val => val > pivot);

    return [
      ...quick_sort(left_side),
      pivot,
      ...quick_sort(right_side)
    ]
  }

  const result = quick_sort(array);

  console.log('array', result);
}

새로운퀵정렬();