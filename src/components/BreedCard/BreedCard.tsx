import React from "react";
import { Link } from "gatsby-link";

import Rating from "../Rating";

import { animalBreedType } from "../../types/animal-breed";

import RatingFilled from "../../icons/RatingFilled";
import RatingUnfilled from "../../icons/RatingUnfilled";

import { Container } from "../../styles/container";
import { H3, Text } from "../../styles/global";
import {
  BreedCardContainer,
  BreedCardRatingContainer,
  ImageContainer,
} from "./styles";

const BreedCard = ({
  animalBreed,
  handle,
  animals,
  image,
  friendliness,
  shedScale,
}: animalBreedType) => {
  return (
    <div>
      <Link to={`/${animals[0].handle}/${handle}`}>
        <BreedCardContainer padding="20px">
          <Container marginBottom="20px">
            <ImageContainer marginBottom="24px">
              <img src={image.url} />
            </ImageContainer>
            <H3>{animalBreed}</H3>
          </Container>
          {friendliness && (
            <BreedCardRatingContainer>
              <Text>Friendliness</Text>
              <Rating
                filledIcon={<RatingFilled />}
                unFilledIcon={<RatingUnfilled />}
                rating={friendliness}
              />
            </BreedCardRatingContainer>
          )}
          {shedScale && (
            <BreedCardRatingContainer>
              <Text>Shedding Level</Text>
              <Rating
                filledIcon={<RatingFilled />}
                unFilledIcon={<RatingUnfilled />}
                rating={shedScale}
              />
            </BreedCardRatingContainer>
          )}
        </BreedCardContainer>
      </Link>
    </div>
  );
};

export default BreedCard;
