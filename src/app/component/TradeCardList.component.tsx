import React from "react";
import TradeCard from "./TradeCard.component";
import { TradeData } from "./TradeData.type";

type Props = {
  tradeDataArray: TradeData[];
  name: string;
};

const TradeCardList: React.FC<Props> = ({ tradeDataArray, name }) => {
  return (
    <div>
      <div>{name} :</div>
      {tradeDataArray.map((tradeData) => (
        <TradeCard key={tradeData.id} tradeData={tradeData} />
      ))}
    </div>
  );
};

export default TradeCardList;
