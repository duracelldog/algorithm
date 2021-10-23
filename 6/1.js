function 선택정렬() {
  const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  array.forEach((val1, min_index) => {
    array.forEach((val2, target_index) => {
      if (target_index > min_index) {
        if (array[min_index] > array[target_index]) {
          let temp = array[min_index];

          array[min_index] = array[target_index];
          array[target_index] = temp;
        }
      }
    });
  });

  console.log('array', array);
}

선택정렬();