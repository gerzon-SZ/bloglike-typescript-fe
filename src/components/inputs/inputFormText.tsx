import React from 'react';
import TextField from '@mui/material/TextField';
import { Control, Controller, FieldValues } from 'react-hook-form';
interface ValidationRules {
  required: string | boolean;
}
interface InputFormTextProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  rules: ValidationRules;
  [x: string]: any;
  type: string;
}

const InputFormText: React.FC<InputFormTextProps> = ({
  name,
  label,
  control,
  rules,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          minRows={5} // Adjust the number of rows as needed
          label={label}
          variant="outlined"
          fullWidth
          error={fieldState.invalid}
          helperText={fieldState.error ? fieldState.error.message : ''}
          {...field}
          {...rest}
        />
      )}
    />
  );
};

export default InputFormText;
