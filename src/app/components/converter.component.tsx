"use client";
import "../styles/convertor.css";
import { useEffect, useState, useRef } from "react";
import { Currency } from "../models/currency";

export default function Converter() {
  const getCurrencies = () => {
    return fetch(
      "https://api.fastforex.io/fetch-multi?from=USD&to=USD,RUB,EUR,UZS,CNY,JPY,KZT,TJS&api_key=632a2646ba-d39ea6c572-s3stj3"
    ).then((res) => res.json());
  };

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1.0);
  const [result, setResult] = useState(0.0);
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
    }
    fetchData();
  }, []);

  useEffect(() => {
    dataKeys.current = Object.keys(initialState?.results || {});
    optionList.current = dataKeys.current.map((ky) => (
      <option key={ky}>{ky}</option>
    ));
  }, [initialState]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const result =
      (amount * initialState?.results[to]!) / initialState?.results[from]!;
    setResult(Number(result.toFixed(2)));
  };

  const handleFrom = (event: any) => {
    setResult(0.0);
    setFrom(event.target.value);
  };

  const handleTo = (event: any) => {
    setResult(0.0);
    setTo(event.target.value);
  };

  const handleAmount = (event: any) => {
    setResult(0.0);
    setAmount(event.target.value);
  };

  return (
    <div id="ict1">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <div>
                <label htmlFor="from">From</label>
                <select
                  onChange={handleFrom}
                  name="from"
                  id="from"
                  required
                  value={from}
                >
                  {optionList.current}
                </select>
              </div>
              <div>
                <label htmlFor="to">To</label>
                <select
                  onChange={handleTo}
                  name="to"
                  id="to"
                  required
                  value={to}
                >
                  {optionList.current}
                </select>
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <input
                  onChange={handleAmount}
                  defaultValue={amount}
                  required
                  type="number"
                  step={0.01}
                  id="amount"
                />
              </div>
              <div>
                <button type="submit">Convert</button>
              </div>
            </div>
            <div
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "large",
              }}
            >
              {result ? `${amount} ${from} = ${result} ${to}` : ""}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
