import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1.1em 2.5em;
    border: none;
    text-transform: uppercase;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.8;
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    padding: 0.9em 2em;
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: color 500ms ease, background-color 500ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
    }
  `
};

export const Button = styled("button")<ButtonProps>`
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 0.8em;
  line-height: 1;
  cursor: pointer;
  outline: none;
  border-radius: 50px;
  white-space: nowrap;

  ${({ variant }) => buttonStyles[variant!]}
`;
