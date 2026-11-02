
# Arcade Core

A lightweight JavaScript library providing the core game logic for 2048.

## Features

- Move tiles in four directions
- Merge matching tiles
- Spawn new tiles
- Check whether a move is valid
- Detect when no moves remain
- Pure game logic without Svelte or DOM dependencies

## Installation

```bash
npm install @hhhhh btx/arcade-core
```

## Usage

```javascript
import { move, spawn, canMove, hasMoves } from '@yourname/arcade-core';

const board = [
  [2, 0, 2, 0],
  [4, 4, 0, 0],
  [2, 2, 2, 2],
  [0, 0, 0, 0]
];

const nextBoard = move(board, 'left');

console.log(nextBoard);
console.log(canMove(board, 'right'));
console.log(hasMoves(board));

const spawnedBoard = spawn(nextBoard);
console.log(spawnedBoard);
```

## API

### move(board, direction)

Returns a new board after sliding and merging tiles.

### spawn(board, rng)

Returns a new board with a randomly generated tile (2 or 4).

### canMove(board, direction)

Returns true if the move changes the board.

### hasMoves(board)

Returns true if at least one valid move remains.

## Internal Logic

The internal helper `fuseQuartz` handles merging a single row. Each tile can merge only once per move.

## License

ISC
