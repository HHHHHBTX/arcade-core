# Arcade Core

A lightweight, reusable JavaScript library providing the core game logic for the classic 2048 puzzle game.

Developed by Hang Liu for CS5610 Web Development — Project 2 at Northeastern University.

## Features

- Move tiles in four directions: up, down, left, and right.
- Merge matching tiles according to 2048 game rules.
- Prevent tiles from merging more than once per move.
- Spawn new tiles (2 or 4) in empty positions.
- Check whether a move is valid.
- Detect when no moves remain.
- Provide pure game logic without Svelte or DOM dependencies.
- Support automated testing using Node.js.

## Installation

Install the published package from npm:

```bash
npm install @hhhhhbtx/arcade-core
```

npm package: https://www.npmjs.com/package/@hhhhhbtx/arcade-core

## Usage

Import the four public functions:

```javascript
import {
  move,
  spawn,
  canMove,
  hasMoves
} from '@hhhhhbtx/arcade-core';

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

## API Reference

### `move(board, direction)`

Returns a new board after sliding and merging tiles in the specified direction.

Supported directions:

- `left`
- `right`
- `up`
- `down`

Matching tiles merge into a single tile with twice the value. Each tile can merge only once per move.

### `spawn(board, rng)`

Returns a new board with a randomly generated tile placed in an empty position.

- New tiles have a value of 2 or 4.
- The original board is not modified.
- The optional `rng` parameter allows deterministic random behavior for testing.

### `canMove(board, direction)`

Returns `true` if moving in the specified direction would change the board.

Returns `false` if no tiles would move or merge.

### `hasMoves(board)`

Returns `true` if at least one valid move remains.

Returns `false` when the board has no available moves.

## Internal Logic: `fuseQuartz`

The library includes an internal helper function named `fuseQuartz`.

This function handles merging tiles within a single row during a move.

It ensures that:

- Matching tiles merge correctly.
- Each tile merges at most once per move.
- Empty spaces are handled properly.
- The 2048 movement rules remain consistent.

The helper is used internally by `move()` and is not part of the public API.

## Testing

The project includes automated tests in `index.test.js` using the built-in Node.js test runner.

To run the tests locally:

```bash
npm install
npm test
```

The tests cover core movement, spawning, move validation, and game-over detection.

## Version History

The package has been published to the public npm registry.

- **1.0.0** — Initial published version of the 2048 game logic.
- **1.0.1** — Subsequent published version.

See `CHANGELOG.md` for documented changes.

## Project Structure

```text
arcade-core/
├── index.js
├── index.test.js
├── package.json
├── package-lock.json
├── README.md
├── CHANGELOG.md
└── .gitignore
```

## Related Project

This library powers the 2048 game in Hang Liu's SvelteKit Arcade application.

- Live Website: https://arcade-hhhhhbtx.vercel.app/
- Arcade GitHub: https://github.com/HHHHHBTX/arcade
- Arcade Core GitHub: https://github.com/HHHHHBTX/arcade-core
- npm Package: https://www.npmjs.com/package/@hhhhhbtx/arcade-core

## Author

Hang Liu
CS5610 — Web Development
Northeastern University

## License

ISC