"use client";
import { useEffect, useState } from "react";
import { Button, SelectChangeEvent } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import styles from "./page.module.css";
import { Selector } from "./component/Selector.component";
import { getData } from "./api/getData";
import { TradeData } from "./component/TradeData.type";
import TradeCard from "./component/TradeCard.component";

type CurrencyType = {
  from: string;
  to: string;
};

export default function Home() {
  const [coinList, setCoinList] = useState<Array<string>>();
  const [currency, setCurrency] = useState<CurrencyType>();
  const [trade, setTrade] = useState<Array<TradeData>>();

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

  const fetchPublicMarketData = () => {
    getData(
      "https://api.binance.com/api/v3/trades?symbol=" + currency?.from
    ).then((data) => {
      console.log(data);
      setTrade(data);
    });
  };

  return (
    <div className={styles.main}>
      <Selector
        label="From :"
        values={coinList || []}
        onChange={handleChange}
      />
      <Selector label="To :" values={coinList || []} onChange={handleChange} />
      <Button
        variant="contained"
        disabled={currency && currency.from && currency.to ? false : true}
        endIcon={<SendIcon />}
        onClick={fetchPublicMarketData}
      >
        See Data
      </Button>
      {trade ? <TradeCard tradeData={trade[0]} /> : null}
    </div>
  );
}
