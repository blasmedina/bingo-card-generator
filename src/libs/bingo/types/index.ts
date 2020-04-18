export type ListNumbers = number[];
export type Option = number | null;
export type Paperboard = Row[];
export type Row = Option[];

export type PaperbroadMap = {
  min: number;
  max: number;
};

export type PaperboardPattern = (0 | 1)[];

export enum Results {
  BINGO = 'bingo',
  LINE = 'linea',
  NOT_VALID = 'no valido',
  WITHOUT_RESULT = 'sin resultado',
}
