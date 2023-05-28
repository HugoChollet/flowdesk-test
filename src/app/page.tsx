"use client";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

import styles from "./page.module.css";
import { Selector } from "./Selector.component";
import { COIN_LIST } from "./CoinListData";

type CurrencyType = {
  from: string;
  to: string;
};

export default function Home() {
  const [currency, setCurrency] = useState<CurrencyType>({ from: "", to: "" });

  const handleChange = (event: SelectChangeEvent<string>, label: string) => {
    const {
      target: { value },
    } = event;
    console.log(label, value);
    if (label === "From :") {
      setCurrency({ from: value, to: currency.to });
    } else if (label === "To :")
      setCurrency({ from: currency.from, to: value });
  };

  return (
    <div className={styles.main}>
      <Selector label="From :" values={COIN_LIST} onChange={handleChange} />
      <Selector label="To :" values={COIN_LIST} onChange={handleChange} />
    </div>
  );
}
