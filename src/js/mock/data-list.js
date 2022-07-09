import { chunk } from '../../utils/lodash.js';

const mock = [
  { x: 3, y: 12, r: 4 },
  { x: 6, y: 10, r: 8 },
  { x: 4.5, y: 3, r: 13 },
  { x: 1.5, y: 5, r: 4 },
  { x: 3.5, y: 2, r: 4 },
  { x: 3, y: 3, r: 4 },
  { x: 13, y: 12, r: 4 },
  { x: 16, y: 10, r: 8 },
  { x: 14.5, y: 3, r: 13 },
  { x: 11.5, y: 5, r: 4 },
  { x: 13.5, y: 2, r: 4 },
  { x: 13, y: 3, r: 4 },
];

export default mock;

export const _chunk = chunk;

export const chunkedBy = (size = 1) => chunk(mock, size);

export const withoutX = () => mock.map(({ y, r }) => ({ y, r }));

export const withYOnly = () => mock.map(({ y }) => y);
