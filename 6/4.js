function 퀵정렬() {
  const array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

  const quick_sort = (array, start, end) => {
    // const pivot = start;
    let left = start + 1;
    let right = end;

    if (start > end) {
      return;
    }

    // 교차되는 순간 끝난다
    while(left <= right) {

      // 왼쪽에서부터 피벗보다 큰 데이터를 선택한다
      while(left <= end && array[left] <= array[start]) {
        left += 1;
      }

      // 오른쪽에서부터 피벗보다 작은 데이터를 선택한다
      while(right > start && array[right] >= array[start]) {
        right -= 1;
      }

      if (left <= right) { // 엇갈리지 않는 정상적인 경우 left와 right를 서로 위치를 바꾼다
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
      } else { // 데이터가 엇갈리는 경우 작은데이터와 피벗의 위치를 바꾼다
        const temp = array[right];
        array[right] = array[start];
        array[start] = temp;
      }
    }

    quick_sort(array, start, right - 1);
    quick_sort(array, right + 1, end);
  }

  quick_sort(array, 0, array.length - 1);

  console.log('array', array);
}

퀵정렬();