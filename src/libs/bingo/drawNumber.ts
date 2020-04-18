import { ListNumbers } from './types';
import { shuffeArray } from '../../helpers/array';

export function drawNumber(raffle: ListNumbers) {
  shuffeArray(raffle);
  const numberDrawn = raffle.pop();
  return { numberDrawn };
}
