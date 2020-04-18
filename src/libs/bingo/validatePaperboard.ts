import config from 'config';
import { ListNumbers, Results } from './types';
import { intersection, numberSort } from '../../helpers/array';

const gameReset: number = config.get('bingo.games.reset');
const maxLines: number = config.get('bingo.games.max_lines');
const minLines: number = config.get('bingo.games.min_lines');

export function validatePaperboard(drawNumber: ListNumbers, paperboardSummary: any) {
  let lines = gameReset;
  paperboardSummary.map((pivot: any) => {
    const validation = intersection(drawNumber, pivot);
    numberSort(validation);
    numberSort(pivot);
    if (JSON.stringify(validation) === JSON.stringify(pivot)) {
      lines++;
    }
  });

  if (lines === gameReset) {
    return Results.WITHOUT_RESULT;
  } else {
    if (lines === minLines) {
      return Results.LINE;
    } else if (lines === maxLines) {
      return Results.BINGO;
    } else {
      return Results.NOT_VALID;
    }
  }
}
