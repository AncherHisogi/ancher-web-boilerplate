import { RefObject } from "react";
import type { HTMLHeaderProps } from "types";

import * as S from "./elements";

export interface HeaderProps extends HTMLHeaderProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return <S.Header {...props}>header</S.Header>;
};
