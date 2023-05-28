"use client";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";

import styles from "./page.module.css";
import { Selector } from "./component/Selector.component";
import { getData } from "./api/getData";

type CurrencyType = {
  from: string;
  to: string;
};

export default function Home() {
  const [coinList, setCoinList] = useState<Array<string>>();
  const [currency, setCurrency] = useState<CurrencyType>();

  useEffect(() => {
    getData("https://api.binance.com/api/v1/exchangeInfo").then((data) => {
      setCoinList(data.symbols.map((item: any) => item.symbol));
    });
  }, []);

  const handleChange = (event: SelectChangeEvent<string>, label: string) => {
    const {
      target: { value },
    } = event;
    if (label === "From :") {
      setCurrency({ from: value, to: currency?.to || "" });
    } else if (label === "To :") {
      setCurrency({ from: currency?.from || "", to: value });
    }
  };

  return (
    <div className={styles.main}>
      <Selector
        label="From :"
        values={coinList || []}
        onChange={handleChange}
      />
      <Selector label="To :" values={coinList || []} onChange={handleChange} />
    </div>
  );
}
