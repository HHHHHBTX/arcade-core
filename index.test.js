
import test from 'node:test';
import assert from 'node:assert/strict';
import { move, spawn, canMove, hasMoves } from './index.js';

test('move merges tiles correctly', () => {
  const board = [
    [2, 2, 2, 2],
    [4, 4, 8, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  const result = move(board, 'left');

  assert.deepEqual(result[0], [4, 4, 0, 0]);
  assert.deepEqual(result[1], [8, 8, 0, 0]);
});

test('spawn adds a tile without changing original board', () => {
  const board = Array.from(
    { length: 4 },
    () => [0, 0, 0, 0]
  );

  const result = spawn(board, () => 0);

  assert.equal(result[0][0], 2);
  assert.equal(board[0][0], 0);
});

test('canMove detects valid moves', () => {
  const board = [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  assert.equal(canMove(board, 'left'), false);
  assert.equal(canMove(board, 'right'), true);
});

test('hasMoves detects game over', () => {
  const board = [
    [2, 4, 2, 4],
    [4, 2, 4, 2],
    [2, 4, 2, 4],
    [4, 2, 4, 2]
  ];

  assert.equal(hasMoves(board), false);
});

test('move rejects invalid directions', () => {
  const board = [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  assert.throws(
    () => move(board, 'invalid'),
    RangeError
  );
});
