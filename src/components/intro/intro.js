import React, { Fragment } from 'react';
import './intro.scss';
import Grid from '@material-ui/core/Grid';
import Social from '../social/social';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Cursor from '../cursor/cursor';
import { useSpring, animated, config, useTransition } from 'react-spring';

const useStyles = makeStyles(theme => ({
  myWorksFab: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginTop: theme.spacing(3)
  },
  topSpacing: {
    marginTop: theme.spacing(2)
  }
}));

function Intro(props) {
  const classes = useStyles();
  const moveInAnimation = useSpring({
    marginTop: "0px",
    opacity: 1,
    from: {
      opacity: 0,
      marginTop: "30px"
    },
    config: { ...config.wobbly, duration: 700 }
  });

  const descriptionsComponents = [
    <h2 className="description">
      Howdy, I'm Ameer Jhan <Cursor />
    </h2>,
    <p className="sub-description">
      A passionate full-stack developer and an open source lover
    </p>,
    <Social className={classes.topSpacing} />,
    <Fab
      className={classes.myWorksFab}
      variant="extended"
      size="medium"
      aria-label="Add"
    >
      <span className="white-color"><i className="fa fa-arrow-down white-color"></i> &nbsp; My Works</span>
    </Fab>        
  ];

  const moveInTransitions = useTransition(descriptionsComponents, descriptionComponent => descriptionsComponents.indexOf(descriptionComponent), {
    enter: {
      marginTop: "0px",
      opacity: 1,
    },
    from: {
      opacity: 0,
      marginTop: "30px",
    },
    config: { ...config.slow, duration: 700 },
  });

  return (
    <Fragment>
      <Grid className="avatar-container">
        <Grid item md={3}>
          <animated.div style={moveInAnimation}>
            <img className="avatar" src={props.src} />
          </animated.div>
          <div className="text-center">
             {
               moveInTransitions.map(({ item, key, props }) => 
                 <animated.div key={key} style={props} >
                   {item}
                 </animated.div>
               )
             }
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Intro;
