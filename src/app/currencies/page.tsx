"use client";
import "../styles/currencies.css";
import { useEffect, useState, useRef } from "react";
import { Currency } from "../models/currency";

export default function Page() {
  const [initialState, setInitialSet] = useState<Currency>();
  const dataKeys = useRef(Object.keys(initialState?.results || {}));
  const optionList = useRef(
    dataKeys.current.map((ky) => <option key={ky}>{ky}</option>)
  );

  useEffect(() => {
    async function fetchData() {
      await getCurrencies().then((data) => {
        setInitialSet(data);
      });
      handleCurrencyChange({ target: { value: "USD" } });
    }
    fetchData();
  }, []);

  useEffect(() => {
    dataKeys.current = Object.keys(initialState?.results || {});
    optionList.current = dataKeys.current.map((ky) => (
      <option key={ky}>{ky}</option>
    ));
    handleCurrencyChange({ target: { value: "USD" } });
  }, [initialState]);

  const getCurrencies = () => {
    return fetch(
      "https://api.fastforex.io/fetch-multi?from=USD&to=USD,RUB,EUR,UZS,CNY,JPY,KZT,TJS&api_key=632a2646ba-d39ea6c572-s3stj3"
    ).then((res) => res.json());
  };

  const handleCurrencyChange = (e: any) => {
    selectResult.length = 0;
    selectResult.push(
      `1.00 ${e.target.value} = ${
        1 / initialState?.results[e.target.value]!
      } USD`
    );
    if (e.target.value !== "USD") {
      selectResult.push(
        `1.00 ${e.target.value} = ${
          initialState?.results[e.target.value]! /
          initialState?.results[e.target.value]!
        } ${e.target.value}`
      );
    }
    dataKeys.current.forEach((ky) => {
      if (ky !== "USD" && ky !== e.target.value) {
        selectResult.push(
          `1.00 ${e.target.value} = ${
            initialState?.results[ky]! / initialState?.results[e.target.value]!
          } ${ky}`
        );
      }
    });
    setResult(selectResult);
  };

  const selectResult: string[] = [];
  const [result, setResult] = useState(selectResult);

  return (
    <div id="ic1">
      <div style={{ textAlign: "center", fontSize: "22px" }}>Currencies</div>
      <div style={{ textAlign: "center", fontSize: "x-large" }}>
        Last updated at: {initialState?.updated}
      </div>
      <div id="ic2">
        <div style={{ display: "grid" }}>
          <label htmlFor="currencySelect">Base currency:</label>
          <select
            name="currency"
            id="currencySelect"
            onChange={handleCurrencyChange}
            defaultValue={"USD"}
          >
            {optionList.current}
          </select>
        </div>
        <div id="ic3">
          {result.map((item, index, array) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
