import { GatsbyNode } from "gatsby";

const createAnimalBreed = require(`./gatsby/createAnimalBreed`);

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  await Promise.all([createAnimalBreed({ graphql, actions })]);
};
