import { ForwardedRef } from "react";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";
import type { KeyOfType, HTMLInputProps } from "types";
import { getRandomIntInclusive } from "utils";
import * as S from "./elements";

export interface FormCheckboxProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue">,
    Omit<UseControllerProps<T>, "name"> {
  name: KeyOfType<T>;
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({ name, control, label, ...props }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ""
  });

  const pseudoId = name + getRandomIntInclusive(0, 100000); // update to React 18 to use useId hook ?

  return (
    <S.Container {...props}>
      <S.InputWrapper>
        <S.Input
          {...props}
          id={pseudoId}
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          type='checkbox'
          ref={ref}
        />
        {label && <S.Label htmlFor={pseudoId}>{label}</S.Label>}
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};

FormCheckbox.displayName = "FormCheckbox";
