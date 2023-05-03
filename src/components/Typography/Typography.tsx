import * as S from "./elements";
import { HTMLHeadingProps } from "types";

export interface H1Props extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const H1: React.FC<H1Props> = ({ variant = "regular", ...props }) => {
  return <S.Heading1 {...props} variant={variant} />;
};

export interface H2Props extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const H2: React.FC<H2Props> = ({ variant = "regular", ...props }) => {
  return <S.Heading2 {...props} variant={variant} />;
};

export interface H3Props extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const H3: React.FC<H3Props> = ({ variant = "regular", ...props }) => {
  return <S.Heading3 {...props} variant={variant} />;
};

export interface H4Props extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const H4: React.FC<H4Props> = ({ variant = "regular", ...props }) => {
  return <S.Heading4 {...props} variant={variant} />;
};

export interface H5Props extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const H5: React.FC<H5Props> = ({ variant = "regular", ...props }) => {
  return <S.Heading5 {...props} variant={variant} />;
};

export interface H6Props extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const H6: React.FC<H6Props> = ({ variant = "regular", ...props }) => {
  return <S.Heading6 {...props} variant={variant} />;
};

export interface ParagraphProps extends HTMLHeadingProps {
  variant?: "regular";
  ref?: React.Ref<HTMLHeadingElement>;
}

export const Paragraph: React.FC<ParagraphProps> = ({ variant = "regular", ...props }) => {
  return <S.Paragraph {...props} variant={variant} />;
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph
};
