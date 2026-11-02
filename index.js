
function fuseQuartz(row) {
  const numbers = row.filter((number) => number !== 0);
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      result.push(numbers[i] * 2);
      i++;
    } else {
      result.push(numbers[i]);
    }
  }

  while (result.length < row.length) {
    result.push(0);
  }

  return result;
}

export function move(board, direction) {
  // Validate the movement direction
  const validDirections = ['left', 'right', 'up', 'down'];

  if (!validDirections.includes(direction)) {
    throw new RangeError(`Invalid direction: ${direction}`);
  }

  const size = board.length;
  const result = Array.from(
    { length: size },
    () => Array(size).fill(0)
  );

  for (let i = 0; i < size; i++) {
    const line = [];

    for (let j = 0; j < size; j++) {
      if (direction === 'left') {
        line.push(board[i][j]);
      } else if (direction === 'right') {
        line.push(board[i][size - 1 - j]);
      } else if (direction === 'up') {
        line.push(board[j][i]);
      } else if (direction === 'down') {
        line.push(board[size - 1 - j][i]);
      }
    }

    const merged = fuseQuartz(line);

    for (let j = 0; j < size; j++) {
      if (direction === 'left') {
        result[i][j] = merged[j];
      } else if (direction === 'right') {
        result[i][size - 1 - j] = merged[j];
      } else if (direction === 'up') {
        result[j][i] = merged[j];
      } else if (direction === 'down') {
        result[size - 1 - j][i] = merged[j];
      }
    }
  }

  return result;
}

export function spawn(board, rng = Math.random) {
  const emptyCells = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        emptyCells.push([row, col]);
      }
    }
  }

  const newBoard = board.map((row) => [...row]);

  if (emptyCells.length === 0) {
    return newBoard;
  }

  const randomIndex = Math.floor(rng() * emptyCells.length);
  const [row, col] = emptyCells[randomIndex];

  newBoard[row][col] = rng() < 0.9 ? 2 : 4;

  return newBoard;
}

export function canMove(board, direction) {
  const newBoard = move(board, direction);

  return JSON.stringify(board) !== JSON.stringify(newBoard);
}

export function hasMoves(board) {
  return (
    canMove(board, 'left') ||
    canMove(board, 'right') ||
    canMove(board, 'up') ||
    canMove(board, 'down')
  );
}
