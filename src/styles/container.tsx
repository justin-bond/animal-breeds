import { styled } from "styled-components";

type ContainerProps = {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  width?: string;
  maxWidth?: string;
};

export const Container = styled.div<ContainerProps>`
  margin: ${({ margin }) => margin || 0};
  margin-top: ${({ marginTop }) => marginTop || null};
  margin-bottom: ${({ marginBottom }) => marginBottom || null};
  padding: ${({ padding }) => padding || 0};
  padding-top: ${({ paddingTop }) => paddingTop || null};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || null};
  width: ${({ width }) => width || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
`;
