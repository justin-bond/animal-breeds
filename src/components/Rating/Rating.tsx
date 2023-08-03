import React from "react";

import { FilledRating, RatingsContainer, UnfilledRating } from "./styles";

type RatingProps = {
  unFilledIcon: JSX.Element;
  filledIcon: JSX.Element;
  rating: number;
};

const Rating = ({ unFilledIcon, filledIcon, rating }: RatingProps) => {
  return (
    <RatingsContainer>
      <UnfilledRating>
        {[...Array(5)].map((_, index) => {
          return <div key={index}>{unFilledIcon}</div>;
        })}
      </UnfilledRating>
      <FilledRating width={`${(rating / 5) * 100}%`}>
        {[...Array(5)].map((_, index) => {
          return <div key={index}>{filledIcon}</div>;
        })}
      </FilledRating>
    </RatingsContainer>
  );
};

export default Rating;
