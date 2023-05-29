import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import { TradeData } from "./TradeData.type";

// This is our styled card component
const StyledCard = styled(Card)`
  margin: 20px;
  padding: 20px;
  background-color: #fafafa;
`;

type Props = {
  tradeData: TradeData;
};

const TradeCard: React.FC<Props> = ({ tradeData }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          Trade ID: {tradeData.id}
        </Typography>
        <Typography variant="body2">Price: {tradeData.price}</Typography>
        <Typography variant="body2">Quantity: {tradeData.qty}</Typography>
        <Typography variant="body2">
          Quote Quantity: {tradeData.quoteQty}
        </Typography>
        <Typography variant="body2">
          Time: {new Date(tradeData.time).toLocaleString()}
        </Typography>
        <Typography variant="body2">
          Is Buyer Maker: {tradeData.isBuyerMaker ? "Yes" : "No"}
        </Typography>
        <Typography variant="body2">
          Is Best Match: {tradeData.isBestMatch ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TradeCard;
