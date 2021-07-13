import React from 'react';
import { TextFieldStyleProps, inputBoxStyle, inputBoxTextStyle } from './DisplayNameField.Styles';
import { TextField } from '@fluentui/react';

export const MAXIMUM_LENGTH_OF_NAME = 10;
export const ENTER_KEY = 13;

interface DisplayNameFieldProps {
  setName(displayName: string): void;
  defaultName?: string;
  validateName?(): void;
}

export const DisplayNameField = (props: DisplayNameFieldProps): JSX.Element => {
  const {
    setName,
    defaultName,
    validateName
  } = props;

  const onNameTextChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ): void => {
    if (newValue === undefined) return;
    setName(newValue);
  };

  return (
    <TextField
      autoComplete="off"
      defaultValue={defaultName}
      inputClassName={inputBoxTextStyle}
      ariaLabel="Choose your name"
      className={inputBoxStyle}
      onChange={onNameTextChange}
      id="displayName"
      placeholder="Enter your name"
      onKeyDown={(ev) => {
        if (ev.which === ENTER_KEY) {
          validateName && validateName();
        }
      }}
      styles={TextFieldStyleProps}
    />
  );
};
