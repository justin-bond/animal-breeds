import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { AnimalsType } from "../types/animals";
import { animalBreedType } from "../types/animal-breed";
import Layout from "../components/Layout/Layout";
import { H1, H3, Text } from "../styles/global";
import { Grid } from "../styles/grid";
import { Container } from "../styles/container";
import BreedCard from "../components/BreedCard/BreedCard";
// import Layout from "../components/layout";
// import { Container, Box, Heading } from "../components/ui";
// import SEOHead from "../components/head";

type AnimalPageProps = {
  contentfulAnimals: AnimalsType;
  allContentfulAnimalBreed: {
    nodes: animalBreedType[];
  };
};

const AnimalPage = ({ data }: PageProps<AnimalPageProps>) => {
  const { contentfulAnimals, allContentfulAnimalBreed } = data;
  console.log(contentfulAnimals, allContentfulAnimalBreed);
  return (
    <Layout>
      <Container maxWidth="1440px" width="90%" margin="0 auto">
        <Container marginBottom="36px">
          <Container marginBottom="12px">
            <H1>{contentfulAnimals.animalName} breeds</H1>
          </Container>
          <Text>{allContentfulAnimalBreed.nodes.length} Breeds</Text>
        </Container>
        <Grid columnsTablet="repeat(3, 1fr)" gap="40px">
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

// export const Head = (props) => {
//   const { page } = props.data;
//   return <SEOHead {...page} />;
// };

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
