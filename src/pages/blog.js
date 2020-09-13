import React from 'react';
import PropTypes from 'prop-types';

import dataBlog from '../data/blog';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Link } from '../components/Link';

const styles = (theme) => ({
  root: {},
  albums: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  album: {
    padding: [0, 0, 15],
    width: '100%',
  },
  albumCover: {
    display: 'block',
    margin: [0, 0, 20],
    width: '100%',

    '& img': {
      height: 300,
      objectFit: 'cover',
      margin: 0,
      width: '100%',
      maxWidth: '100%',
    },
  },
  wrapper: {
    paddingBottom: 8,
    '&:hover, &:focus': {
      backgroundColor: '#ffffff10',
    },
  },
  title: {
    '& h1': {
      fontSize: 18,
      fontWeight: 'bold',
      padding: [15, 8, 8, 8],
      margin: 0,
    },
  },
  date: {
    fontWeight: 'light',
    fontSize: 12,
    padding: [2, 8],
  },
  desc: {
    padding: [8, 8, 0, 8],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },

  '@media screen and (min-width: 768px)': {
    album: {
      padding: 10,
      width: '50%',
    },
  },
});

class Blogs extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <h1>
            <Text>Blogs</Text>
          </h1>
          <hr />
          <div className={classes.albums}>
            {dataBlog.map((post, index) => (
              <div key={index} className={classes.album}>
                <Fader className={classes.albumCover}>
                  <Link href={post.href}>
                    <img alt={post.title} src={post.image} />
                    <div className={classes.wrapper}>
                      <div className={classes.title}>
                        <h1>
                          <Text>{post.title}</Text>
                        </h1>
                      </div>
                      <div className={classes.date}>{post.date}</div>
                      <div className={classes.desc}>{post.desc}</div>
                    </div>
                  </Link>
                </Fader>
              </div>
            ))}
          </div>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Blogs);
