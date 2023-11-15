interface Currency {
  base: string;
  ms: number;
  results: {
    [key: string]: number;
  };
  updated: string;
}

export type { Currency };
