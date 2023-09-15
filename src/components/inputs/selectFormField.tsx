import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

interface SelectFormFieldProps {
  name: string;
  label: string;
  control: any;
  rules: any;
  options: any;
  [x: string]: any;
}

const SelectFormField = ({
  name,
  label,
  control,
  rules,
  options,
  ...rest
}: SelectFormFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth variant="outlined" error={fieldState.invalid}>
          <InputLabel>{label}</InputLabel>
          <Select label={label} {...field} {...rest}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default SelectFormField;
