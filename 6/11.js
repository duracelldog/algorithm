const n = 2;
const list = {
  홍길동: 95,
  이순신: 77,
  도라지: 44,
  민들래: 78,
  도롱뇽: 77
}

// 도라지, 이순신, 홍길동

const result = Object.keys(list).sort((a, b) => list[a] - list[b]);

console.log('ddd', result)