import React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

import Layout from "../components/Layout/Layout";

import { Container } from "../styles/container";
import { BoldText, Text } from "../styles/global";
import { Grid } from "../styles/grid";
import Button from "../components/Button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="1440px" width="90%" margin="0 auto">
        <Grid columnsTablet="1fr 1fr" gap="10%">
          <img src="/static/doggo.png" />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Container marginBottom="20px">
              <BoldText fontSize="5em">Thank you, Calendly!</BoldText>
            </Container>
            <Link to="/dog">
              <Button>View Dog Breeds</Button>
            </Link>
          </Container>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
