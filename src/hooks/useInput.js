import {useState} from 'react';

export function useInput(initialValue, placeholder) {
  const [value, setValue] = useState(initialValue);

  const onChangeText = item => {
    setValue(item);
  };

  return {
    value,
    onChangeText,
    placeholder,
  };
}
