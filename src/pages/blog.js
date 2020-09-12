import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "../tools/withStyles";
import { Main } from "../components/Main";
import { Secuence } from "../components/Secuence";
import { Text } from "../components/Text";
import { Fader } from "../components/Fader";
import { Link } from "../components/Link";

const styles = (theme) => ({
  root: {},
  albums: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  album: {
    padding: [0, 0, 20],
    width: "100%",
  },
  albumCover: {
    display: "block",
    margin: [0, 0, 20],
    width: "100%",

    "& img": {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
    },
  },
  title: {
    fontWeight: "bold",
    padding: [10, 8, 0, 8],
  },
  desc: {
    padding: 8,
  },

  "@media screen and (min-width: 768px)": {
    album: {
      padding: 10,
      width: "50%",
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
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link
                  href="https://fanlink.to/circalgorithm"
                  target="circalgorithm"
                >
                  <img
                    alt="Soul Extract Circadian Algorithm album cover"
                    src="/images/circadian-algorithm.jpg"
                  />
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima consequatur, obcaecati ipsam fuga nobis molestias
                    dignissimos quaerat voluptatem ipsum distinctio doloremque
                    error, laudantium numquam qui perferendis eaque id autem
                    tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam error totam quaerat rem ex odio assumenda, ullam
                    quas at magni natus accusantium consectetur.
                  </div>
                </Link>
              </Fader>
            </div>
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link href="https://fanlink.to/filaments" target="filaments">
                  <img
                    alt="Soul Extract Filaments album cover"
                    src="/images/filaments.jpg"
                  />
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima consequatur, obcaecati ipsam fuga nobis molestias
                    dignissimos quaerat voluptatem ipsum distinctio doloremque
                    error, laudantium numquam qui perferendis eaque id autem
                    tenetur!
                  </div>
                </Link>
              </Fader>
            </div>
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link href="https://fanlink.to/filaments" target="filaments">
                  <img
                    alt="Soul Extract Filaments album cover"
                    src="/images/filaments.jpg"
                  />
                  <div className={classes.title}>Title Hamdina</div>
                  <div className={classes.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima consequatur, obcaecati ipsam fuga nobis molestias
                    dignissimos quaerat voluptatem ipsum distinctio doloremque
                    error, laudantium numquam qui perferendis eaque id autem
                    tenetur!
                  </div>
                </Link>
              </Fader>
            </div>
          </div>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Blogs);
