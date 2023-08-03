import React from "react";

import GlobalStyle, { H2 } from "../../styles/global";
import { Container } from "../../styles/container";
import { Link } from "gatsby-link";
import { Grid } from "../../styles/grid";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <GlobalStyle />
      <Container maxWidth="1440px" width="90%" margin="0 auto">
        <Container padding="25px 0">
          <Grid>
            <Link to="/">
              <H2>PETOPIA</H2>
            </Link>
          </Grid>
        </Container>
      </Container>
      {children}
    </>
  );
};

export default Layout;
