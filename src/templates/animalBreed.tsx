import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { animalBreedType } from "../types/animal-breed";
import Layout from "../components/Layout/Layout";
import { Container } from "../styles/container";
// import Layout from "../components/layout";
// import { Container, Box, Heading } from "../components/ui";
// import SEOHead from "../components/head";

type AnimalBreedPageProps = {
  contentfulAnimalBreed: animalBreedType;
};

const AnimalBreedPage = ({ data }: PageProps<AnimalBreedPageProps>) => {
  const { contentfulAnimalBreed } = data;
  console.log(contentfulAnimalBreed);
  return (
    <Layout>
      <Container maxWidth="1440px" width="90%" margin="0 auto">
        <div>This is the animal breed page for</div>
        <div>{contentfulAnimalBreed.animalBreed}</div>
      </Container>
    </Layout>
  );
};

export default AnimalBreedPage;
// export const Head = (props) => {
//   const { page } = props.data;
//   return <SEOHead {...page} />;
// };
export const query = graphql`
  query AnimalBreedContent($id: String!) {
    contentfulAnimalBreed(id: { eq: $id }) {
      id
      animalBreed
      handle
    }
  }
`;
