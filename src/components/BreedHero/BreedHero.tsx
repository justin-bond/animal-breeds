import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { animalBreedType } from "../../types/animal-breed";

import { Container } from "../../styles/container";
import { BoldText, H1, Text } from "../../styles/global";
import { BreedDetailsContainer, ImageContainer } from "./styles";
import { Grid } from "../../styles/grid";
import Rating from "../Rating/Rating";
import RatingFilled from "../../icons/RatingFilled";
import RatingUnfilled from "../../icons/RatingUnfilled";
import { Link } from "gatsby-link";

const BreedHero = ({
  animalBreed,
  image,
  description,
  friendliness,
  shedScale,
  origination,
  lifespan,
  animals,
}: animalBreedType) => {
  return (
    <div>
      <Container marginBottom="24px">
        <Link to={`/${animals[0].handle}`}>
          {"Back to "}
          {`${animals[0].animalName} Breeds`}
        </Link>
      </Container>
      <Grid $columnsTablet="65% 1fr" gap="20px">
        <div>
          <ImageContainer marginBottom="24px">
            <img src={image.url} />
          </ImageContainer>
        </div>
        <div>
          <Container marginBottom="16px">
            <H1>{animalBreed}</H1>
          </Container>
          <Container marginBottom="16px">
            <Text>{renderRichText(description)}</Text>
          </Container>
          {origination && (
            <BreedDetailsContainer marginBottom="16px">
              <Text>Origination</Text>
              <BoldText>{origination}</BoldText>
            </BreedDetailsContainer>
          )}
          {lifespan && (
            <BreedDetailsContainer marginBottom="16px">
              <Text>Lifespan</Text>
              <BoldText>{lifespan}</BoldText>
            </BreedDetailsContainer>
          )}
          {friendliness && (
            <BreedDetailsContainer marginBottom="16px">
              <Text>Friendliness</Text>
              <Rating
                filledIcon={<RatingFilled />}
                unFilledIcon={<RatingUnfilled />}
                rating={friendliness}
              />
            </BreedDetailsContainer>
          )}
          {shedScale && (
            <BreedDetailsContainer marginBottom="16px">
              <Text>Shed Scale</Text>
              <Rating
                filledIcon={<RatingFilled />}
                unFilledIcon={<RatingUnfilled />}
                rating={shedScale}
              />
            </BreedDetailsContainer>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default BreedHero;
