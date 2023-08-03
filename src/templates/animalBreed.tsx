import * as React from "react";
import { PageProps, graphql } from "gatsby";

import SEOHead from "../components/SEOHead";
import Layout from "../components/Layout";
import BreedHero from "../components/BreedHero";

import { animalBreedType } from "../types/animal-breed";

import { Container } from "../styles/container";

type AnimalBreedPageProps = {
  contentfulAnimalBreed: animalBreedType;
};

const AnimalBreedPage = ({ data }: PageProps<AnimalBreedPageProps>) => {
  const { contentfulAnimalBreed } = data;

  return (
    <Layout>
      <Container maxWidth="1440px" width="90%" margin="0 auto">
        <BreedHero {...contentfulAnimalBreed} />
      </Container>
    </Layout>
  );
};

export default AnimalBreedPage;

export const Head = ({ data }: PageProps<AnimalBreedPageProps>) => {
  const {
    contentfulAnimalBreed: { animalBreed, animals },
  } = data;
  return <SEOHead title={`${animalBreed} | ${animals[0].animalName} Breed`} />;
};

export const query = graphql`
  query AnimalBreedContent($id: String!) {
    contentfulAnimalBreed(id: { eq: $id }) {
      id
      animalBreed
      handle
      image {
        id
        url
      }
      description {
        raw
      }
      lifespan
      friendliness
      shedScale
      origination
      animals {
        animalName
        handle
      }
    }
  }
`;
