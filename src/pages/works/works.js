import React, { Fragment, useState } from 'react';
import './works.scss';
import ProjectCard from '../../components/project-card/project-card';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PROJECTS from "../../projects";
import { useSpring, animated } from 'react-spring';
import ProjectDialog from '../../components/project-dialog/project-dialog';

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

function Works({ history }) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  let colorIndex = 0;
  const [project, setProject] = useState({});
  const scaleAnimation = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)"
    }
  })

  return (
    <Fragment>
      <Grid container spacing={2} className={classes.worksContainer}>
        <Grid item xs={12}>
          <h1 onClick={() => history.push("/")} style={{fontWeight: "200", cursor: "pointer"}}><i style={{color: "hotpink"}} className="far fa-hand-point-left"></i> Back</h1> 
        </Grid>
          {PROJECTS.map((PROJECT) => 
            {
              return PROJECT.projects.map((project) => 
              <Fragment key={project.projectHeading}>
                <Grid item md={4} xs={12}> 
                  <animated.div style={scaleAnimation}>
                    <h1 className="text-center" style={{fontWeight: "300"}}>
                      {PROJECT.icon? 
                        <i style={{color: `#${PROJECT.iconColor}`}} className={PROJECT.icon}></i>: ""
                      } {PROJECT.title}
                    </h1>
                    <ProjectCard onReadMoreClick={(project) => {
                      setOpen(true);
                      setProject(project)
                    }} {...project} icon={PROJECT.icon} bgColors={BG_COLORS[(colorIndex++) % BG_COLORS.length]}/>
                  </animated.div>
                </Grid>
              </Fragment>
            )}
          )}
      </Grid>
      <ProjectDialog project={project} isOpen={isOpen} onCloseDialog={() => setOpen(false)}/>      
    </Fragment>
  );
}

export default Works;
