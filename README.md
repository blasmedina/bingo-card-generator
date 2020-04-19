# Bingo Card Generator

## Create PaperBroard

```typescript
// src/index.ts
import { createPaperboard } from './libs/bingo';

const { paperboardHash, paperboardSummary, paperboard } = createPaperboard();
```

```json
{
  "paperboardHash": "58e59b684c136fdf306dd42769b6bc19",
  "paperboardSummary": [
    [1, 11, 25, 37, 84],
    [2, 10, 48, 59, 77],
    [34, 47, 57, 67, 86]
  ],
  "paperboard": [
    [1, 11, 25, 37, null, null, null, null, 84],
    [2, 10, null, null, 48, 59, null, 77, null],
    [null, null, null, 34, 47, 57, 67, null, 86]
  ]
}
```

```
┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │  3   │  4   │  5   │  6   │  7   │  8   │
├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│    0    │  1   │  11  │  25  │  37  │ null │ null │ null │ null │  84  │
│    1    │  2   │  10  │ null │ null │  48  │  59  │ null │  77  │ null │
│    2    │ null │ null │ null │  34  │  47  │  57  │  67  │ null │  86  │
└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘
```
