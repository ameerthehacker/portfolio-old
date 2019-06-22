import React, { Fragment } from 'react';
import './works.scss';
import ProjectCard from '../../components/project-card/project-card';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PROJECTS from "../../projects";

const useStyles = makeStyles(theme => ({
  worksContainer: {
    padding: theme.spacing(2),
  }
}));
const BG_COLORS = [
  ["FE6B8B", "FF8E53"],
  ["FF512F", "DD2476"],
  ["43CEA2", "185A9D"],
  ["56Ab2F", "A8E063"]
]

function Works() {
  const classes = useStyles();
  let colorIndex = 0;

  return (
    <Grid container spacing={2} className={classes.worksContainer}>
      {PROJECTS.map((PROJECT) => 
        {
          return PROJECT.projects.map((project) => 
          <Fragment>
            <Grid item md={4} xs={12}> 
              <h1 className="text-center" style={{fontWeight: "300"}}>
                {PROJECT.icon? 
                  <i style={{color: `#${PROJECT.iconColor}`}} class={PROJECT.icon}></i>: ""
                } {PROJECT.title}
              </h1>
              <ProjectCard {...project} bgColors={BG_COLORS[(colorIndex++) % BG_COLORS.length]}/>
            </Grid>
          </Fragment>
        )}
      )}
    </Grid>
  );
}

export default Works;
