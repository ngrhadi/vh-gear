import { Grid, Navbar } from '@mantine/core';
import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        margin: '10px',
      }}
    >
      {/* <Navbar>
        <Navbar.Section> */}

      <Grid align="space-around" sx={{}}>
        <Grid.Col
          display="flex"
          sx={{
            justifyContent: 'flex-start',
          }}
          span={8}
        >
          aasda
        </Grid.Col>
        <Grid.Col
          display="flex"
          sx={{
            justifyContent: 'center',
          }}
          span={4}
        >
          dsdsd
        </Grid.Col>
      </Grid>
      {/* </Navbar.Section>
      </Navbar> */}
    </div>
  );
};

export default Header;
