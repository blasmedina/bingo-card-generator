import config from 'config';
import paperboardTesting from './dummys/paperbroadTesting.json';
import { Md5 } from 'md5-typescript';
import { Paperboard, Row, ListNumbers, PaperbroadMap, PaperboardPattern } from './types';
import { getRandomInt } from '../../helpers/random';
import { shuffeArray, transponerArray } from '../../helpers/array';

const paperboardMap: PaperbroadMap[] = config.get('bingo.paperbroard.maps');
const paperboardPatterns: PaperboardPattern[] = config.get('bingo.paperbroard.patterns');
const amountPatrones = paperboardPatterns.length;

export function createPaperboard(testing: boolean = false) {
  if (testing) {
    return paperboardTesting;
  }

  const randomPatron = getRandomInt(0, amountPatrones);
  const paperboardPattern: PaperboardPattern[] = shuffeArray(paperboardPatterns[randomPatron]);
  const empty: null = null;

  let paperboardNumbers: ListNumbers = [];
  let paperboard: Paperboard = [];

  paperboardPattern.map((pattern, index) => {
    const { min, max } = paperboardMap[index];
    const sum = pattern.reduce((accumulated: number, currentValue) => accumulated + currentValue, 0);
    const listNumbers: ListNumbers = [];

    for (let index = min; index <= max; index++) {
      listNumbers.push(index);
    }

    const rowNumbers: number[] = sum >= 1 ? shuffeArray(listNumbers).slice(0, sum) : [];
    paperboardNumbers = paperboardNumbers.concat(rowNumbers);

    const row: Row = pattern.map((value) => (Boolean(value) ? rowNumbers.pop() || empty : empty));
    paperboard.push(row);
  });

  paperboard = transponerArray(paperboard);
  paperboardNumbers.sort((a, b) => a - b);
  const paperboardHash = Md5.init(paperboardNumbers.join(','));
  const paperboardSummary = paperboard.map((row) => row.filter((value) => value !== empty));

  return {
    paperboardHash,
    // paperboardNumbers,
    paperboardSummary,
    paperboard,
  };
}
