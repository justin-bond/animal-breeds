import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { AnimalsType } from "../types/animals";
import { animalBreedType } from "../types/animal-breed";
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
    <div>
      <div>This is the animal page for</div>
      <div>{contentfulAnimals.animalName}</div>
      {allContentfulAnimalBreed.nodes.map((breed) => {
        return (
          <div key={breed.handle}>
            <Link to={`/${breed.animals[0].handle}/${breed.handle}`}>
              {breed.animalBreed}
            </Link>
          </div>
        );
      })}
    </div>
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
    ) {
      nodes {
        animalBreed
        handle
        description {
          raw
        }
        animals {
          handle
        }
      }
    }
  }
`;
