import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import anime from "animejs";

import { Link } from "../Link";

class Component extends React.Component {
  static displayName = "Brand";

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func,
  };

  static defaultProps = {
    link: "/",
  };

  constructor() {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount() {
    const paths = this.svgElement.querySelectorAll("path");
    anime.remove(paths);
  }

  enter() {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll("path");

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      delay: (path, index) =>
        stableTime ? 0 : index * energy.duration.stagger,
      duration: (path) =>
        stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      },
    });
  }

  exit() {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll("path");

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: "easeInCubic",
      duration: energy.duration.exit,
      opacity: 0,
    });
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      direction: "reverse",
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement, { opacity: 0 });
        onExit && onExit();
      },
    });
  }

  render() {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1
        className={cx(classes.root, hover && classes.hover, className)}
        {...etc}
      >
        <Link
          className={classes.link}
          href={link}
          title="Firman Jabar logo"
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <span className={classes.title}>FirmanJabar</span>
          <svg
            ref={(ref) => (this.svgElement = ref)}
            className={classes.svg}
            onMouseEnter={() => sounds.hover.play()}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 632 64"
          >
            <path
              className={classes.path}
              d="M8 56V24H0V16H8V8H16V0H40V8H24V16H56V56H40V24H24V56H8Z"
            />
            <path
              className={classes.path}
              d="M88 24H96V32H88V56H72V16H88V24ZM120 16V24H96V16H120Z"
            />
            <path
              className={classes.path}
              d="M128 56V16H176V24H184V56H168V24H160V56H144V24H136V56H128Z"
            />
            <path
              className={classes.path}
              d="M200 56V48H192V40H200V32H232V24H200V16H240V24H248V56H200ZM208 48H232V40H208V48Z"
            />
            <path
              className={classes.path}
              d="M256 56V16H304V24H312V56H296V24H272V56H256Z"
            />
            <path
              className={classes.path}
              d="M352 8V0H368V8H352ZM328 64V56H352V24H344V16H368V56H360V64H328Z"
            />
            <path
              className={classes.path}
              d="M392 56V48H384V40H392V32H424V24H392V16H432V24H440V56H392ZM400 48H424V40H400V48Z"
            />
            <path
              className={classes.path}
              d="M456 56V48H448V0H464V16H496V24H504V48H496V56H456ZM464 48H488V24H464V48Z"
            />
            <path
              className={classes.path}
              d="M520 56V48H512V40H520V32H552V24H520V16H560V24H568V56H520ZM528 48H552V40H528V48Z"
            />
            <path
              className={classes.path}
              d="M600 24H608V32H600V56H584V16H600V24ZM632 16V24H608V16H632Z"
            />
          </svg>
        </Link>
      </h1>
    );
  }
}

export { Component };
