import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

// import SEOHead from "../components/head";
import Layout from "../components/Layout";
import BreedCard from "../components/BreedCard";

import { AnimalsType } from "../types/animals";
import { animalBreedType } from "../types/animal-breed";

import { H1, Text } from "../styles/global";
import { Grid } from "../styles/grid";
import { Container } from "../styles/container";
import SEOHead from "../components/SEOHead/SEOHead";

type AnimalPageProps = {
  contentfulAnimals: AnimalsType;
  allContentfulAnimalBreed: {
    nodes: animalBreedType[];
  };
};

const AnimalPage = ({ data }: PageProps<AnimalPageProps>) => {
  const { contentfulAnimals, allContentfulAnimalBreed } = data;

  return (
    <Layout>
      <Container maxWidth="1440px" width="90%" margin="0 auto">
        <Container marginBottom="36px">
          <Container marginBottom="12px">
            <H1>{contentfulAnimals.animalName} breeds</H1>
          </Container>
          <Text>{allContentfulAnimalBreed.nodes.length} Breeds</Text>
        </Container>
        <Grid $columnsTablet="repeat(3, 1fr)" gap="40px">
          {allContentfulAnimalBreed.nodes.map((breed: animalBreedType) => {
            return (
              <React.Fragment key={breed.handle}>
                <BreedCard {...breed} />
              </React.Fragment>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default AnimalPage;

export const Head = ({ data }: PageProps<AnimalPageProps>) => {
  const { contentfulAnimals } = data;
  return <SEOHead title={`${contentfulAnimals.animalName} breeds`} />;
};

export const query = graphql`
  query AnimalContent($id: String!, $handle: String!) {
    contentfulAnimals(id: { eq: $id }) {
      id
      animalName
      handle
    }
    allContentfulAnimalBreed(
      filter: { animals: { elemMatch: { handle: { eq: $handle } } } }
      sort: { animalBreed: ASC }
    ) {
      nodes {
        animalBreed
        handle
        image {
          id
          url
        }
        friendliness
        shedScale
        animals {
          handle
        }
      }
    }
  }
`;
