import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { FilterType } from "./TradeCardList.component";

type FilterButtonsProps = {
  filter: FilterType;
  setFilter: (newFilter: FilterType) => void;
};

export default function FilterButtons({
  filter,
  setFilter,
}: FilterButtonsProps) {
  const handleFilter = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: FilterType
  ) => {
    setFilter(newFilter);
  };

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={handleFilter}
      aria-label="filter"
    >
      <ToggleButton value="time">
        <AccessTimeIcon />
      </ToggleButton>
      <ToggleButton value="price">
        <AttachMoneyIcon />
      </ToggleButton>
      <ToggleButton value="qty">
        <ShowChartIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
