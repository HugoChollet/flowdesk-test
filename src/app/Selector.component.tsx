"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type SelectorProps = {
  label: string;
  values: Array<string>;
  onChange: (event: SelectChangeEvent<string>, label: string) => void;
};

export const Selector = ({ label, values, onChange }: SelectorProps) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="name-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        defaultValue={values[0]}
        onChange={(event: SelectChangeEvent<string>) => onChange(event, label)}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
