/**
 * 적절한 위치에 삽입 한다
 * 두 번쨰부터 시작한다
 */
function 삽입정렬() {
  const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  for(let i=1; i<array.length; i++) {
    for(let j=0; j<i; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      // console.log('array', array);
    }
  }

  console.log('array', array);
}

삽입정렬();