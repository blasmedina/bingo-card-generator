export function transponerArray(a: any[]) {
  return a.reduce(($, row) => row.map((_: any, i: number) => [...($[i] || []), row[i]]), []);
}
