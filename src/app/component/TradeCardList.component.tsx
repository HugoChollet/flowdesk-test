import React, { useState } from "react";
import FilterButtons from "./FilterButtons.component";
import TradeCard from "./TradeCard.component";
import { TradeData } from "./TradeData.type";

export type FilterType = null | "time" | "price" | "qty";

type Props = {
  tradeDataArray: TradeData[];
  name: string;
};

const TradeCardList: React.FC<Props> = ({ tradeDataArray, name }) => {
  const [filter, setFilter] = useState<FilterType>(null);

  const compare = (a: any, b: any) => {
    if (filter) {
      if (a[filter] < b[filter]) return -1;
      if (a[filter] > b[filter]) return 1;
    }
    return 0;
  };

  tradeDataArray.sort(compare);

  return (
    <div>
      <div>
        <span>Data for {name}, </span>
        filter by <FilterButtons filter={filter} setFilter={setFilter} />
      </div>
      {tradeDataArray.map((tradeData) => (
        <TradeCard key={tradeData.id} tradeData={tradeData} />
      ))}
    </div>
  );
};

export default TradeCardList;
