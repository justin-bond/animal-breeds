const path = require(`path`);

module.exports = async ({ graphql, actions }) => {
  const getAnimalBreeds = `
        query getAnimalBreeds {
            allContentfulAnimalBreed {
				nodes {
					id
					handle
					animals {
						handle
					}
				}
            }
        }
	`;

  const fetchAnimalBreed = async (variables) => {
    const animalBreedResult = await graphql(getAnimalBreeds, variables).then(
      ({ data }) => {
        const {
          allContentfulAnimalBreed: { nodes: breeds },
        } = data;

        return breeds;
      }
    );

    return animalBreedResult;
  };

  await fetchAnimalBreed({}).then((breeds) => {
    return Promise.all(
      // Create individual breed pages
      breeds.map((breed) => {
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        return actions.createPage({
          // Use the handle as the Gatsby page path
          path: `/${breed.animals[0].handle}/${breed.handle}`,

          // use the blog page template as the page component
          component: path.resolve(`./src/templates/animalBreed.tsx`),

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // we need to add the breed id here
            // so our breed template knows which breed
            // the current breed is (when you open it in a browser)
            id: breed.id,
          },
        });
      })
    );
  });
};
