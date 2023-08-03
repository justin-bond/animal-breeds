import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;
		font-size: 16px;
  }

  #root {
    margin:0 auto;
  }

	img {
		display: block;
		width: 100%;
	}

	a {
		color: currentColor;
		text-decoration: none;
	}
`;

interface TextProps {
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  align?: "left" | "center" | "right";
  display?: "block" | "inline" | "inline-block";
}

const screenSizes = {
  mobile: "320px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  widescreen: "1400px",
};

export const device = {
  mobile: `(min-width: ${screenSizes.mobile})`,
  tablet: `(min-width: ${screenSizes.tablet})`,
  laptop: `(min-width: ${screenSizes.laptop})`,
  desktop: `(min-width: ${screenSizes.desktop})`,
  widescreen: `(min-width: ${screenSizes.widescreen})`,
};

export const Text = styled.span<TextProps>`
  color: ${({ color }) => (color ? color : "#131A22")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1em")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.5em")};
  text-align: ${({ align }) => (align ? align : null)};
  display: ${({ display }) => (display ? display : null)};
`;

export const BoldText = styled(Text)`
  font-weight: bold;
`;

export const H1 = styled.h1<TextProps>`
  color: ${({ color }) => (color ? color : "#131A22")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "2em")};
  text-align: ${({ align }) => (align ? align : null)};
`;

export const H2 = styled.h2<TextProps>`
  color: ${({ color }) => (color ? color : "#131A22")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5em")};
  text-align: ${({ align }) => (align ? align : null)};
`;

export const H3 = styled.h3<TextProps>`
  color: ${({ color }) => (color ? color : "#131A22")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.17em")};
  text-align: ${({ align }) => (align ? align : null)};
`;
