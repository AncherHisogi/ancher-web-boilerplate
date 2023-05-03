import { RefObject } from "react";
import { HTMLFooterProps } from "types";
import * as S from "./elements";

export interface FooterProps extends HTMLFooterProps {
  ref?: RefObject<HTMLDivElement>;
}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return <S.Footer {...props}>footer</S.Footer>;
};
