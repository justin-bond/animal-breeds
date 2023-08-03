import React from "react";

import { animalBreedType } from "../../types/animal-breed";
import { Container } from "../../styles/container";
import { H3, Text } from "../../styles/global";
import { Link } from "gatsby-link";
import {
  BreedCardContainer,
  BreedCardRatingContainer,
  ImageContainer,
} from "./styles";
import { Grid } from "../../styles/grid";
import Rating from "../Rating/Rating";
import RatingFilled from "../../icons/RatingFilled";
import RatingUnfilled from "../../icons/RatingUnfilled";

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
