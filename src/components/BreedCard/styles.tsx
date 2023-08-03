import { styled } from "styled-components";
import { Container } from "../../styles/container";

export const BreedCardContainer = styled(Container)`
  box-shadow: 0px 4px 14px 0px #0000001a;
  border-radius: 20px;
  overflow: hidden;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0px 14px 19px 0px #0000001a;
  }
`;

export const ImageContainer = styled(Container)`
  border-radius: 20px;
  overflow: hidden;
`;

export const BreedCardRatingContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
