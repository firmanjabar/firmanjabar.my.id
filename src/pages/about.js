import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

const styles = (theme) => ({
  root: {},
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1>
                <Text>About Me</Text>
              </h1>
            </header>
            <center>
              <Fader>
                <img width="250px" src='https://i.ibb.co/V2sQzn8/firmancircle2.png' alt='Firman Abdul Jabar' />
              </Fader>
              <p>
                Hi There, my name is <b>Firman Abdul Jabar</b> — I wanna be a [Fullstack] Web Developer. Wish me luck! ✌️
              </p>
            </center>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
