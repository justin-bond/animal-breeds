import { styled } from "styled-components";

import { device } from "./global";
import { Container } from "./container";

type GridProps = {
  columns?: string;
  columnsTablet?: string;
  rows?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
};

export const Grid = styled(Container).withConfig({
  shouldForwardProp: (prop) => !["columnsTablet"].includes(prop),
})<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || "auto"};
  grid-template-rows: ${({ rows }) => rows || "auto"};
  gap: ${({ gap }) => gap || null};
  column-gap: ${({ columnGap }) => columnGap || null};
  row-gap: ${({ rowGap }) => rowGap || null};

  @media ${device.tablet} {
    grid-template-columns: ${({ columnsTablet }) => columnsTablet || null};
  }
`;
