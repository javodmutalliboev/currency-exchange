"use client";
import "../styles/currencies.css";
import { useEffect, useState } from "react";
import { Currency } from "../models/currency";

export default function Page() {
  let initialState: Currency = {
    meta: {
      last_updated_at: "2023-11-13T23:59:59Z",
    },
    data: {
      ADA: {
        code: "ADA",
        value: 2.7967939065,
      },
      AED: {
        code: "AED",
        value: 3.6722905341,
      },
      AFN: {
        code: "AFN",
        value: 69.6242218015,
      },
      ALL: {
        code: "ALL",
        value: 97.2794882519,
      },
      AMD: {
        code: "AMD",
        value: 401.1937921501,
      },
      ANG: {
        code: "ANG",
        value: 1.7853502965,
      },
      AOA: {
        code: "AOA",
        value: 824.0248478962,
      },
      ARB: {
        code: "ARB",
        value: 0.8943348662,
      },
      ARS: {
        code: "ARS",
        value: 349.9507910979,
      },
      AUD: {
        code: "AUD",
        value: 1.5673802912,
      },
      AVAX: {
        code: "AVAX",
        value: 0.0618048572,
      },
      AWG: {
        code: "AWG",
        value: 1.79,
      },
      AZN: {
        code: "AZN",
        value: 1.7,
      },
      BAM: {
        code: "BAM",
        value: 1.8298701846,
      },
      BBD: {
        code: "BBD",
        value: 2,
      },
      BDT: {
        code: "BDT",
        value: 110.5613033217,
      },
      BGN: {
        code: "BGN",
        value: 1.822850191,
      },
      BHD: {
        code: "BHD",
        value: 0.376,
      },
      BIF: {
        code: "BIF",
        value: 2840.1641214901,
      },
      BMD: {
        code: "BMD",
        value: 1,
      },
      BNB: {
        code: "BNB",
        value: 0.0041367243,
      },
      BND: {
        code: "BND",
        value: 1.3576202313,
      },
      BOB: {
        code: "BOB",
        value: 6.9206612042,
      },
      BRL: {
        code: "BRL",
        value: 4.906430674,
      },
      BSD: {
        code: "BSD",
        value: 1,
      },
      BTC: {
        code: "BTC",
        value: 0.000027351,
      },
      BTN: {
        code: "BTN",
        value: 83.2444519741,
      },
      BUSD: {
        code: "BUSD",
        value: 0.9988962998,
      },
      BWP: {
        code: "BWP",
        value: 13.6208822847,
      },
      BYN: {
        code: "BYN",
        value: 3.2997583539,
      },
      BYR: {
        code: "BYR",
        value: 32997.600246275,
      },
      BZD: {
        code: "BZD",
        value: 2,
      },
      CAD: {
        code: "CAD",
        value: 1.3801102641,
      },
      CDF: {
        code: "CDF",
        value: 2480.3068874045,
      },
      CHF: {
        code: "CHF",
        value: 0.9013301534,
      },
      CLF: {
        code: "CLF",
        value: 0.0249000036,
      },
      CLP: {
        code: "CLP",
        value: 923.1886016433,
      },
      CNY: {
        code: "CNY",
        value: 7.2846712086,
      },
      COP: {
        code: "COP",
        value: 4022.043382452,
      },
      CRC: {
        code: "CRC",
        value: 531.6700125188,
      },
      CUC: {
        code: "CUC",
        value: 1,
      },
      CUP: {
        code: "CUP",
        value: 24,
      },
      CVE: {
        code: "CVE",
        value: 103.0413761784,
      },
      CZK: {
        code: "CZK",
        value: 22.9280944313,
      },
      DAI: {
        code: "DAI",
        value: 1.0004963169,
      },
      DJF: {
        code: "DJF",
        value: 177.721,
      },
      DKK: {
        code: "DKK",
        value: 6.9687508289,
      },
      DOP: {
        code: "DOP",
        value: 56.7962793367,
      },
      DOT: {
        code: "DOT",
        value: 0.1866564961,
      },
      DZD: {
        code: "DZD",
        value: 135.1209813898,
      },
      EGP: {
        code: "EGP",
        value: 30.8909935105,
      },
      ERN: {
        code: "ERN",
        value: 15,
      },
      ETB: {
        code: "ETB",
        value: 55.7851899021,
      },
      ETH: {
        code: "ETH",
        value: 0.0004861675,
      },
      EUR: {
        code: "EUR",
        value: 0.9344000975,
      },
      FJD: {
        code: "FJD",
        value: 2.3058103309,
      },
      FKP: {
        code: "FKP",
        value: 0.8143137399,
      },
      GBP: {
        code: "GBP",
        value: 0.8142901153,
      },
      GEL: {
        code: "GEL",
        value: 2.6901603815,
      },
      GGP: {
        code: "GGP",
        value: 0.8143135066,
      },
      GHS: {
        code: "GHS",
        value: 11.8966322244,
      },
      GIP: {
        code: "GIP",
        value: 0.8143139157,
      },
      GMD: {
        code: "GMD",
        value: 60.3175011229,
      },
      GNF: {
        code: "GNF",
        value: 8543.7324766397,
      },
      GTQ: {
        code: "GTQ",
        value: 7.813230818,
      },
      GYD: {
        code: "GYD",
        value: 210.8161811436,
      },
      HKD: {
        code: "HKD",
        value: 7.8061711449,
      },
      HNL: {
        code: "HNL",
        value: 24.6794625058,
      },
      HRK: {
        code: "HRK",
        value: 7.0420309846,
      },
      HTG: {
        code: "HTG",
        value: 133.4272718456,
      },
      HUF: {
        code: "HUF",
        value: 352.2902176188,
      },
      IDR: {
        code: "IDR",
        value: 15674.597591055,
      },
      ILS: {
        code: "ILS",
        value: 3.8550206259,
      },
      IMP: {
        code: "IMP",
        value: 0.8143140337,
      },
      INR: {
        code: "INR",
        value: 83.1011429804,
      },
      IQD: {
        code: "IQD",
        value: 1307.3442439662,
      },
      IRR: {
        code: "IRR",
        value: 41987.270391796,
      },
      ISK: {
        code: "ISK",
        value: 143.6408533518,
      },
      JEP: {
        code: "JEP",
        value: 0.8143135648,
      },
      JMD: {
        code: "JMD",
        value: 155.434156791,
      },
      JOD: {
        code: "JOD",
        value: 0.71,
      },
      JPY: {
        code: "JPY",
        value: 151.6192301504,
      },
      KES: {
        code: "KES",
        value: 151.8943159813,
      },
      KGS: {
        code: "KGS",
        value: 89.0022690288,
      },
      KHR: {
        code: "KHR",
        value: 4107.0547259111,
      },
      KMF: {
        code: "KMF",
        value: 461.1659651016,
      },
      KPW: {
        code: "KPW",
        value: 899.9993579052,
      },
      KRW: {
        code: "KRW",
        value: 1316.9853607524,
      },
      KWD: {
        code: "KWD",
        value: 0.3086800411,
      },
      KYD: {
        code: "KYD",
        value: 0.83333,
      },
      KZT: {
        code: "KZT",
        value: 464.3555027524,
      },
      LAK: {
        code: "LAK",
        value: 20763.396086435,
      },
      LBP: {
        code: "LBP",
        value: 15005.98672579,
      },
      LKR: {
        code: "LKR",
        value: 325.4130931336,
      },
      LRD: {
        code: "LRD",
        value: 187.7596850716,
      },
      LSL: {
        code: "LSL",
        value: 20.0184838766,
      },
      LTC: {
        code: "LTC",
        value: 0.0140072722,
      },
      LTL: {
        code: "LTL",
        value: 3.2265508616,
      },
      LVL: {
        code: "LVL",
        value: 0.6567483497,
      },
      LYD: {
        code: "LYD",
        value: 4.8695808856,
      },
      MAD: {
        code: "MAD",
        value: 10.1958419661,
      },
      MATIC: {
        code: "MATIC",
        value: 1.1330781384,
      },
      MDL: {
        code: "MDL",
        value: 17.8633121296,
      },
      MGA: {
        code: "MGA",
        value: 4500.9901360454,
      },
      MKD: {
        code: "MKD",
        value: 57.6591011954,
      },
      MMK: {
        code: "MMK",
        value: 2093.9281623785,
      },
      MNT: {
        code: "MNT",
        value: 3450.2007011864,
      },
      MOP: {
        code: "MOP",
        value: 7.9723209288,
      },
      MRO: {
        code: "MRO",
        value: 356.999828,
      },
      MUR: {
        code: "MUR",
        value: 44.1880355333,
      },
      MVR: {
        code: "MVR",
        value: 15.4459429993,
      },
      MWK: {
        code: "MWK",
        value: 1679.3018398924,
      },
      MXN: {
        code: "MXN",
        value: 17.6095023419,
      },
      MYR: {
        code: "MYR",
        value: 4.7053106386,
      },
      MZN: {
        code: "MZN",
        value: 63.6596508128,
      },
      NAD: {
        code: "NAD",
        value: 18.6603425392,
      },
      NGN: {
        code: "NGN",
        value: 803.5536227418,
      },
      NIO: {
        code: "NIO",
        value: 36.5911282973,
      },
      NOK: {
        code: "NOK",
        value: 11.0796616424,
      },
      NPR: {
        code: "NPR",
        value: 132.8882158966,
      },
      NZD: {
        code: "NZD",
        value: 1.699870288,
      },
      OMR: {
        code: "OMR",
        value: 0.3838600407,
      },
      OP: {
        code: "OP",
        value: 0.5580799147,
      },
      PAB: {
        code: "PAB",
        value: 0.9990201135,
      },
      PEN: {
        code: "PEN",
        value: 3.8106106593,
      },
      PGK: {
        code: "PGK",
        value: 3.6788506277,
      },
      PHP: {
        code: "PHP",
        value: 56.0213263328,
      },
      PKR: {
        code: "PKR",
        value: 287.2296075157,
      },
      PLN: {
        code: "PLN",
        value: 4.13305047,
      },
      PYG: {
        code: "PYG",
        value: 7459.7879021648,
      },
      QAR: {
        code: "QAR",
        value: 3.6381005155,
      },
      RON: {
        code: "RON",
        value: 4.6459604944,
      },
      RSD: {
        code: "RSD",
        value: 108.7022896087,
      },
      RUB: {
        code: "RUB",
        value: 91.4736249703,
      },
      RWF: {
        code: "RWF",
        value: 1230.5082500917,
      },
      SAR: {
        code: "SAR",
        value: 3.745230734,
      },
      SBD: {
        code: "SBD",
        value: 8.4488478236,
      },
      SCR: {
        code: "SCR",
        value: 14.6968015871,
      },
      SDG: {
        code: "SDG",
        value: 601.5,
      },
      SEK: {
        code: "SEK",
        value: 10.833751981,
      },
      SGD: {
        code: "SGD",
        value: 1.3583801457,
      },
      SHP: {
        code: "SHP",
        value: 0.8142901422,
      },
      SLL: {
        code: "SLL",
        value: 22267.544670897,
      },
      SOL: {
        code: "SOL",
        value: 0.0192867966,
      },
      SOS: {
        code: "SOS",
        value: 571.0139432694,
      },
      SRD: {
        code: "SRD",
        value: 37.8789547407,
      },
      STD: {
        code: "STD",
        value: 23044.927553591,
      },
      SVC: {
        code: "SVC",
        value: 8.75,
      },
      SYP: {
        code: "SYP",
        value: 13001.885164431,
      },
      SZL: {
        code: "SZL",
        value: 18.6749934746,
      },
      THB: {
        code: "THB",
        value: 35.9846846568,
      },
      TJS: {
        code: "TJS",
        value: 10.9049221149,
      },
      TMT: {
        code: "TMT",
        value: 3.5,
      },
      TND: {
        code: "TND",
        value: 3.1441306001,
      },
      TOP: {
        code: "TOP",
        value: 2.373140435,
      },
      TRY: {
        code: "TRY",
        value: 28.5978853677,
      },
      TTD: {
        code: "TTD",
        value: 6.7381513046,
      },
      TWD: {
        code: "TWD",
        value: 32.2950636646,
      },
      TZS: {
        code: "TZS",
        value: 2501.7552423908,
      },
      UAH: {
        code: "UAH",
        value: 36.6739755623,
      },
      UGX: {
        code: "UGX",
        value: 3764.916063357,
      },
      USD: {
        code: "USD",
        value: 1,
      },
      USDC: {
        code: "USDC",
        value: 1.0006400249,
      },
      USDT: {
        code: "USDT",
        value: 0.9997317734,
      },
      UYU: {
        code: "UYU",
        value: 39.831614961,
      },
      UZS: {
        code: "UZS",
        value: 12279.676493664,
      },
      VEF: {
        code: "VEF",
        value: 3529848.3230964,
      },
      VND: {
        code: "VND",
        value: 24366.366855455,
      },
      VUV: {
        code: "VUV",
        value: 122.3832374241,
      },
      WST: {
        code: "WST",
        value: 2.7567243528,
      },
      XAF: {
        code: "XAF",
        value: 612.865827704,
      },
      XAG: {
        code: "XAG",
        value: 0.0447693782,
      },
      XAU: {
        code: "XAU",
        value: 0.0005137473,
      },
      XCD: {
        code: "XCD",
        value: 2.7,
      },
      XDR: {
        code: "XDR",
        value: 0.7583901514,
      },
      XOF: {
        code: "XOF",
        value: 612.8658305216,
      },
      XPD: {
        code: "XPD",
        value: 0.0010151568,
      },
      XPF: {
        code: "XPF",
        value: 111.4024592499,
      },
      XPT: {
        code: "XPT",
        value: 0.0011533601,
      },
      XRP: {
        code: "XRP",
        value: 1.4864856391,
      },
      YER: {
        code: "YER",
        value: 249.6999661017,
      },
      ZAR: {
        code: "ZAR",
        value: 18.681513276,
      },
      ZMK: {
        code: "ZMK",
        value: 9001.2,
      },
      ZMW: {
        code: "ZMW",
        value: 22.9486126549,
      },
      ZWL: {
        code: "ZWL",
        value: 5728.3419148679,
      },
    },
  };
  const dataKeys: string[] = Object.keys(initialState.data);
  const optionList = dataKeys.map((ky) => (
    <option selected={ky === "USD"} key={ky}>
      {ky}
    </option>
  ));
  const [state, setState] = useState(initialState);
  useEffect(() => {
    // getCurrencies().then((data) => console.log(data));
    console.log(initialState.data["USD"]);
  }, []);

  const getCurrencies = () => {
    return fetch(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_JWlD4emeZw0dtvM3lxRtWFBYocn9Rs5EcuSvj34k"
    ).then((res) => res.json());
  };

  return (
    <div id="ic1">
      <div style={{ textAlign: "center", fontSize: "22px" }}>Currencies</div>
      <div style={{ textAlign: "center", fontSize: "x-large" }}>
        Last updated at: {initialState.meta.last_updated_at}
      </div>
      <div id="ic2">
        <div>
          <select name="currency" id="currencySelect">
            {optionList}
          </select>
        </div>
        <div id="ic3"></div>
      </div>
    </div>
  );
}
