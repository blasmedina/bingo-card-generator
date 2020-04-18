import config from 'config';
import { ListNumbers } from './types';

const min: number = config.get('bingo.min');
const max: number = config.get('bingo.max');

export function initBingo() {
  const raffle: ListNumbers = [];
  const drawsNumbers: ListNumbers = [];

  for (let number = min; number <= max; number++) {
    raffle.push(number);
  }

  return { raffle, drawsNumbers };
}
