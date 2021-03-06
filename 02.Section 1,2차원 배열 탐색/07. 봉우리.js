// 07. 봉우리

// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명
// 봉우리의 개수를 출력하세요.
// ▣ 입력예제 1 5
// 53723
// 37161
// 72534
// 43641
// 87352
// ▣ 출력예제 1 10

function solution1(matrix) {
  let answer = 0;

  matrix.push(new Array(matrix.length + 2).fill(0));
  matrix.unshift(new Array(matrix.length + 1).fill(0));
  for (let i = 1; i < matrix.length - 1; i++) {
    matrix[i].unshift(0);
    matrix[i].push(0);
  }

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix.length - 1; j++) {
      // 타겟의 위치에서 위아래양옆보다 크다면 봉우리 count++
      let target = matrix[i][j];
      let left = matrix[i - 1][j];
      let right = matrix[i + 1][j];
      let up = matrix[i][j - 1];
      let down = matrix[i][j + 1];
      if (target > left && target > right && target > up && target > down) {
        answer++;
      }
    }
  }

  return answer;
}

let matrix1 = [
  [5, 3, 7, 2, 3, 1],
  [3, 7, 1, 6, 1, 3],
  [7, 2, 5, 3, 4, 7],
  [4, 3, 6, 4, 1, 3],
  [8, 7, 3, 5, 2, 4],
  [7, 3, 9, 5, 3, 7],
];

console.time("solution1");
console.log(solution1(matrix1));
console.timeEnd("solution1");

function solution2(matrix) {
  let answer = 0;
  let len = matrix.length;

  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let result;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        // nx, ny는 minus 값이 될 수 있는데 이상태로 돌리면 undefinde와 비교를 해야 하므로 작동이 안됨!!!!!!!
        // => undefined를 제외 하고 돌리는 방향으로 진행!!
        if (
          nx >= 0 &&
          nx < len &&
          ny >= 0 &&
          ny < len &&
          matrix[i][j] > matrix[nx][ny]
        ) {
          result = true;
        } else {
          result = false;
        }
      }
      if (result) answer++;
    }
  }
  return answer;
}

matrix2 = [
  [5, 3, 7, 2, 3, 1],
  [3, 7, 1, 6, 1, 3],
  [7, 2, 5, 3, 4, 7],
  [4, 3, 6, 4, 1, 3],
  [8, 7, 3, 5, 2, 4],
  [7, 3, 9, 5, 3, 7],
];

console.time("solution2");
console.log(solution2(matrix2));
console.timeEnd("solution2");
