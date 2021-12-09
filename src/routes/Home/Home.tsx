import React, { FC } from "react";
import { Classes } from "jss";
import { OutboundLink } from 'react-ga';

import { Text } from "../../common";
import { Planner } from './components';

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => (
  <>
    <main className={classes.container}>
      <Text h1>Ranker (SoM)</Text>
      <Text>The lightweight ranking calculator.</Text>
      <Planner />
    </main>
    <footer className={classes.footer}>
      <Text style={{ marginBottom: 16 }}>Made with ❤ by Apparent - Earthshaker (EU)</Text>
      <Text style={{ marginBottom: 16 }}>hastily updated to SoM values by Lis - Dreadnaught (EU)</Text>
      <Text style={{ marginBottom: 16 }}>don't forget kids, ranking is cringe!</Text>
    </footer>
  </>
);

export default Home;
