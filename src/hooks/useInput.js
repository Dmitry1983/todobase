import {useState} from 'react';

export function useInput(initialValue, title) {
  const [value, setValue] = useState(initialValue);

  const onChangeText = item => {
    setValue(item);
  };
  const placeholder = title;
  return {
    value,
    onChangeText,
    placeholder,
  };
}
