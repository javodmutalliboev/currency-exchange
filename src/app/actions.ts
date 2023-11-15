"use client";

import { Currency } from "./models/currency";

let currencyData: Currency = {
  meta: { last_updated_at: "" },
  data: {},
};

export function create(cData: Currency) {
  currencyData = cData;
}

export function read(): Currency | null {
  if (currencyData) {
    return currencyData;
  }
  return null;
}
