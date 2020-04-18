import { initBingo, drawNumber, createPaperboard, validatePaperboard, Results } from './libs/bingo';

const { raffle, drawsNumbers } = initBingo();
const { paperboardHash, paperboardSummary, paperboard } = createPaperboard();
let result: string = '';
let previousResult: string = '';

console.debug('paperboardHash', paperboardHash);
console.table(paperboard);

console.debug(' START OF THE GAME ');
do {
  const { numberDrawn } = drawNumber(raffle);
  if (typeof numberDrawn === 'number') {
    drawsNumbers.push(numberDrawn);
    result = validatePaperboard(drawsNumbers, paperboardSummary);
    if (result !== previousResult && result !== Results.WITHOUT_RESULT && result !== Results.NOT_VALID) {
      console.debug('#', drawsNumbers.length, result);
      previousResult = result;
    }
  }
} while (result !== Results.BINGO);
console.debug(' END OF THE GAME ');
console.debug('drawsNumbers', drawsNumbers.join(', '));
