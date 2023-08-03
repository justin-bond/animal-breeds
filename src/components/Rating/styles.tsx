import { styled } from "styled-components";
import { Container } from "../../styles/container";

export const RatingsContainer = styled(Container)`
  position: relative;
  display: inline-block;
`;

const SharedRatingStyles = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const UnfilledRating = styled(SharedRatingStyles)``;

type RatingFilledProps = {
  width?: string;
};

export const FilledRating = styled(SharedRatingStyles)<RatingFilledProps>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ width }) => (width ? width : 0)};
`;
