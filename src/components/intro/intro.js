import React, { Fragment } from 'react';
import './intro.scss';
import Grid from '@material-ui/core/Grid';
import Social from '../social/social';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Cursor from '../cursor/cursor';
import { useSpring, animated, config, useTransition } from 'react-spring';
import MyImage from '../../images/me.jpg';

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
      Howdy <i style={{color: 'hotpink'}} className="fa fa-hand-peace-o	"></i>, I'm Ameer Jhan <Cursor />
    </h2>,
    <p className="sub-description">
      A passionate full-stack developer who has fell in <i style={{color: 'hotpink'}} className="fa fa-heart"></i> with learning and open source
    </p>,
    <Social className={classes.topSpacing} />,
    <Fab
      onClick={() => { props.history.push('/works') }}
      className={classes.myWorksFab}
      variant="extended"
      size="medium"
      aria-label="Add"
    >
      <span style={{color: "white"}}><i style={{color: "white"}} className="fa fa-laptop"></i> My Works</span>
    </Fab>        
  ];

  const moveInTransitions = useTransition(descriptionsComponents, descriptionComponent => descriptionsComponents.indexOf(descriptionComponent), {
    enter: {
      marginTop: "0px",
      opacity: 1,
    },
    from: {
      opacity: 0,
      marginTop: "40px",
    },
    config: { ...config.slow, duration: 700 },
  });

  return (
    <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center" 
        style={{height: "100vh"}}>
        <Grid item md={3} sm={6} xs={12}>
          <animated.div style={moveInAnimation}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={8} sm={7} xs={6}>
                <img className="avatar" src={MyImage} />
              </Grid>
            </Grid>
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
  );
}

export default Intro;
